(function () {

    "use strict";

    window.$    = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require("howler");

    var sound;

    var currentRoom;
    var counter;

    var playBtn = $('#play');
    var pauseBtn = $('#pause');
    var nextBtn = $('#next');

    var r2 = ['magda', 'janne', 'fay', 'noa'];
    var id;

    // Loading the sounds

    function loadPlaylist() {

      currentRoom = r2;
      counter = 0;

      console.log(currentRoom[counter]);

      sound = new Howl({
        src: ['/audio/r2/r2-full.mp3'],
        sprite: {
          magda: [0, 15000],
          fay: [15000, 14000],
          janne: [29000, 15000],
          noa: [44000, 13000]
        },
        onend: function () {
          console.log('ended');
          counter++;
        }
      });

      //
      // event listeners for Howler
      //

      sound.on('play', function(){
        console.log('sound playing');
        nextBtn.removeClass('active');
        playBtn.removeClass('active');
        pauseBtn.addClass('active');
      });
      sound.on('pause', function(){
        console.log('sound paused');
        pauseBtn.removeClass('active');
        playBtn.addClass('active');
      });
      sound.on('end', function(){
        console.log('sound ended');
        pauseBtn.removeClass('active');
        nextBtn.addClass('active');
      });

    }

    // playing the next sound

    function playNext(room, counter) {
      id = sound.play(room[counter]);
      return id;
    }

    $(function () {

      //
      // Click stuff

      $('p, h1, h2, h3, a').on('mousedown touchstart', function() {
        $(this).addClass('mousedown');
      });

      $('p, h1, h2, h3, a').on('mouseup touchend', function() {
        $(this).removeClass('mousedown');
      });

      $('.instructions').on('click', function () {
        if($(this).hasClass('back')){
          $('.player').removeClass('active');
          $(this).html('Pick a room to get started');
        }
      });

      $('a').on('click', function(event) {
        if(event.target.id == "r1" || event.target.id == "r2" || event.target.id == "r3" || event.target.id == "r4" || event.target.id == "r5" ) {
          event.preventDefault();
        }

        if(event.target.id == "r2") {
          // visual feedback
          $('#map').attr('src', '/img/floor-plan-r2.svg');
          $('.r').removeClass('active');
          $(this).addClass('active');
          $('.player').addClass('active');
          $('.instructions').html('Back to overview').addClass('back');

          loadPlaylist();
        }
      });

      $('#play').on('click', function() {
          sound.play('magda');
          playNext(currentRoom, counter);
      });
      $('#pause').on('click', function() {
          sound.pause(id);
      });
      $('#next').on('click', function() {
          // counter++
          // var id2 = sound.play('' + r2[counter] + '');
      });


    });

}());
