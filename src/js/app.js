(function () {

    "use strict";

    window.$    = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require("howler");

    var playBtn = $('#play');
    var pauseBtn = $('#pause');
    var nextBtn = $('#next');

    var r1 = {

      "0" : {
        "id"      : "room10",
        "name"    : "Introduction",
        "src"     : "/audio/r2/intro.mp3"
      },

      "1" : {
        "id"      : "room11",
        "name"    : "Charlotte Gramberg",
        "src"     : "/audio/r2/magda.mp3"
      },

      "2"   : {
        "id"      : "room12",
        "name"    : "Jaap Smit",
        "src"     : "/audio/r2/fay.mp3"
      },

      "3" : {
        "id"      : "room13",
        "name"    : "Wies van der Wal",
        "src"     : "/audio/r2/janne.mp3"
      },

      "4"   : {
        "id"      : "room14",
        "name"    : "Yara Veloso",
        "src"     : "/audio/r2/noa.mp3"
      },

      "5"   : {
        "id"      : "room15",
        "name"    : "Jamie de Rooij",
        "src"     : "/audio/r2/noa.mp3"
      },

      "6"   : {
        "id"      : "room16",
        "name"    : "Yacinth Pos",
        "src"     : "/audio/r2/noa.mp3"
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

    var count = 0;
    var rooms = [r1, r2];

    //get amount of items from obj
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    //size of objs
    var r1Size = Object.size(r1);
    var r2Size = Object.size(r2);

    console.log("r1Size: " + r1Size);
    console.log("r1Size: " + r1Size);

    // to create the play ids on the fly, make these variables
    var room1 = [];
    var room2 = [];

    var howls = [];

    $(function () {

      function unLoad() {

        // unload all currently loaded objects, remove event listeners
        //

        if(howls.length == 0) {
          console.log("empty array");
        } else {
          for(var i = 0; i < howls.length; i++ ) {
            howls[i].off();
            howls[i].unload();
            howls = [];

            $('.list').empty();
            count = 0;
            $('#play, #pause, #next').off();
          }
        }

      }

      function loadPlaylist (int, rX, room, rSize) {

        unLoad();

        // called after picking a room
        // loop over all elements in a database and load them as howler objects

        for (var i = 0; i < rSize; i ++ ) {

          // how to get the things you need
          // console.log(r2[i].id); // console.log(r2[i].name); // console.log(r2[i].src);

          // assign the ids
          room[i] = rX[i].id;

          // make the howler objects
          room[i] = new Howl({
            src: rX[i].src
          });

          console.log("lp-" + room[i]);

          if (i == 0) {
            $('.list').append('<li id="'+rX[i].id+'" class="active">'+rX[i].name+'</li>');
          } else {
            $('.list').append('<li id="'+rX[i].id+'" >'+rX[i].name+'</li>');
          }

          howls.push(room[i]);

        }

        setEventListeners(int);

      }

      function setEventListeners (int) {
        // called after loadPlaylist. Takes int for ID's (and other purposes?)

        // event listeners for Howler. Add for all loaded sounds
        //

        console.log("se-" + howls);

        for (var i = 0; i < howls.length; i ++) {

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

        // event listeners for the controls
        //

        $('#play').on('click', function() {
            console.log('count: ' +howls[count]);
            howls[count].play();
        });
        $('#pause').on('click', function() {
            howls[count].pause();
        });
        $('#next').on('click', function() {
            // limit to size of list
            if(count < howls.length) {
              $('#room'+int+''+count+'' ).removeClass('active');
              count++;
              $('#room'+int+''+count+'' ).addClass('active');
              howls[count].play();
            } else {
              alert('finished this room');
              count = 0;
            }
        });

      }


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

      //
      // Room picking

      $('a').on('click', function(event) {
        if(event.target.id == "r1" || event.target.id == "r2" || event.target.id == "r3" || event.target.id == "r4" || event.target.id == "r5" ) {
          event.preventDefault();
        }

        if(event.target.id == "r1") {

          $('#map').attr('src', '/img/floor-plan-r1.svg');
          $('.r').removeClass('active');
          $(this).addClass('active');
          $('.player').addClass('active');
          $('.instructions').html('Back to overview').addClass('back');

          loadPlaylist(1, r1, room1, r1Size);
        }

        if(event.target.id == "r2") {
          // visual feedback
          $('#map').attr('src', '/img/floor-plan-r2.svg');
          $('.r').removeClass('active');
          $(this).addClass('active');
          $('.player').addClass('active');
          $('.instructions').html('Back to overview').addClass('back');

          loadPlaylist(2, r2, room2, r2Size);
        }
      });


    });

}());
