self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // 웹앱 설치 조건 충족을 위한 최소한의 서비스 워커
});
