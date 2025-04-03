function typeWriter(text, elementId, speed) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            document.getElementById(elementId).innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            i++;
            setTimeout(typing, speed);
        } else {
            document.getElementById(elementId).innerHTML = text + '<span class="cursor">|</span>';
        }
    }
    typing();
}

window.onload = function () {
    typeWriter("DATA BASE IS NOT BLACK BOX!", "text-container", 200);
    typeWriter("Mütəxəssislər", "section-title", 150);
    typeWriter("Tərəfdaşlar", "section-title2", 150);
    typeWriter("Kitablar", "section-title3", 150);
};
