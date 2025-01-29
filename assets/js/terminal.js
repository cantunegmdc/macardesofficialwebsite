$('#terminal').terminal({
  hello: function() {
    this.echo('Hello, I am Macädès De Pröducèz!');
    this.echo('I am a HTML, CSS & JS coder in Vietnam');
    this.echo('I am a frontend developer in Vietnam');
    this.echo('Type "help" for more information');
  },
  help: function() {
    this.echo('Hello, navigate my website is very strange right? So let see these command!');
    this.echo('1. hello - Say hello');
    this.echo('2. help - Show this command');
    this.echo('3. info - Show information about me');
    this.echo('4. youtube - Show my youtube channel');
    this.echo('5. instagram - Show my instagram profile');
    this.echo('6. tiktok - Show my tiktok profile');
    this.echo('7. projects - Show my projects');
    this.echo('8. contact - Show my contact information');
    this.echo('9. stream - Enable the stream');
    this.echo('10. facebook - Show my facebook profile');
  },
  info: function() {
    this.echo('I am a HTML, CSS & JS coder in Vietnam');
    this.echo('I am a frontend developer in Vietnam');
    this.echo('Email: lumiereanderson@gmail.com');
  },
  youtube: function() {
    this.echo('https://www.youtube.com/@macadesdeproducez');
  },
  instagram: function() {
    this.echo('http://instagram.com/themacardes');
  },
  tiktok: function() {
    this.echo('https://www.tiktok.com/@themacardes');
  },
  facebook: function() {
    this.echo('https://www.facebook.com/profile.php?id=61554919799713&mibextid=LQQJ4d');
  },
  projects: function() {},
  contact: function() {
    
  },
}, {
  greetings: 'Macärdès De Pröducèz - Copyright (C) 2023 - Macärdès De Pröducèz - All rights reserved.',
  prompt: 'macardèsdepröducèz> ',
  name: 'Macärdès De Pröducèz',
  set: true,
  insert: true,
  before_cursor: true,
  display_position: true,
  echo: {
    raw: true,
    finalize: true,
    flush: true,
    wrap: true,
    keepWords: true,
    newline: true
  },
  error: 'An error has occurred.',
  exec: 'Executing command: ',
  exit: true,
  focus: true,
  freeze: true,
  get_output: true,
  set_token: true,
  get_token: true,
  token: true,
  save_state: true,
  prefix_name: true,
  login: function(user, password, callback) {
    if (user == 'themacardes' && password == 'themacardes2007') {
      callback('SECRET TOKEN');
    } else {
      callback(null);
    }
  },
  invoke_key: 'ctrl+shift+i',
  
});