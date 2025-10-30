self.addEventListener('install', event => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', event => {
  // می‌توان کش کردن فایل‌ها را اینجا انجام داد
});
