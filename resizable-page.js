document.addEventListener('DOMContentLoaded', onDocumentReady, false);
function onDocumentReady() {
    var bar = document.querySelector('.vertical-bar');

    function startDrag(e) {
      console.log(e)
    }

    bar.addEventListener('mousedown', startDrag, false);

    // bar.addEventListener('click', function init() {
    //     bar.removeEventListener('click', init, false);
    //     bar.className = bar.className + ' resizable';
    //     var resizer = document.createElement('div');
    //     resizer.className = 'resizer';
    //     bar.appendChild(resizer);
    //     resizer.addEventListener('mousedown', initDrag, false);
    // }, false);
    //
    // var startX, startY, startWidth, startHeight;
    //
    // function initDrag(e) {
    //    startX = e.clientX;
    //    startY = e.clientY;
    //    startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
    //    startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
    //    document.documentElement.addEventListener('mousemove', doDrag, false);
    //    document.documentElement.addEventListener('mouseup', stopDrag, false);
    // }
    //
    // function doDrag(e) {
    //    p.style.width = (startWidth + e.clientX - startX) + 'px';
    //    p.style.height = (startHeight + e.clientY - startY) + 'px';
    // }
    //
    // function stopDrag(e) {
    //     document.documentElement.removeEventListener('mousemove', doDrag, false);
    //     document.documentElement.removeEventListener('mouseup', stopDrag, false);
    // }
}
