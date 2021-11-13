const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

cookie('_ga');
// Result: "GA1.2.1929736587.1601974046"