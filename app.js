function getWelcomeMessage() {
  return '¡Hola mundo desde App desplegada automáticamente con Github Actions!';
}
if (typeof document !== 'undefined') {
  document.getElementById('message').textContent = getWelcomeMessage();
}
module.exports = getWelcomeMessage;