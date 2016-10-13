var AlchemyAPI = require('alchemy-api');
var apiKey = require('./../.env').apiKey;
var alchemy = new AlchemyAPI(apiKey);

function Arbiter() {
  this.anger = 0;
  this.disgust = 0;
  this.fear = 0;
  this.joy = 0;
  this.sadness = 0;
}

Arbiter.prototype.getEmotions = function(url) {
  var that = this;
  alchemy.emotions(url, {}, function(err, response) {
    if (err) {
      throw err;
    } else {
      var emotions = response.docEmotions;

      that.anger = Math.floor(emotions.anger * 100);
      that.disgust = Math.floor(emotions.disgust * 100);
      that.fear = Math.floor(emotions.fear * 100);
      that.joy = Math.floor(emotions.joy * 100);
      that.sadness = Math.floor(emotions.sadness * 100);
      console.log(that);
    }
  });
}


exports.arbiterModule = Arbiter;
