const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '../public/downloads');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  info: {
    Title: '5-Point Website Checklist for Wollongong Tradies',
    Author: 'Digital Edge Studio',
    Subject: 'Free Website Checklist',
  },
});

const out = fs.createWriteStream(path.join(outputDir, '5-point-website-checklist.pdf'));
doc.pipe(out);

// ── Colours ─────────────────────────────────────────────────────────────────
const DARK   = '#0f172a';
const ACCENT = '#f97316';
const MUTED  = '#64748b';
const WHITE  = '#ffffff';
const LIGHT  = '#f8fafc';
const BORDER = '#e2e8f0';
const GREEN  = '#22c55e';

const W  = doc.page.width;   // 595.28
const H  = doc.page.height;  // 841.89
const PX = 52;               // horizontal padding
const CW = W - PX * 2;      // content width

// ── Header banner (100pt) ───────────────────────────────────────────────────
doc.rect(0, 0, W, 100).fill(DARK);

doc.fontSize(9).fillColor(ACCENT).font('Helvetica-Bold')
   .text('DIGITAL EDGE STUDIO', PX, 22, { width: CW });

doc.fontSize(20).fillColor(WHITE).font('Helvetica-Bold')
   .text('5-Point Website Checklist for Wollongong Tradies', PX, 40, { width: CW });

doc.fontSize(9.5).fillColor('#94a3b8').font('Helvetica')
   .text('Find out if your site is ready to rank on Google and turn visitors into calls.', PX, 76, { width: CW });

// ── Intro strip (38pt) ──────────────────────────────────────────────────────
let y = 100;
doc.rect(0, y, W, 38).fill(LIGHT);
doc.rect(0, y + 37, W, 1).fill(BORDER);

doc.fontSize(9).fillColor(MUTED).font('Helvetica')
   .text(
     'Tick each box that applies to your site. Score yourself at the bottom — then claim your free personalised review.',
     PX, y + 12, { width: CW }
   );

// ── Section label strip (22pt) ──────────────────────────────────────────────
y += 38;
doc.rect(0, y, W, 22).fill(ACCENT);
doc.fontSize(10).fillColor(WHITE).font('Helvetica-Bold')
   .text('THE 5 CHECKS', PX, y + 6, { width: CW });
y += 22;

// ── Checklist item helper ───────────────────────────────────────────────────
const ITEM_H = 104;   // height per item
const GAP    = 0;     // no gap between items — use alternating bg

const items = [
  {
    title: 'Google Business Profile — Set Up & Verified',
    desc:  'Your Google Business Profile is fully completed, verified, and the name, address, and phone match your website exactly. Categories, hours, and services are filled in.',
    tip:   'Quick fix: Search your business on Google Maps and claim/verify if not done.',
  },
  {
    title: 'Homepage — Clear Trade & Service Area in 5 Seconds',
    desc:  'A visitor can immediately read what trade you do and which suburbs you cover. Your phone number is visible above the fold without scrolling.',
    tip:   'Quick fix: Add "[Trade] serving [Suburb] & surrounds" to your H1 heading.',
  },
  {
    title: 'Mobile Speed — Passes Google\'s Core Web Vitals',
    desc:  'Your site loads in under 3 seconds on mobile. Images are compressed (under 200KB each) and there are no render-blocking scripts.',
    tip:   'Quick fix: Run your URL through PageSpeed Insights (free) to get a score.',
  },
  {
    title: 'Local Keywords — Terms Customers Actually Search',
    desc:  'Pages include phrases like "[trade] [suburb]" in headings, title tags, and body text. You\'re targeting the exact words your customers type into Google.',
    tip:   'Quick fix: Include your suburb name in the page title and first paragraph.',
  },
  {
    title: 'Easy Contact — Phone, Form & Call-to-Action',
    desc:  'Every page has a clear CTA (Call Now / Get a Quote). Your contact form is short (3–4 fields max) and the phone number is a tap-to-call link on mobile.',
    tip:   'Quick fix: Put a phone number in the header so it\'s visible on every page.',
  },
];

items.forEach((item, i) => {
  const bg = i % 2 === 0 ? WHITE : LIGHT;
  doc.rect(0, y, W, ITEM_H).fill(bg);
  // Bottom border
  doc.rect(0, y + ITEM_H - 1, W, 1).fill(BORDER);

  // Number badge
  const badgeX = PX;
  const badgeCY = y + 28;
  doc.circle(badgeX + 10, badgeCY, 10).fill(ACCENT);
  doc.fontSize(10).fillColor(WHITE).font('Helvetica-Bold')
     .text(String(i + 1), badgeX + 5, badgeCY - 7, { width: 11, align: 'center' });

  // Checkbox
  const cbSize = 20;
  const cbX = W - PX - cbSize;
  const cbY = y + 10;
  doc.rect(cbX, cbY, cbSize, cbSize).lineWidth(1).stroke(BORDER);
  // Tick mark shape (just two lines)
  doc.moveTo(cbX + 4, cbY + 10).lineTo(cbX + 8, cbY + 15).lineTo(cbX + 16, cbY + 5)
     .lineWidth(0).stroke('#d1d5db');
  doc.fontSize(7).fillColor(MUTED).font('Helvetica')
     .text('TICK IF DONE', cbX - 4, cbY + cbSize + 3, { width: cbSize + 8, align: 'center' });

  // Text block
  const textX = badgeX + 26;
  const textW = cbX - textX - 10;

  doc.fontSize(11).fillColor(DARK).font('Helvetica-Bold')
     .text(item.title, textX, y + 12, { width: textW });

  doc.fontSize(8.5).fillColor(MUTED).font('Helvetica')
     .text(item.desc, textX, y + 32, { width: textW, lineGap: 1.5 });

  // Tip line
  doc.fontSize(7.5).fillColor(ACCENT).font('Helvetica-Bold')
     .text('TIP: ', textX, y + 78, { continued: true, lineGap: 0 });
  doc.fontSize(7.5).fillColor(MUTED).font('Helvetica')
     .text(item.tip, { lineGap: 0 });

  y += ITEM_H + GAP;
});

// ── Score box (48pt) ────────────────────────────────────────────────────────
doc.rect(0, y, W, 48).fill('#fef3c7');
doc.rect(0, y + 47, W, 1).fill('#fbbf24');

doc.fontSize(10).fillColor(DARK).font('Helvetica-Bold')
   .text('Your Score:', PX, y + 8);

const scores = [
  { range: '5/5 — ', label: 'Great work! Share it on Google.', color: GREEN },
  { range: '3–4/5 — ', label: 'Nearly there. Fix the gaps above.', color: ACCENT },
  { range: '0–2/5 — ', label: 'Urgent — book your free review now.', color: '#ef4444' },
];

let sx = PX + 70;
scores.forEach(s => {
  const pw = doc.widthOfString(s.range, { fontSize: 9 });
  doc.fontSize(9).fillColor(s.color).font('Helvetica-Bold').text(s.range, sx, y + 8, { continued: true });
  doc.fontSize(9).fillColor(MUTED).font('Helvetica').text(s.label + '    ');
  sx += pw + doc.widthOfString(s.label + '    ', { fontSize: 9 });
});

doc.fontSize(8.5).fillColor(MUTED).font('Helvetica')
   .text('Count your ticks above and find your score on the left.', PX, y + 28, { width: CW });

y += 48;

// ── CTA footer — fills remaining space ─────────────────────────────────────
const footerH = H - y;
doc.rect(0, y, W, footerH).fill(DARK);

const ctaY = y + Math.floor((footerH - 54) / 2);

doc.fontSize(13).fillColor(WHITE).font('Helvetica-Bold')
   .text('Scored less than 5? Get your free website review.', PX, ctaY, { width: CW - 160 });

doc.fontSize(9).fillColor('#94a3b8').font('Helvetica')
   .text('We\'ll check every point above and give you 3–5 specific fixes — free, no obligation.', PX, ctaY + 22, { width: CW - 160, lineGap: 1.5 });

// CTA badge
const btnW = 148;
const btnX = W - PX - btnW;
const btnY = ctaY + 6;
doc.rect(btnX, btnY, btnW, 32).fill(ACCENT);
doc.fontSize(9).fillColor(WHITE).font('Helvetica-Bold')
   .text('Get My Free Review', btnX, btnY + 11, { width: btnW, align: 'center' });

doc.fontSize(7.5).fillColor('#475569').font('Helvetica')
   .text('digitaledgestudio.com/free-website-review', PX, ctaY + 46, { width: CW });

// ── Finalize ────────────────────────────────────────────────────────────────
doc.end();
out.on('finish', () => console.log('PDF created: public/downloads/5-point-website-checklist.pdf'));
