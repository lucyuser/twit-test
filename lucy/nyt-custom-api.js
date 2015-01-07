var Client = require('./nyt-raw-api.js');
Client.API('http://api.nytimes.com');

exports.getArticlesAboutObama = function(callback) {
  var params = {
    'q': 'Clinton',
  };
  if (exports.Secrets) {
    for (var secret in exports.Secrets) {
      params[secret] = exports.Secrets[secret];
    }
  }
  return Client.articleSearch(params)
  .then(function(result) {callback(null, JSON.parse(result.response.body))},
        function(err) {callback(err)});
}

