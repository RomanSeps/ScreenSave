var q = document.getElementById("MCanva");
var s = window.screen;
var w = q.width = s.width;
var h = q.height = s.height;
var p = Array(256).join(1).split('');
var c = q.getContext("2d");
var m = Math;

// Nastavte hustotu znaků
var density = 0.1; // 0.1 = 10%, 1.0 = 100%

// Funkce pro změnu hustoty pomocí kolečka myši
q.addEventListener('wheel', function(event) {
    event.preventDefault(); // Zamezte výchozímu chování

    // Změna hustoty na základě směru kolečka
    density += event.deltaY > 0 ? -0.01 : 0.01;
    density = Math.min(Math.max(density, 0), 1); // Udržujte hustotu mezi 0 a 1
});

setInterval(function() {
    c.fillStyle = 'rgba(0,0,0,0.05)';
    c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(11, 224, 236, 0.8)';
    p = p.map(function(v, i) {
        var r = m.random();
        // Určete, zda vykreslit znak na základě hustoty
        if (m.random() < density) {
            var str = String.fromCharCode(m.floor(2720 + r * 33));
            c.fillText(str, i * 10, v);
        }
        v += 10;
        var ret = v > 768 + r * 1e4 ? 0 : v;
        return ret;
    });

}, 33);

