"use strict";

$('#about-me-btn').click(function() {
    console.log("entered function");
  $('#about-me').show('slow', function() {
    document.getElementById("intro").style.display = 'none';
    document.getElementById("keyboard").style.display = 'none';
    document.getElementById("keyboard-bottom").style.display = 'none';
    document.getElementById("full-screen").style.height = '620px';
    document.getElementById("full-screen").style.width = '1000px';
    document.getElementById("toolbar").style.fontSize = '15px';

  });
});

$('#contact-btn').click(function() {
    console.log("entered function");
  $('#contact').show('slow', function() {
    document.getElementById("intro").style.display = 'none';
    document.getElementById("keyboard").style.display = 'none';
    document.getElementById("keyboard-bottom").style.display = 'none';
    document.getElementById("full-screen").style.height = '620px';
    document.getElementById("full-screen").style.width = '1000px';
    document.getElementById("toolbar").style.fontSize = '15px';

  });
});



