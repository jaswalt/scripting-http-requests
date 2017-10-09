var https = require('https');

function getAndPrintHTML (options) {

  https.get(requestOptions, function (response) {

    let buffer = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      console.log(buffer);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)