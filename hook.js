var http = require('http');
var fs = require('fs');
const exec = require('child_process').exec;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (validateRequest(req)) {
    res.end(JSON.stringify({'success': 'true'}));
  } else {
    res.end(JSON.stringify({'success': 'false'}));
  }
}).listen(3500);

function validateRequest(request) {
  let headers = request.headers;
  console.log(headers);
  if (headers['x-github-event']) {
    return true;
  }
  return false;
}

function executeRedeploy() {
  exec('redeploy.sh', function(error, stdout, stderr) {
    if (error) {
      console.log(error.code);
    }
  });
}
