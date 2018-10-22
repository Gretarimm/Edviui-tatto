
//______map___________//
// function myMap() {
//   var myCenter = new google.maps.LatLng(51.508742,-0.120850);
//   var mapCanvas = document.getElementById("map");
//   var mapOptions = {center: myCenter, zoom: 5};
//   var map = new google.maps.Map(mapCanvas, mapOptions);
//   var marker = new google.maps.Marker({position:myCenter});
//   marker.setMap(map);

//   // Zoom to 9 when clicking on marker
//   google.maps.event.addListener(marker,'click',function() {
//     map.setZoom(9);
//     map.setCenter(marker.getPosition());
//   });
// }



// ____modal________//
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



//_________filter_____//
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



//___Add active class to the current button (highlight it)___// 
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// ________zoom_________//
$(document).ready(function(){
      $('.ex1').zoom({ on:'click' }); 
    });


  (function ($) {
    var defaults = {
      url: false,
      callback: false,
      target: false,
      duration: 120,
      on: 'mouseover', // other options: grab, click, toggle
      touch: true, // enables a touch fallback
      onZoomIn: false,
      onZoomOut: false,
      magnify: 1
    };

    // Core Zoom Logic, independent of event listeners.
    $.zoom = function(target, source, img, magnify) {
      var targetHeight,
        targetWidth,
        sourceHeight,
        sourceWidth,
        xRatio,
        yRatio,
        offset,
        position = $(target).css('position'),
        $source = $(source);

      // The parent element needs positioning so that the zoomed element can be correctly positioned within.
      target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
      target.style.overflow = 'hidden';

      img.style.width = img.style.height = '';

      $(img)
        .addClass('zoomImg')
        .css({
          position: 'absolute',
          top: 0,
          left: 0,
          opacity: 0,
          width: img.width * magnify,
          height: img.height * magnify,
          border: 'none',
          maxWidth: 'none',
          maxHeight: 'none'
        })
        .appendTo(target);

      return {
        init: function() {
          targetWidth = $(target).outerWidth();
          targetHeight = $(target).outerHeight();

          if (source === target) {
            sourceWidth = targetWidth;
            sourceHeight = targetHeight;
          } else {
            sourceWidth = $source.outerWidth();
            sourceHeight = $source.outerHeight();
          }

          xRatio = (img.width - targetWidth) / sourceWidth;
          yRatio = (img.height - targetHeight) / sourceHeight;

          offset = $source.offset();
        },
        move: function (e) {
          var left = (e.pageX - offset.left),
            top = (e.pageY - offset.top);

          top = Math.max(Math.min(top, sourceHeight), 0);
          left = Math.max(Math.min(left, sourceWidth), 0);

          img.style.left = (left * -xRatio) + 'px';
          img.style.top = (top * -yRatio) + 'px';
        }
      };
    };

    $.fn.zoom = function (options) {
      return this.each(function () {
        var
        settings = $.extend({}, defaults, options || {}),
        //target will display the zoomed image
        target = settings.target || this,
        //source will provide zoom location info (thumbnail)
        source = this,
        $source = $(source),
        img = document.createElement('img'),
        $img = $(img),
        mousemove = 'mousemove.zoom',
        clicked = false,
        touched = false,
        $urlElement;

        // If a url wasn't specified, look for an image element.
        if (!settings.url) {
          $urlElement = $source.find('img');
          if ($urlElement[0]) {
            settings.url = $urlElement.data('src') || $urlElement.attr('src');
          }
          if (!settings.url) {
            return;
          }
        }

        (function(){
          var position = target.style.position;
          var overflow = target.style.overflow;

          $source.one('zoom.destroy', function(){
            $source.off(".zoom");
            target.style.position = position;
            target.style.overflow = overflow;
            $img.remove();
          });
          
        }());

        img.onload = function () {
          var zoom = $.zoom(target, source, img, settings.magnify);

          function start(e) {
            zoom.init();
            zoom.move(e);

            // Skip the fade-in for IE8 and lower since it chokes on fading-in
            // and changing position based on mousemovement at the same time.
            $img.stop()
            .fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
          }

          function stop() {
            $img.stop()
            .fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
          }

          // Mouse events
           if (settings.on === 'click') {
            $source.on('click.zoom',
              function (e) {
                if (clicked) {
                  // bubble the event up to the document to trigger the unbind.
                  return;
                } else {
                  clicked = true;
                  start(e);
                  $(document).on(mousemove, zoom.move);
                  $(document).one('click.zoom',
                    function () {
                      stop();
                      clicked = false;
                      $(document).off(mousemove, zoom.move);
                    }
                  );
                  return false;
                }
              }
            );
          } 

          // Touch fallback
          if (settings.touch) {
            $source
              .on('touchstart.zoom', function (e) {
                e.preventDefault();
                if (touched) {
                  touched = false;
                  stop();
                } else {
                  touched = true;
                  start( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
                }
              })
              .on('touchmove.zoom', function (e) {
                e.preventDefault();
                zoom.move( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
              });
          }
          
          if ($.isFunction(settings.callback)) {
            settings.callback.call(img);
          }
        };

        img.src = settings.url;
      });
    };

    $.fn.zoom.defaults = defaults;
  }(window.jQuery));

