(function () {

    "use strict";

    window.$    = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require("howler");

    var playBtn = $('#play');
    var pauseBtn = $('#pause');
    var nextBtn = $('#next');

    var count = 0;

    var r1 = {

      "intro" : {
        "src" : "/audio/r1/intro.mp3"
      }

    }

    // id is based om room + room number + list number
    //

    var r2 = {

      "0" : {
        "id"      : "room20",
        "name"    : "Introduction",
        "src"     : "/audio/r2/intro.mp3"
      },

      "1" : {
        "id"      : "room21",
        "name"    : "Magda Skibinska",
        "src"     : "/audio/r2/magda.mp3"
      },

      "2"   : {
        "id"      : "room22",
        "name"    : "Fay Asselbergs",
        "src"     : "/audio/r2/fay.mp3"
      },

      "3" : {
        "id"      : "room23",
        "name"    : "Janne van Hooff",
        "src"     : "/audio/r2/janne.mp3"
      },

      "4"   : {
        "id"      : "room24",
        "name"    : "Noa Defesche",
        "src"     : "/audio/r2/noa.mp3"
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
    var howls = [];


    $(function () {

      console.log(r2Size);

      for (var i = 0; i < r2Size; i ++ ) {

        // how to get the things you need
        // console.log(r2[i].id); // console.log(r2[i].name); // console.log(r2[i].src);

        // assign the ids
        room2[i] = r2[i].id;

        room2[i] = new Howl({
          src: r2[i].src
        });

        console.log(room2[i]);

        if (i == 0) {
          $('.list').append('<li id="'+r2[i].id+'" class="active">'+r2[i].name+'</li>');
        } else {
          $('.list').append('<li id="'+r2[i].id+'" >'+r2[i].name+'</li>');
        }


        howls.push(room2[i]);

      }

      console.log(howls);

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
          console.log('count: ' +howls[count]+ '');
          howls[count].play();
      });
      $('#pause').on('click', function() {
          howls[count].pause();
      });
      $('#next').on('click', function() {
          // limit to size of list
          if(count < r2Size) {
            $('#room2'+count+'' ).removeClass('active');
            count++;
            $('#room2'+count+'' ).addClass('active');
            howls[count].play();
          } else {
            alert('finished this room');
            count = 0;
          }
      });

      //
      // event listeners for Howler. Add for all loaded sounds
      //

      for (i = 0; i < howls.length; i ++) {

        howls[i].on('play', function(){
          console.log('sound playing');
          nextBtn.removeClass('active');
          playBtn.removeClass('active');
          pauseBtn.addClass('active');
        });
        howls[i].on('pause', function(){
          console.log('sound paused');
          pauseBtn.removeClass('active');
          playBtn.addClass('active');
        });
        howls[i].on('end', function(){
          console.log('sound ended');
          pauseBtn.removeClass('active');
          nextBtn.addClass('active');
        });

      }


    });

}());
