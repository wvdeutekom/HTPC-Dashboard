Router.route('/', function () {
  this.render('home');
});

Router.route('/sabnzbd', function () {
  this.render('sabnzbd');
});

Router.route('/plex', function () {
  this.render('plex');
});
