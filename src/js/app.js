(function () {

    "use strict";

    window.$    = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require("howler");

    var playBtn = $('#play');
    var pauseBtn = $('#pause');
    var nextBtn = $('#next');

    $(function () {

      $('p, h1, h2, h3, a').on('mousedown touchstart', function() {
        $(this).addClass('mousedown');
      });

      $('p, h1, h2, h3, a').on('mouseup touchend', function() {
        $(this).removeClass('mousedown');
      });

      var intro = new Howl({
        src: ['/audio/intro/intro.mp3'],
        onplay: function(){
          console.log(playBtn);
          playBtn.removeClass('active');
          pauseBtn.addClass('active');
        },
        onend: function(){
          pauseBtn.removeClass('active');
          playBtn.addClass('active');
        }
      });

      var r2 = new Howl({
        src: ['/audio/r2/r2-full.mp3'],
        sprite: {
          magda: [0, 15000],
          fay: [15000, 14000],
          janne: [29000, 15000],
          noa: [41000, 13000]
        }
      });

      $('a').on('click', function(event) {
        event.preventDefault();
        if(event.target.id == "r2") {
          console.log('go to room 2');
        }
      });

      $('input').on('click', function(event) {
        console.log(event.target.id);
        console.log(event.id);
        if($(this).hasClass('play')) {
          intro.play();
        }

      });

      // intro.play();

      // r2.play('magda');


    });

}());
