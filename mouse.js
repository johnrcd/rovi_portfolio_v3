const glowElement = document.getElementById("mouse_glow");

addEventListener("DOMContentLoaded", (event) => {
    addEventListener("mousemove", (event) => {handleMoustMove(event)});
});

const handleMoustMove = (event) => {
    const y = event.pageY;
    const x = event.pageX;
    const ref = document.getElementById("mouse_glow");
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    ref.style.left =  x - scrollLeft + 'px';
    ref.style.top = y - scrollTop + 'px';
}