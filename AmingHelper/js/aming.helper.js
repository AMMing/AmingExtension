var loadJs = function(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (callback)
    script.onload = script.onreadystatechange = function() {
      if (script.readyState && script.readyState != 'loaded' && script.readyState != 'complete') return;
      script.onreadystatechange = script.onload = null;
      callback();
    };
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}


var chrome_notification = function(title,body,icon) {
  var notification = window.webkitNotifications.createNotification(
    icon, // The image.
    title, // The title.
    body// The body.
  );
  notification.show();
}