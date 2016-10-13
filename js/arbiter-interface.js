var Arbiter = require('./../js/arbiter.js').arbiterModule;

$(document).ready(function() {

  var newArbiter = new Arbiter();

  $('#url-form').submit(function(event) {
    event.preventDefault();
    var url = $('#url').val();
    newArbiter.getEmotions(url);
    //fuuuuck
    var populateChart = function() {
      myChart.data.datasets[0].data[0] = newArbiter.anger;
      myChart.data.datasets[0].data[1] = newArbiter.disgust;
      myChart.data.datasets[0].data[2] = newArbiter.fear;
      myChart.data.datasets[0].data[3] = newArbiter.joy;
      myChart.data.datasets[0].data[4] = newArbiter.sadness;
      myChart.update();
    }
    setInterval(populateChart, 100);
  });
});
