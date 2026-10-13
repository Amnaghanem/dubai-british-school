/* Dubai British School — Mira Media OOH proposal. Layout classes are unchanged. */

(function () {
  'use strict';

  const SLIDES = [
    { id: 'brand', title: 'Dubai British School' },
    { id: 'school', title: 'The school' },
    { id: 'piers', title: 'Piers' },
    { id: 'furjan', title: 'Furjan Pavilion Screens' },
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
                  <div><small>This plan</small><strong>7 piers and Furjan screens</strong></div>
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
          <p class="story-kicker">03 — Lampposts, Piers</p>
          <h1 class="why-title">Stretched to <span>the door.</span></h1>
          <p class="why-lead">The roadside half of the combined package. One circuit of lampposts: 7 piers, 14 faces. They reach Al Furjan and the communities beside it: DIP, The Gardens and Discovery Gardens. That is the catchment around Arbor, and the drive toward JVT and Arcadia.</p>
          <figure class="piers-photo">
            <img src="assets/piers-street.jpg" alt="Lamppost faces along the Piers circuit" />
          </figure>
          <div class="piers-boxes">
            <article>
              <strong>7</strong>
              <span>piers on one circuit.</span>
            </article>
            <article>
              <strong>14</strong>
              <span>faces on those piers.</span>
            </article>
            <article>
              <strong>1</strong>
              <span>circuit of lampposts.</span>
            </article>
            <article>
              <strong>20,000</strong>
              <span>vehicles an hour, both directions. Al Yalayis Street.</span>
            </article>
          </div>
          <p class="piers-notes">
            <span>One circuit, 7 piers, 14 faces</span>
            <span>RTA, 14 September 2019</span>
            <span>Road capacity, not a count of cars past these faces</span>
          </p>
        </article>`;

      case 'furjan':
        return `<article class="slide furjan-slide" data-slide="4">
          <p class="story-kicker">04 — Furjan Pavilion Screens</p>
          <h1 class="why-title">Screens where <span>they shop.</span></h1>
          <p class="why-lead">The residential half of the same package. Furjan Pavilion Screens, for families in Al Furjan who already pass them.</p>
          <div class="furjan-grid">
            <figure class="furjan-photo">
              <img src="assets/furjan-south-screen.png" alt="Furjan Pavilion screen" />
            </figure>
            <figure class="furjan-photo">
              <img src="assets/furjan-west-screen.png" alt="Furjan Pavilion screen" />
            </figure>
          </div>
          <p class="piers-notes">
            <span>Furjan Pavilion Screens</span>
            <span>In the same package as the Piers circuit</span>
          </p>
        </article>`;

      case 'schedule':
        return `<article class="slide schedule-slide" data-slide="5">
          <p class="story-kicker">05 — The schedule</p>
          <h1 class="why-title">One package <span>for all.</span></h1>
          <p class="why-lead">Lampposts on Piers and Furjan Pavilion Screens are one package of AED 130,000. 5% VAT and the uploading fee are added.</p>
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
                  <td>Lampposts (Piers)</td>
                  <td>One circuit, 7 piers, 14 faces</td>
                </tr>
                <tr>
                  <td>Furjan Pavilion Screens</td>
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
              <p class="pitch-lead">One package for both schools. Lampposts on Piers are one circuit of 7 piers and 14 faces. Furjan Pavilion Screens are the screens families already pass.</p>
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
