self.addEventListener('push', e => {
  const data = e.data?.json() || {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'wyd?', {
      body: data.body || 'someone dropped something tonight',
      icon: '/icon.png',
      badge: '/icon.png',
      tag: data.tag || 'wyd-notif',
      data: { url: data.url || '/' }
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url || '/'));
});
