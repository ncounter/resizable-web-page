document.addEventListener('DOMContentLoaded', onDocumentReady, false);

function onDocumentReady() {
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');
  var aside = document.querySelector('aside');
  var section = document.querySelector('section');
  var resizer = document.querySelector('.vertical-resizer');
  resizer.addEventListener('mousedown', startDrag, false);

  var startX, startY, startWidth, startHeight;

  function startDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(aside).width, 10);
    document.documentElement.addEventListener('mousemove', drag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  }

  function drag(e) {
    aside.style.width = (startWidth + e.clientX - startX) + 'px';
    section.style.width = (window.innerWidth - parseInt(document.defaultView.getComputedStyle(aside).width, 10)) + 'px';
  }

  function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', drag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);

    var asidePercentage = Math.round(parseInt(document.defaultView.getComputedStyle(aside).width, 10) * 100 / window.innerWidth);
    setCookie(asidePercentage + '%', (100 - asidePercentage) + '%')
  }

  window.addEventListener('resize', windowResized, false);
  function windowResized() {
    var asidePercentage = Math.round(parseInt(document.defaultView.getComputedStyle(aside).width, 10) * 100 / window.innerWidth);
    aside.style.width = asidePercentage + '%';
    section.style.width = (100 - asidePercentage) + '%';

    setHeights();
  }

  function setHeights() {
    var contentHeight = window.innerHeight - parseInt(document.defaultView.getComputedStyle(header).height, 10) - parseInt(document.defaultView.getComputedStyle(footer).height, 10) + 'px';
    aside.style.height = section.style.height = contentHeight;
    aside.style.top = section.style.top = parseInt(document.defaultView.getComputedStyle(header).height, 10) + 'px';
  }
  setHeights();

  function setCookie(asideWidth, sectionWidth) {
    document.cookie = "asideWidth=" + asideWidth;
    document.cookie = "sectionWidth=" + sectionWidth;
  }

  function readFromCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
}
