(function () {

    "use strict";

    window.$    = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require("howler");

    var playBtn = $('#play');
    var pauseBtn = $('#pause');
    var nextBtn = $('#next');

    // id is based om room + room number + list number
    //

    var r1 = {

      "0" : {
        "id"      : "room10",
        "name"    : "Charlotte Gramberg",
        "src"     : "/audio/r1/charlotte.mp3"
      },

      "1" : {
        "id"      : "room11",
        "name"    : "Jaap Smit",
        "src"     : "/audio/r1/jaap.mp3"
      },

      "2"   : {
        "id"      : "room12",
        "name"    : "Wies van der Wal",
        "src"     : "/audio/r1/wies.mp3"
      },

      "3" : {
        "id"      : "room13",
        "name"    : "Yara Veloso",
        "src"     : "/audio/r1/yara.mp3"
      },

      "4"   : {
        "id"      : "room14",
        "name"    : "Jamie de Rooij",
        "src"     : "/audio/r1/jamie.mp3"
      },

      "5"   : {
        "id"      : "room15",
        "name"    : "Yacinth Pos",
        "src"     : "/audio/r1/yacinth.mp3"
      }

    }

    var r2 = {

      "0" : {
        "id"      : "room20",
        "name"    : "Magda Skibinska",
        "src"     : "/audio/r2/magda.mp3"
      },

      "1" : {
        "id"      : "room21",
        "name"    : "Fay Asselbergs",
        "src"     : "/audio/r2/fay.mp3"
      },

      "2"   : {
        "id"      : "room22",
        "name"    : "Janne van Hooff",
        "src"     : "/audio/r2/janne.mp3"
      },

      "3" : {
        "id"      : "room23",
        "name"    : "Noa Defesche",
        "src"     : "/audio/r2/noa.mp3"
      }

    }

    var r3 = {

      "0" : {
          "id"    : "room30",
          "name"  : "Antonia Schwaiger",
          "src"   : "/audio/r3/antonia.mp3"
      },

      "1" : {
          "id"    : "room31",
          "name"  : "Remco Blom",
          "src"   : "/audio/r3/remco.mp3"
      },

      "2" : {
          "id"    : "room32",
          "name"  : "Caro The",
          "src"   : "/audio/r3/caro.mp3"
      },

      "3" : {
          "id"    : "room33",
          "name"  : "Jordy Ringeling",
          "src"   : "/audio/r3/jordyring.mp3"
      },

      "4" : {
          "id"    : "room34",
          "name"  : "Carmel Klein",
          "src"   : "/audio/r3/carmel.mp3"
      },

      "5" : {
          "id"    : "room35",
          "name"  : "Pascal Schilp",
          "src"   : "/audio/r3/pascal.mp3"
      },

      "6" : {
          "id"    : "room36",
          "name"  : "Ayse Duran",
          "src"   : "/audio/r3/ayse.mp3"
      }

    }

    var r4 = {

      "0" : {
          "id"    : "room40",
          "name"  : "Márton Kabai",
          "src"   : "/audio/r4/marton.mp3"
      },

      "1" : {
          "id"    : "room41",
          "name"  : "Manus Nijhoff",
          "src"   : "/audio/r4/manus_2.mp3"
      },

      "2" : {
          "id"    : "room42",
          "name"  : "Gregor Nebe",
          "src"   : "/audio/r4/marton.mp3"
      },

      "3" : {
          "id"    : "room43",
          "name"  : "Jordy van Look",
          "src"   : "/audio/r4/jordylook.mp3"
      },

      "4" : {
          "id"    : "room44",
          "name"  : "Lisa van den Heuvel",
          "src"   : "/audio/r4/lisa.mp3"
      }

    }

    var r5 = {

      "0" : {
          "id"    : "room50",
          "name"  : "Ninthe Kiemeneij",
          "src"   : "/audio/r5/ninthe.mp3"
      },

      "1" : {
          "id"    : "room51",
          "name"  : "Bohye Woo",
          "src"   : "/audio/r5/bohye.mp3"
      },

      "2" : {
          "id"    : "room52",
          "name"  : "Alice Fialová",
          "src"   : "/audio/r5/alice.mp3"
      },

      "3" : {
          "id"    : "room53",
          "name"  : "Haewon Lim",
          "src"   : "/audio/r5/haewon.mp3"
      },

      "4" : {
          "id"    : "room54",
          "name"  : "Geeke van Bruggen",
          "src"   : "/audio/r5/geeke.mp3"
      }

    }

    var count = 0;
    var rooms = [r1, r2, r3, r4, r5];

    //get amount of items from obj
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

        //size of objs

    var rSize = [];

    for (var i = 0; i < rooms.length; i ++ ){
        rSize[i] = Object.size(rooms[i]);
    }

    console.log(rSize);


    // to create the play ids on the fly, make these variables
    var room1 = [];
    var room2 = [];
    var room3 = [];
    var room4 = [];
    var room5 = [];

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

        for (var i = 0; i < rSize[int-1]; i ++ ) {

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
          howls[i].on('stop', function(){
            console.log('sound stopped');
            pauseBtn.removeClass('active');
            playBtn.addClass('active');
          });

        }

        // event listeners for the controls
        //

        $('.r').on('click', function(){
          howls[count].stop();
        });

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

      function visualFeedback (id, el) {
        $('#map').attr('src', '/img/floor-plan-'+id+'.svg');
        $('.r').removeClass('active');
        el.addClass('active');
        $('.player').addClass('active');
        $('.instructions').html('Back to overview').addClass('back');
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
          visualFeedback(event.target.id, $(this));
          loadPlaylist(1, r1, room1, rSize);
        }

        if(event.target.id == "r2") {
          visualFeedback(event.target.id, $(this));
          loadPlaylist(2, r2, room2, rSize);
        }

        if(event.target.id == "r3") {
          visualFeedback(event.target.id, $(this));
          loadPlaylist(3, r3, room3, rSize);
        }

        if(event.target.id == "r4") {
          visualFeedback(event.target.id, $(this));
          loadPlaylist(4, r4, room4, rSize);
        }

        if(event.target.id == "r5") {
          visualFeedback(event.target.id, $(this));
          loadPlaylist(5, r5, room5, rSize);
        }


      });


    });

}());
