document.addEventListener('DOMContentLoaded', onDocumentReady, false);

function onDocumentReady() {
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');
  var aside = document.querySelector('aside');
  var section = document.querySelector('section');
  var resizer = document.querySelector('.vertical-resizer');

  if (resizer != null) {
    resizer.addEventListener('mousedown', startDrag, false);
  }

  var startX, startY, startWidth, startHeight;

  // drag and drop to manage the resize feature
  function startDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = getWidthOf(aside);
    document.documentElement.addEventListener('mousemove', drag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  }
  function drag(e) {
    aside.style.width = (startWidth + e.clientX - startX) + 'px';
    section.style.width = (window.innerWidth - getWidthOf(aside)) + 'px';
  }
  function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', drag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);

    var asidePercentage = Math.round(getWidthOf(aside) * 100 / window.innerWidth);
    setCookie(asidePercentage)
    setWidths();
  }

  // on window resize event
  window.addEventListener('resize', windowResized, false);
  function windowResized() {
    var asidePercentage = Math.round(getWidthOf(aside)) * 100 / window.innerWidth;
    aside.style.width = asidePercentage + '%';
    section.style.width = (100 - asidePercentage) + '%';

    setHeights();
  }

  function setHeights() {
    var contentHeight = window.innerHeight - getHeightOf(header) - getHeightOf(footer) + 'px';
    aside.style.height = section.style.height = contentHeight;
    aside.style.top = section.style.top = getHeightOf(header) + 'px';
  }
  function setWidths() {
    var cookieAsideWidth = readFromCookie('asideWidthPercentage');
    if (cookieAsideWidth != null && cookieAsideWidth != '') {
      aside.style.width = cookieAsideWidth + '%';
      section.style.width = (100 - cookieAsideWidth) + '%';
    }
  }

  // initialize dimensions
  setHeights();
  setWidths();

  /*** Utils ***/
  function getWidthOf(element) {
    return parseInt(document.defaultView.getComputedStyle(element).width, 10);
  }
  function getHeightOf(element) {
    if (element == null) {
      return 0
    }
    return parseInt(document.defaultView.getComputedStyle(element).height, 10);
  }

  /*** handle cookie ***/
  function setCookie(asideWidth) {
    document.cookie = "asideWidthPercentage=" + asideWidth;
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
