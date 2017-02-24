document.addEventListener('DOMContentLoaded', onDocumentReady, false);

function onDocumentReady() {
    var bar = document.querySelector('.vertical-bar');
    var startWidth, startHeight;

    function startDrag(e) {
      console.log('start drag');
      bar.addEventListener('mousemove', drag, false);
      bar.addEventListener('mouseup', stopDrag, false);

      startX = e.clientX;
      startY = e.clientY;
    }

    function drag(e) {
      bar.style.left = e.clientX + 'px';
      var aside = document.querySelector('aside');
      var section = document.querySelector('section');
      aside.style.width = e.clientX + 'px';
      section.style.width = window.innerWidth - e.clienX;
    }

    function stopDrag(e) {
      console.log('stop drag');
      bar.removeEventListener('mousemove', drag, false);
      bar.removeEventListener('mouseup', stopDrag, false);
    }

    bar.addEventListener('mousedown', startDrag, false);
}
