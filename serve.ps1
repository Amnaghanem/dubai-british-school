$port = 8084
$root = $PSScriptRoot
$url = "http://localhost:$port/"

Write-Host "Dubai British School - local server"
Write-Host "Serving: $root"
Write-Host "Open:    $url"
Write-Host "Press Ctrl+C to stop."

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)
$listener.Start()

Start-Process $url

while ($listener.IsListening) {
  $context = $listener.GetContext()
  try {
    $path = $context.Request.Url.LocalPath.TrimStart('/')
    if ([string]::IsNullOrWhiteSpace($path)) { $path = 'index.html' }
    $file = Join-Path $root ($path -replace '/', [IO.Path]::DirectorySeparatorChar)

    if (Test-Path $file -PathType Leaf) {
      $bytes = [IO.File]::ReadAllBytes($file)
      $ext = [IO.Path]::GetExtension($file).ToLower()
      $contentType = switch ($ext) {
        '.html' { 'text/html; charset=utf-8' }
        '.md'   { 'text/plain; charset=utf-8' }
        '.js'   { 'application/javascript; charset=utf-8' }
        '.css'  { 'text/css; charset=utf-8' }
        '.png'  { 'image/png' }
        '.jpg'  { 'image/jpeg' }
        '.jpeg' { 'image/jpeg' }
        '.webp' { 'image/webp' }
        '.svg'  { 'image/svg+xml' }
        '.mp4'  { 'video/mp4' }
        '.webm' { 'video/webm' }
        default { 'application/octet-stream' }
      }
      $context.Response.ContentType = $contentType
      $context.Response.AddHeader('Accept-Ranges', 'bytes')
      $range = $context.Request.Headers['Range']
      if ($range -and $range -match '^bytes=(\d+)-(\d*)$') {
        $start = [int]$Matches[1]
        $end = if ($Matches[2]) { [int]$Matches[2] } else { $bytes.Length - 1 }
        if ($end -ge $bytes.Length) { $end = $bytes.Length - 1 }
        if ($start -lt 0 -or $start -gt $end) { $start = 0 }
        $length = $end - $start + 1
        $context.Response.StatusCode = 206
        $context.Response.AddHeader('Content-Range', "bytes $start-$end/$($bytes.Length)")
        $context.Response.ContentLength64 = $length
        $context.Response.OutputStream.Write($bytes, $start, $length)
      } else {
        $context.Response.ContentLength64 = $bytes.Length
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      }
    } else {
      $context.Response.StatusCode = 404
      $msg = [Text.Encoding]::UTF8.GetBytes('Not found')
      $context.Response.OutputStream.Write($msg, 0, $msg.Length)
    }
  } catch {
  } finally {
    try { $context.Response.Close() } catch { }
  }
}
