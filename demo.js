/* URL DEMO 3 PRODUK AMEERA */
const DEMO_URLS = {
  lite: 'https://ameeralite.freehosting.dev/',
  standard: 'https://ameerapro.freehosting.dev/',
  business: 'https://ameerabusines.freehosting.dev/'
};

document.querySelectorAll('[data-demo]').forEach(button => {
  const key = button.dataset.demo;
  const url = DEMO_URLS[key];
  if (url) {
    button.href = url;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
  }
});
