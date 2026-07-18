/* ┌──────────────────────────────────────────────────────────────────┐
   │  SILVERPOINT LAUNCH — single source of truth for the post link.    │
   │  Paste tomorrow's Instagram post permalink below, once.            │
   │  It updates every [data-cta="post"] link across the whole site     │
   │  (silverpoint.html landing page + the homepage launch strip).      │
   │  Until then it falls back to the Instagram profile.                │
   └──────────────────────────────────────────────────────────────────┘ */
const SILVERPOINT_POST_URL = "https://www.instagram.com/blackjacktek/"; // ← replace with the exact post URL
document.querySelectorAll('a[data-cta="post"]').forEach(function (a) {
  a.href = SILVERPOINT_POST_URL;
});
