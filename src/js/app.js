(function () {

    "use strict";

    window.$    = require("jquery"),
    window.jQuery = $;

    require("jquery-ui-dist/jquery-ui.js");

    require("howler");


    var loading  = $('#loading');
    var pin = $('#pin');
    var playBtn = $('#play');
    var pauseBtn = $('#pause');
    var nextBtn = $('#next');

    // id is based om room + room number + list number
    //

    var r1 = {

      "0" : {
        "id"      : "room10",
        "name"    : "...",
        "src"     : "/audio/r1/0_charlotte.mp3"
      },

      "1" : {
        "id"      : "room11",
        "name"    : "Charlotte Gramberg",
        "src"     : "/audio/r1/charlotte.mp3"
      },

      "2" : {
        "id"      : "room12",
        "name"    : "...",
        "src"     : "/audio/r1/0_jaap.mp3"
      },

      "3" : {
        "id"      : "room13",
        "name"    : "Jaap Smit",
        "src"     : "/audio/r1/jaap.mp3"
      },

      "4" : {
        "id"      : "room14",
        "name"    : "...",
        "src"     : "/audio/r1/0_wies.mp3"
      },

      "5"   : {
        "id"      : "room15",
        "name"    : "Wies van der Wal",
        "src"     : "/audio/r1/wies.mp3"
      },

      "6" : {
        "id"      : "room16",
        "name"    : "...",
        "src"     : "/audio/r1/0_yara.mp3"
      },

      "7" : {
        "id"      : "room17",
        "name"    : "Yara Veloso",
        "src"     : "/audio/r1/yara.mp3"
      },

      "8" : {
        "id"      : "room18",
        "name"    : "...",
        "src"     : "/audio/r1/0_jamie.mp3"
      },

      "9"   : {
        "id"      : "room19",
        "name"    : "Jamie de Rooij",
        "src"     : "/audio/r1/jamie.mp3"
      },

      "10" : {
        "id"      : "room110",
        "name"    : "...",
        "src"     : "/audio/r1/0_yacinth.mp3"
      },

      "11"   : {
        "id"      : "room111",
        "name"    : "Yacinth Pos",
        "src"     : "/audio/r1/yacinth.mp3"
      }

    }

    var r2 = {

      "0" : {
        "id"      : "room20",
        "name"    : "...",
        "src"     : "/audio/r2/0_magda.mp3"
      },

      "1" : {
        "id"      : "room21",
        "name"    : "Magda Skibinska",
        "src"     : "/audio/r2/magda.mp3"
      },

      "2" : {
        "id"      : "room22",
        "name"    : "...",
        "src"     : "/audio/r2/0_fay.mp3"
      },

      "3" : {
        "id"      : "room23",
        "name"    : "Fay Asselbergs",
        "src"     : "/audio/r2/fay.mp3"
      },

      "4" : {
        "id"      : "room24",
        "name"    : "...",
        "src"     : "/audio/r2/0_janne.mp3"
      },

      "5"   : {
        "id"      : "room25",
        "name"    : "Janne van Hooff",
        "src"     : "/audio/r2/janne.mp3"
      },

      "6" : {
        "id"      : "room26",
        "name"    : "...",
        "src"     : "/audio/r2/0_noa.mp3"
      },

      "7" : {
        "id"      : "room27",
        "name"    : "Noa Defesche",
        "src"     : "/audio/r2/noa.mp3"
      }

    }

    var r3 = {

      "0" : {
        "id"      : "room30",
        "name"    : "...",
        "src"     : "/audio/r3/0_antonia.mp3"
      },

      "1" : {
          "id"    : "room31",
          "name"  : "Antonia Schwaiger",
          "src"   : "/audio/r3/antonia.mp3"
      },

      "2" : {
        "id"      : "room32",
        "name"    : "...",
        "src"     : "/audio/r3/0_remco.mp3"
      },

      "3" : {
          "id"    : "room33",
          "name"  : "Remco Blom",
          "src"   : "/audio/r3/remco.mp3"
      },

      "4" : {
        "id"      : "room34",
        "name"    : "...",
        "src"     : "/audio/r3/0_caro.mp3"
      },

      "5" : {
          "id"    : "room35",
          "name"  : "Caro The",
          "src"   : "/audio/r3/caro.mp3"
      },

      "6" : {
        "id"      : "room36",
        "name"    : "...",
        "src"     : "/audio/r3/0_jordyring.mp3"
      },

      "7" : {
          "id"    : "room37",
          "name"  : "Jordy Ringeling",
          "src"   : "/audio/r3/jordyring.mp3"
      },

      "8" : {
        "id"      : "room38",
        "name"    : "...",
        "src"     : "/audio/r3/0_carmel.mp3"
      },

      "9" : {
          "id"    : "room39",
          "name"  : "Carmel Klein",
          "src"   : "/audio/r3/carmel.mp3"
      },

      "10" : {
        "id"      : "room310",
        "name"    : "...",
        "src"     : "/audio/r3/0_pascal.mp3"
      },

      "11" : {
          "id"    : "room311",
          "name"  : "Pascal Schilp",
          "src"   : "/audio/r3/pascal.mp3"
      },

      "12" : {
        "id"      : "room312",
        "name"    : "...",
        "src"     : "/audio/r3/0_ayse.mp3"
      },

      "13" : {
          "id"    : "room313",
          "name"  : "Ayse Duran",
          "src"   : "/audio/r3/ayse.mp3"
      }

    }

    var r4 = {

      "0" : {
          "id"    : "room40",
          "name"  : "...",
          "src"   : "/audio/r4/0_marton.mp3"
      },

      "1" : {
          "id"    : "room41",
          "name"  : "Márton Kabai",
          "src"   : "/audio/r4/marton.mp3"
      },

      "2" : {
          "id"    : "room42",
          "name"  : "...",
          "src"   : "/audio/r4/0_manus.mp3"
      },

      "3" : {
          "id"    : "room43",
          "name"  : "Manus Nijhoff",
          "src"   : "/audio/r4/manus_2.mp3"
      },

      "4" : {
          "id"    : "room44",
          "name"  : "...",
          "src"   : "/audio/r4/0_gregor.mp3"
      },

      "5" : {
          "id"    : "room45",
          "name"  : "Gregor Nebe",
          "src"   : "/audio/r4/gregor.mp3"
      },

      "6" : {
          "id"    : "room46",
          "name"  : "...",
          "src"   : "/audio/r4/0_jordylook.mp3"
      },

      "7" : {
          "id"    : "room47",
          "name"  : "Jordy van Look",
          "src"   : "/audio/r4/jordylook.mp3"
      },

      "8" : {
          "id"    : "room48",
          "name"  : "...",
          "src"   : "/audio/r4/0_lisa.mp3"
      },

      "9" : {
          "id"    : "room49",
          "name"  : "Lisa van den Heuvel",
          "src"   : "/audio/r4/lisa.mp3"
      }

    }

    var r5 = {

      "0" : {
          "id"    : "room50",
          "name"  : "...",
          "src"   : "/audio/r5/0_ninthe.mp3"
      },

      "1" : {
          "id"    : "room51",
          "name"  : "Ninthe Kiemeneij",
          "src"   : "/audio/r5/ninthe.mp3"
      },

      "2" : {
          "id"    : "room52",
          "name"  : "...",
          "src"   : "/audio/r5/0_bohye.mp3"
      },

      "3" : {
          "id"    : "room53",
          "name"  : "Bohye Woo",
          "src"   : "/audio/r5/bohye.mp3"
      },

      "4" : {
          "id"    : "room54",
          "name"  : "...",
          "src"   : "/audio/r5/0_alice.mp3"
      },

      "5" : {
          "id"    : "room55",
          "name"  : "Alice Fialová",
          "src"   : "/audio/r5/alice.mp3"
      },

      "6" : {
          "id"    : "room56",
          "name"  : "...",
          "src"   : "/audio/r5/0_haewon.mp3"
      },

      "7" : {
          "id"    : "room57",
          "name"  : "Haewon Lim",
          "src"   : "/audio/r5/haewon.mp3"
      },

      "8" : {
          "id"    : "room58",
          "name"  : "...",
          "src"   : "/audio/r5/0_geeke.mp3"
      },

      "9" : {
          "id"    : "room59",
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
          console.log("no sounds loaded yet");
        } else {
          howls[count].stop();
          for(var i = 0; i < howls.length; i++ ) {
            howls[i].stop();
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

        loading.addClass('active');

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
            src     : rX[i].src
          });

          console.log("lp-" + room[i]);

          if (i == 0) {
            $('.list').append('<li id="'+rX[i].id+'" data-int="'+i+'" class="list-item active">'+rX[i].name+'</li>');
          } else {
            $('.list').append('<li id="'+rX[i].id+'" data-int="'+i+'" class="list-item" >'+rX[i].name+'</li>');
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
            loading.removeClass('active');
            nextBtn.removeClass('active');
            playBtn.removeClass('active');
            pauseBtn.addClass('active');
          });
          howls[i].on('pause', function(){
            console.log('sound paused');
            pauseBtn.removeClass('active');
            playBtn.addClass('active');
          });
          if(howls[i] == howls.length-1) {
            howls[i].on('end', function(){
              console.log('last sound played');
              playBtn.removeClass('active');
              pauseBtn.removeClass('active');
              pin.addClass('active');
            });
          } else {
            howls[i].on('end', function(){
              console.log('sound ended');
              playBtn.removeClass('active');
              pauseBtn.removeClass('active');
              nextBtn.addClass('active');
            });
          }
          howls[i].on('stop', function(){
            console.log('sound stopped');
            pauseBtn.removeClass('active');
          });

        }

        howls[howls.length-1].on('load', function(){
          console.log('last loaded');
          loading.removeClass('active');
          playBtn.addClass('active');
        });

        // event listeners for the controls
        //

        // $('.r').on('click', function(){
        //
        //
        //
        //   for ( var i = 0; i < howls.length; i++ ) {
        //       console.log(howls[i], "count" + count);
        //       howls[i].stop();
        //
        //   }
        // });

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

        $('.list-item').on('click', function(){

          howls[count].stop();
          count = $(this).attr('data-int');
          howls[count].play();
          $('.list-item').removeClass('active');
          $(this).addClass('active');
        });

      }

      function visualFeedback (id, el) {
        $('#map').attr('src', '/img/floor-plan-'+id+'.svg');
        $('.r').removeClass('active');
        playBtn.removeClass('active');
        pauseBtn.removeClass('active');
        nextBtn.removeClass('active');
        el.addClass('active');
      }

      function toggleView () {
        $('.player').toggleClass('active');
        if( $('.player').hasClass('active')) {
          $('.instructions').text('Back to overview');
        } else {
          $('.instructions').text('Back to list');
        }
      }

      // Click stuff

      $('a').on('mousedown touchstart', function() {
        $(this).addClass('mousedown');
      });

      $('a').on('mouseup touchend', function() {
        $(this).removeClass('mousedown');
      });

      $('.instructions').on('click', function() {
        toggleView();
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
          toggleView();
        }

        if(event.target.id == "r2") {
          visualFeedback(event.target.id, $(this));
          loadPlaylist(2, r2, room2, rSize);
          toggleView();
        }

        if(event.target.id == "r3") {
          visualFeedback(event.target.id, $(this));
          loadPlaylist(3, r3, room3, rSize);
          toggleView();
        }

        if(event.target.id == "r4") {
          visualFeedback(event.target.id, $(this));
          loadPlaylist(4, r4, room4, rSize);
          toggleView();
        }

        if(event.target.id == "r5") {
          visualFeedback(event.target.id, $(this));
          loadPlaylist(5, r5, room5, rSize);
          toggleView();
        }


      });


    });

}());
