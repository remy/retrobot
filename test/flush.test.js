const retro = require(__dirname + '/../lib');

retro.setup(bot => {
  bot.self.channel = 'C16E1QX4Z';
  retro.flushRetrospective({
    plus: ['cakes', 'gin'],
    minus: ['cats', 'dogs'],
  });
});
