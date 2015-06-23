require('atd-api');

var api = new ATDApi('API KEY HERE', 'de');
api.checkDocument('i am the meister backer yooooooooo!', function(body, error) {
  require('xml2js').parseString(body, function (err, result) {
   console.log(result.results.error);
 });
});

