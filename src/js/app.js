(function () {

    "use strict";

    window.$    = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require("howler");

    var current;
    var sound;

    var playBtn = $('#play');
    var pauseBtn = $('#pause');
    var nextBtn = $('#next');
    var room;

    var r1 = {

      "intro" : {
        "src" : "/audio/r1/intro.mp3"
      }

    }

    var r2 = {

      "0" : {
        "id"      : "room20",
        "name"    : " ",
        "src"     : "/audio/r2/intro.mp3"
      },

      "1"   : {
        "id"      : "room21",
        "name"    : "Fay Asselbergs",
        "src"     : "/audio/r2/fay.mp3"
      },

      "2" : {
        "id"      : "room22",
        "name"    : "Janne van Hooff",
        "src"     : "/audio/r2/fay.mp3"
      },

      "3" : {
        "id"      : "room23",
        "name"    : "Magda Skibinska",
        "src"     : "/audio/r2/magda.mp3"
      },

      "4"   : {
        "id"      : "room24",
        "name"    : "Noa Defesche",
        "src"     : "/audio/r2/magda.mp3"
      }

    }

    //get amount of items from obj
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    //size of obj
    var r2Size = Object.size(r2);

    // to create the ids on the fly
    var room2 = [];

    function loadHowls() {

      console.log(r2Size);

      for (var i = 0; i < r2Size; i ++ ) {

        // assign the ids
        room2[i] = r2[i].id;

        room2[i] = new Howl({
          src: r2[i].src
        });

        console.log(r2[i].id);
        console.log(r2[i].name);
        console.log(r2[i].src);
      }

    }



    $(function () {

      loadHowls();

      sound = new Howl({
        src : [r1.intro]
      });

      console.log(r1.intro, r2.intro);

      // Click stuff

      $('a').on('mousedown touchstart', function() {
        $(this).addClass('mousedown');
      });

      $('a').on('mouseup touchend', function() {
        $(this).removeClass('mousedown');
      });

      $('.instructions').on('click', function () {

        if($(this).hasClass('back')){
          $('.player').removeClass('active');
          $(this).html('Pick a room to get started');
        } else {
          $('.player').toggleClass('active');
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
          room20.play();
      });
      $('#pause').on('click', function() {
          room20.pause();
      });
      $('#next').on('click', function() {
          // counter++
          // var id2 = sound.play('' + r2[counter] + '');
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


    });

}());
