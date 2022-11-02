
$(window).on('load', function () {
  $(document).ready(function () {


    var video = document.getElementById('video'),
      kol = document.getElementById('kol'),
      curr = document.getElementById('curr'),
      play_btn = document.getElementById('play'),
      play1 = document.getElementById('play1'),
      dynamic = document.getElementById('dynamic'),
      full_screen = document.getElementById('full_screen'),
      player = document.getElementById('player'),
      full_screen_exit = document.getElementById('full_screen_exit'),
      proces = document.getElementById('process'),
      timeBlock = $('.time'),
      progress = $('.progress1'),
      progress_save = $('.progress_save'),
      modal = document.getElementById('myModal'),
      sub = document.getElementById('sub'),
      test = document.getElementById('test');
    courseb = document.getElementById('courseb'),
      view_ans = document.getElementById('view_ans'),
      result1 = document.getElementById('result1'),
      controls = document.getElementById('controls'),
      trigger = document.getElementById('trigger-b'),
      loading = document.getElementById('loading'),
      parent_b = document.getElementById('parent_b'),
      restart = document.getElementById('restart'),
      tm = document.getElementById('tm'),
      tm_line = document.getElementById('tm_line'),
      volume = document.getElementById('volume');

    if (video !== null) {
      window.onblur = function () {
        clearTimer();
        video.pause();
        play_btn.src = './icons/play.png';
      }
    }

    if (video !== null) {

      function myFunction() {
        if (play_btn.src == './icons/pause.png') {
          var x = document.getElementById("video").readyState;

          if (x >= 3) {
            video.play();
            loading.style.display = 'none';
            parent_b.style.background = '';
          }
          else {
            video.pause();
            loading.style.display = 'block';
            parent_b.style.background = '#0000007a';
          }
        }
      }
      setInterval(myFunction, 1000);

    }

    var standalone = window.navigator.standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari/.test(userAgent),
      ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
      if (video !== null) {
        full_screen.style.display = 'none';
      }
    }
    if (video !== null) {
      if (window.screen.width < 800) {
        tm.classList.add('font_size');
        tm_line.classList.add('tm_size');
        dynamic.style.display = 'none';
        volume.style.display = 'none';
      }
    }

    //Секундомер
    //изначальные переменные
    min = 0;
    hour = 0;
    //Оставляем вашу функцию
    function init() {
      sec = 0;
      setInterval(tick, 1000);
    }

    //Основная функция tick()
    function tick() {
      sec++;
      if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
        min++;
        sec = sec - 60;
      }
      if (min >= 60) {
        hour++;
        min = min - 60;
      }
      if (sec < 10) { //Визуальное оформление
        if (min < 10) {
          if (hour < 10) {
            document.getElementById('timer').value = '0' + hour + ':0' + min + ':0' + sec;
          } else {
            document.getElementById('timer').value = hour + ':0' + min + ':0' + sec;
          }
        } else {
          if (hour < 10) {
            document.getElementById('timer').value = '0' + hour + ':' + min + ':0' + sec;
          } else {
            document.getElementById('timer').value = hour + ':' + min + ':0' + sec;
          }
        }
      } else {
        if (min < 10) {
          if (hour < 10) {
            document.getElementById('timer').value = '0' + hour + ':0' + min + ':' + sec;
          } else {
            document.getElementById('timer').value = hour + ':0' + min + ':' + sec;
          }
        } else {
          if (hour < 10) {
            document.getElementById('timer').value = '0' + hour + ':' + min + ':' + sec;
          } else {
            document.getElementById('timer').value = hour + ':' + min + ':' + sec;
          }
        }
      }
    }
    $timerr = document.getElementById('timer');
    if ($timerr !== null) {
      init();
    }

    let arr = new Array();
    let arr1 = new Array();


    $('.full_screen').on('click', function (e) {


      function fullScreen(element) {
        if (element.requestFullScreen) {
          element.requestFullScreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        }
      }
      if (ios) {
        element.webkitRequestFullScreen();
      }

      // всю страницу
      var html = document.getElementById('player');
      fullScreen(html);

      player.classList.add('fullscreenvideo');
      full_screen.src = './icons/fullscreeneexit.png';
      full_screen_exit.style.display = 'block';
      full_screen.style.display = 'none';

      trigger.style.width = '10000px';
      trigger.style.height = '10000px';

    });






    document.addEventListener('fullscreenchange', exitHandler);
    document.addEventListener('webkitfullscreenchange', exitHandler);
    document.addEventListener('mozfullscreenchange', exitHandler);
    document.addEventListener('MSFullscreenChange', exitHandler);

    var timerId;
    function clearTimer() {
      clearInterval(timerId);
    };



    function exitHandler() {
      if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        player.classList.remove('fullscreenvideo');
        full_screen.src = './icons/fullscreen.png';
        full_screen_exit.style.display = 'none';
        full_screen.style.display = 'block';
        trigger.style.width = '';
        trigger.style.height = '';
      }
    }

    var volumeControl = document.getElementById('volume');
    if (volumeControl !== null) {
      volumeControl.addEventListener('input', function () {
        video.volume = volumeControl.value;
        if (video.volume == 0) {
          dynamic.src = './icons/mute.png';
          dynamic.classList.add('off');
        }
        else {
          dynamic.src = './icons/speaker.png';
          dynamic.classList.remove('off');
        }

      }, false);
    }




    $('.play').on('click', function (e) {
      e.preventDefault();
      var btnPlay = $(this);


      if (video.paused) {
        video.play();
        play_btn.src = './icons/pause.png';

        if (video.readyState == 4) {

          video.play();

        } else alert("Возникла ошибка загрузки видео, перезагрузите страницу или попробуйте позже!");

      } else {
        clearTimer();
        video.pause();
        play_btn.src = './icons/play.png';
      }

      if (kol !== null && kol !== undefined) {
        kol = kol.value;
      }

      for (var i = 0; i < kol; i++) {
        r = i + 1;
        var pause = document.getElementById('pause' + r);
        id = document.getElementById('id' + r);
        progress_pause = $('.progress_pause' + r);
        tt = pause.value.substr(0, 2);

        if (tt < 10) { tt = tt.substr(1, 1); }
        tt1 = pause.value.substr(3, 2);
        if (tt1 < 10) { tt1 = tt1.substr(4, 1); }
        tt1 = tt1 * 100 / 60;
        tt1 = Math.round(tt1);
        tt2 = (tt + '.' + tt1) * 60;
        var tt3 = Math.floor(tt2 / video.duration * 100),
          dd = pause.value;
        if (dd.substr(0, 2) < 10) { dd = dd.substr(1, 4); }
        arr.push(dd);
        arr1.push(id.value);
        progress_pause.css({
          width: '3px'
        });
        progress_pause.css({
          margin: '-8px 0 0 ' + tt3 + '%'
        });
        progress_pause.css({
          height: '8px'
        });
      }
    });





    $('.full_screen_exit').on('click', function () {
      if (document.fullscreenEnabled == true) {
        function closeFullscreen() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
        closeFullscreen();
      }


      player.classList.remove('fullscreenvideo');
      full_screen.src = './icons/fullscreen.png';
      full_screen_exit.style.display = 'none';
      full_screen.style.display = 'block';
      trigger.style.width = '';
      trigger.style.height = '';
    });


    $(video).on({
      timeupdate: function () {
        var duration = video.duration,
          currentTime = video.currentTime,
          elapsedTime = duration - currentTime;

        setTime(elapsedTime);
        if (localStorage.getItem('currenTT') < currentTime) {
          localStorage.setItem('currenTT', currentTime);
        }

        save_currentTime = localStorage.getItem('currenTT');
        var progression_save = Math.floor(save_currentTime / duration * 100);
        var progression = Math.floor(currentTime / duration * 100);

        progress.css({
          width: progression + '%' //выводим значение в css
        });

        progress_save.css({
          width: progression_save + '%' //выводим значение в css для отображения проигранного видео
        });

      },
      canplay: function () {
        var duration = video.duration;
        setTime(duration);

      },
      ended: function () {
        clearTimer();
        play_btn.src = './icons/play.png';

      }

    });


    function setTime(time) {///общее время видео
      minutesd = Math.floor(video.duration / 60);
      secondsd = Math.floor(video.duration - (minutesd * 60));

      if (secondsd < 10) { secondsd = '0' + secondsd; }
      timeStringd = minutesd + ':' + secondsd;


      minutes = Math.floor(video.currentTime / 60);
      seconds = Math.floor(video.currentTime - (minutes * 60));
      if (seconds < 10) { seconds = '0' + seconds; }
      timeString = minutes + ':' + seconds;
      timeBlock.text(timeString + '/' + timeStringd);
      localStorage.setItem('current1', timeString);



    }


    $('.timeline').on('click', function (e) { //добавляем событие на клик бегунка и переменные нужные для работы
      var $this = $(this),
        position = e.pageX - $this.offset().left,
        width = $this.width(),
        persents = position / width * 100,
        trackPosition = video.duration / 100 * persents;
      if (save_currentTime > trackPosition) {
        video.currentTime = trackPosition;
      }
    });

    if (dynamic !== null) {
      dynamic.onclick = function (e) {
        e.preventDefault();
        if (dynamic.classList == ('mute off')) {
          dynamic.classList.remove('off');
          dynamic.src = './icons/speaker.png';
          volumeControl.value = 1;
          video.volume = volumeControl.value;
        }
        else {
          dynamic.classList.add('off');
          dynamic.src = './icons/mute.png';
          volumeControl.value = 0;
          video.volume = volumeControl.value;
        }
      };
    }
  });
});









