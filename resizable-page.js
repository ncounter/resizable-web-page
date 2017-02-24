document.addEventListener('DOMContentLoaded', onDocumentReady, false);

function onDocumentReady() {
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
  }

}
