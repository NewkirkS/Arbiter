var Arbiter = require('./../js/arbiter.js').arbiterModule;

$(document).ready(function() {

  var newArbiter = new Arbiter();

  $('#url-form').submit(function(event) {
    event.preventDefault();
    var url = $('#url').val();
    newArbiter.getEmotions(url);
    var data = {
    labels: [
        "Anger",
        "Disgust",
        "Fear",
        "Joy",
        "Sadness"
    ],
    datasets: [
        {
            data: [newArbiter.anger, newArbiter.disgust, newArbiter.fear, newArbiter.joy, newArbiter.sadness],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#F28EB2",
                "#743119"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#F28EB2",
                "#743119"
            ]
        }]
};
  });
});
