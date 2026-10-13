/* Dubai British School — Mira Media OOH proposal. Layout classes are unchanged. */

(function () {
  'use strict';

  const SLIDES = [
    { id: 'brand', title: 'Dubai British School' },
    { id: 'school', title: 'The school' },
    { id: 'piers', title: 'Piers' },
    { id: 'furjan', title: 'Al Furjan Mall' },
    { id: 'schedule', title: 'The schedule' },
    { id: 'close', title: 'Conclusion' },
  ];

  let state = {};
  let current = 0;

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s ?? '';
    return d.innerHTML;
  }

  function slideShell(num, title, body, hideHead, scrollBody) {
    if (hideHead) {
      return `<article class="slide slide-cover" data-slide="${num}">${body}</article>`;
    }
    const bodyCls = scrollBody ? ' slide-body-scroll' : '';
    return `<article class="slide pitch-slide" data-slide="${num}">
      <p class="pitch-kicker"><span class="pitch-kicker-line"></span> ${String(num).padStart(2, '0')} / ${String(SLIDES.length).padStart(2, '0')}</p>
      <h1 class="pitch-slide-title">${esc(title)}</h1>
      <div class="slide-body${bodyCls}">${body}</div>
    </article>`;
  }

  function mapFrame(title, query) {
    const src = 'https://maps.google.com/maps?q=' + encodeURIComponent(query) + '&hl=en&z=14&output=embed';
    return mapEmbed(title, src);
  }

  function mapEmbed(title, src) {
    return `<figure class="map-frame"><iframe title="${esc(title)}" src="${esc(src)}" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe></figure>`;
  }

  function renderSlide(index) {
    const c = state;

    switch (SLIDES[index].id) {
      case 'brand':
        return `<article class="slide slide-cover" data-slide="1">
          <div class="pitch-cover has-photo">
            <div class="pitch-cover-row">
              <div class="pitch-cover-inner">
                <div class="pitch-lockup">
                  <img src="${esc(c.brand.logo)}" alt="Mira Media" />
                  <span class="pitch-x" aria-hidden="true">×</span>
                  <img class="partner-logo" src="assets/dbs-jumeira-logo.png" alt="Dubai British School Jumeira" />
                </div>
                <p class="pitch-kicker"><span class="pitch-kicker-line"></span> Secondary and Sixth Form</p>
                <h1 class="pitch-title">A school<br><span>parents can find.</span></h1>
                <p class="pitch-lead">A combined plan for Dubai British School Emirates Hills and Dubai British School Jumeirah Park. Families in Al Furjan, JVT, and the communities around Arcadia and Arbor. One package of AED 130,000, plus 5% VAT and the uploading fee.</p>
                <div class="pitch-facts">
                  <div><small>The schools</small><strong>Emirates Hills and Jumeirah Park</strong></div>
                  <div><small>Admissions</small><strong>Secondary and Sixth Form</strong></div>
                  <div><small>This plan</small><strong>Piers and Al Furjan</strong></div>
                </div>
              </div>
              <div class="pitch-hero-frame">
                <img class="pitch-hero" src="assets/dbs-jumeira-campus.png" alt="Dubai British School Jumeira campus" />
              </div>
            </div>
          </div>
        </article>`;

      case 'school':
        return `<article class="slide metro-slide school-slide" data-slide="2">
          <p class="story-kicker">02 — Dubai British School</p>
          <h1 class="why-title">Why families <span>choose it.</span></h1>
          <p class="why-lead">Two schools, one package. Dubai British School Emirates Hills opened in 2005 and is rated Outstanding by KHDA. Jumeirah Park is the sister campus. Both follow the National Curriculum for England. This plan is for Secondary and Sixth Form admissions, for families in Al Furjan, JVT, and the communities around Arcadia and Arbor.</p>
          <div class="metro-sites">
            <article>
              <figure class="site-photo photo-music">
                <img src="assets/dbs-music.png" alt="Dubai British School" />
              </figure>
              <p class="metro-name">Both schools</p>
              <p class="metro-meta">Emirates Hills and Jumeirah Park, together. A loyal client, and one combined recommendation rather than two separate campaigns.</p>
            </article>
            <article>
              <figure class="site-photo photo-garden">
                <img src="assets/dbs-garden.jpg" alt="Dubai British School" />
              </figure>
              <p class="metro-name">The older years</p>
              <p class="metro-meta">Secondary and Sixth Form. Emirates Hills continues to GCSE and A-level. The early years are not the ask.</p>
            </article>
            <article>
              <figure class="site-photo photo-art">
                <img src="assets/dbs-art.jpg" alt="Dubai British School" />
              </figure>
              <p class="metro-name">The budget</p>
              <p class="metro-meta">One package of AED 130,000 for all locations. 5% VAT and an uploading fee of AED 4,000 are added.</p>
            </article>
          </div>
        </article>`;

      case 'piers':
        return `<article class="slide piers-slide" data-slide="3">
          <p class="story-kicker">03 — Piers</p>
          <h1 class="why-title">Stretched to <span>the door.</span></h1>
          <p class="why-lead">The roadside half of the combined package. These faces reach Al Furjan and the communities beside it: DIP, The Gardens and Discovery Gardens. That is the catchment around Arbor, and the drive toward JVT and Arcadia.</p>
          <figure class="piers-photo">
            <img src="assets/piers-street.jpg" alt="Lightbox faces along the Piers stretch" />
          </figure>
          <div class="piers-boxes">
            <article>
              <strong>16</strong>
              <span>lightboxes, Jebel Ali end. Back-to-back, 32 faces.</span>
            </article>
            <article>
              <strong>14</strong>
              <span>lightboxes, the middle stretch. Back-to-back, 28 faces.</span>
            </article>
            <article>
              <strong>26</strong>
              <span>lightboxes, DIP end, by Sheikh Mohammed Bin Zayed Road. 52 faces.</span>
            </article>
            <article>
              <strong>20,000</strong>
              <span>vehicles an hour, both directions. Al Yalayis Street.</span>
            </article>
          </div>
          <p class="piers-notes">
            <span>56 lightboxes, 112 faces, Sheikh Zayed Road to Jebel Ali</span>
            <span>RTA, 14 September 2019</span>
            <span>Road capacity, not a count of cars past these faces</span>
          </p>
        </article>`;

      case 'furjan':
        return `<article class="slide furjan-slide" data-slide="4">
          <p class="story-kicker">04 — Al Furjan Mall</p>
          <h1 class="why-title">Screens where <span>they shop.</span></h1>
          <p class="why-lead">The residential half, for the same two schools. Families in Al Furjan already pass these screens. The numbers under each site are the ones printed on the supplied sheets.</p>
          <div class="furjan-grid">
            <article>
              <figure class="furjan-photo">
                <img src="assets/furjan-south-screen.png" alt="Furjan South Pavilion screen" />
              </figure>
              <h2>Furjan South Pavilion</h2>
              <div class="furjan-stats">
                <p><strong>2</strong><span>screens</span></p>
                <p><strong>5,000</strong><span>daily footfall</span></p>
              </div>
              <p class="furjan-mix">Asian 2,400 (48%). Other Arab 1,000 (20%). Western 750 (15%). Emirati 500 (10%). Other 350 (7%).</p>
            </article>
            <article>
              <figure class="furjan-photo">
                <img src="assets/furjan-west-screen.png" alt="Furjan West Pavilion screen" />
              </figure>
              <h2>Furjan West Pavilion</h2>
              <div class="furjan-stats">
                <p><strong>2</strong><span>screens</span></p>
                <p><strong>8,300</strong><span>daily footfall</span></p>
              </div>
              <p class="furjan-mix">Asian 4,000 (48%). Other Arab 1,667 (20%). Western 1,250 (15%). Emirati 833 (10%). Other 583 (7%).</p>
            </article>
          </div>
          <p class="piers-notes">
            <span>Supplied Pavilion sheets</span>
            <span>A footfall is not a count of parents</span>
            <span>A share is not a census</span>
          </p>
        </article>`;

      case 'schedule':
        return `<article class="slide schedule-slide" data-slide="5">
          <p class="story-kicker">05 — The schedule</p>
          <h1 class="why-title">One package <span>for all.</span></h1>
          <p class="why-lead">Piers, Furjan South Pavilion and Furjan West Pavilion are one package of AED 130,000. 5% VAT and the uploading fee are added.</p>
          <div class="schedule-wrap">
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Package</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Piers</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Furjan South Pavilion</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Furjan West Pavilion</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Package</td>
                  <td>AED 130,000</td>
                </tr>
                <tr>
                  <td>VAT 5%</td>
                  <td>AED 6,500</td>
                </tr>
                <tr>
                  <td>Uploading fee</td>
                  <td>AED 4,000</td>
                </tr>
                <tr class="schedule-total">
                  <td>Total</td>
                  <td>AED 140,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="schedule-terms">
            <h2>Terms and conditions</h2>
            <ul>
              <li>5% VAT is applied to the package of AED 130,000.</li>
              <li>Uploading fee: AED 4,000.</li>
              <li>Artwork fee: AED 520 per artwork, for Dubai Municipality approval.</li>
              <li>Artwork is 50% Arabic and 50% English. Arabic is set one size larger than English.</li>
              <li>Artwork approval takes 7 to 10 days.</li>
            </ul>
          </div>
        </article>`;

      case 'close':
        return slideShell(5, c.contact.line1, `
          <div class="pitch-cover">
            <div class="pitch-cover-inner">
              <div class="pitch-lockup">
                <img src="${esc(c.brand.logo)}" alt="Mira Media" />
              </div>
              <p class="pitch-kicker"><span class="pitch-kicker-line"></span> Mira Media · Dubai British School</p>
              <h1 class="pitch-title">${esc(c.contact.line1)}<br><span>${esc(c.contact.line2)}</span></h1>
              <p class="pitch-lead">${esc(c.contact.message)}</p>
              <p class="pitch-lead">One package for both schools. Piers is the roadside stretch through Al Furjan. Furjan South and Furjan West are the screens families already pass.</p>
              <div class="pitch-facts">
                <div><small>Email</small><strong><a href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a></strong></div>
                <div><small>Phone</small><strong><a href="tel:+97144368624">${esc(c.contact.phones[0])}</a></strong></div>
              </div>
              <p class="pitch-tag">${esc(c.contact.address)} · ${esc(c.contact.poBox)}</p>
            </div>
          </div>
        `, true);

      default:
        return '';
    }
  }

  function goTo(index) {
    current = Math.max(0, Math.min(SLIDES.length - 1, index));
    const stage = document.getElementById('slide-stage');
    stage.innerHTML = renderSlide(current);
    stage.classList.remove('slide-in');
    void stage.offsetWidth;
    stage.classList.add('slide-in');

    const pad = (n) => String(n).padStart(2, '0');
    document.getElementById('slide-counter').textContent = `${pad(current + 1)} / ${pad(SLIDES.length)}`;
    document.getElementById('prev-btn').disabled = current === 0;
    document.getElementById('next-btn').disabled = current === SLIDES.length - 1;
    const dots = document.getElementById('pitch-dots');
    if (dots) {
      dots.innerHTML = SLIDES.map((_, i) =>
        `<span class="pitch-dot${i === current ? ' is-on' : ''}"></span>`
      ).join('');
    }

    document.querySelectorAll('.overview-thumb').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === current);
    });
  }

  function renderOverview() {
    document.getElementById('overview-grid').innerHTML = SLIDES.map((s, i) => `
      <button type="button" class="overview-thumb" data-index="${i}">
        <span class="overview-thumb-num">${String(i + 1).padStart(2, '0')}</span>
        <span class="overview-thumb-title">${esc(s.title)}</span>
      </button>
    `).join('');

    document.querySelectorAll('.overview-thumb').forEach((btn) => {
      btn.addEventListener('click', () => {
        goTo(parseInt(btn.dataset.index, 10));
        document.getElementById('overview-dialog').close();
      });
    });
  }

  function preparePrint() {
    const root = document.getElementById('print-root');
    root.innerHTML = SLIDES.map((_, i) => renderSlide(i)).join('');
    root.hidden = false;
  }

  function cleanupPrint() {
    const root = document.getElementById('print-root');
    root.innerHTML = '';
    root.hidden = true;
  }

  function initNav() {
    document.getElementById('slide-stage').addEventListener('click', (e) => {
      const jump = e.target.closest('[data-goto]');
      if (!jump) return;
      goTo(parseInt(jump.dataset.goto, 10));
    });

    document.getElementById('prev-btn').addEventListener('click', () => goTo(current - 1));
    document.getElementById('next-btn').addEventListener('click', () => {
      if (current < SLIDES.length - 1) goTo(current + 1);
    });

    document.addEventListener('keydown', (e) => {
      if (e.target.matches('input, textarea')) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goTo(current + 1); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goTo(current - 1); }
    });

    const dialog = document.getElementById('overview-dialog');
    document.getElementById('overview-btn').addEventListener('click', () => dialog.showModal());
    document.getElementById('overview-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

    document.getElementById('print-btn').addEventListener('click', () => {
      preparePrint();
      window.print();
    });
    window.addEventListener('afterprint', cleanupPrint);
  }

  function init() {
    state = window.DECK;
    renderOverview();
    initNav();
    goTo(0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
