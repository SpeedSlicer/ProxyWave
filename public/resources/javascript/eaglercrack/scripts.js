function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function() {
    alert('IP copied to clipboard: ' + text);
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}
function directPlay(ip) {
  window.open("/game/web/1.8.8/?server=" + ip)
}