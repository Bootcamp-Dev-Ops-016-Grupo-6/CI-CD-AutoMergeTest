const getWelcomeMessage = require('./app.js');

test('debería retornar el mensaje de bienvenida correcto', () => {
  expect(getWelcomeMessage()).toBe('¡Hola mundo desde App desplegada automáticamente con Github Actions!');
});