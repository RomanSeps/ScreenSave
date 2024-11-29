var q = document.getElementById("MCanva");
        var s = window.screen;
        var w = q.width = s.width;
        var h = q.height = s.height;
        var p = Array(256).join(1).split('');
        var c = q.getContext("2d");
        var m = Math;
        var color = 'rgba(0, 255, 60, 0.8)';

        var density = 0.1; // 0.1 = 10%, 1.0 = 100%

        q.addEventListener('wheel', function(event) {
            event.preventDefault(); 

            density += event.deltaY > 0 ? -0.01 : 0.01;
            density = Math.min(Math.max(density, 0), 1);
        });

        function getRandomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return `rgba(${r}, ${g}, ${b}, 0.8)`;
        }
        
        function hideInstructions() {
            var instructions = document.getElementById("instructions");
            instructions.style.display = 'none';
        }

        q.addEventListener('click', function() {
            hideInstructions();
            color = getRandomColor(); 
        });

        window.addEventListener('keydown', function() {
            hideInstructions();
        });

        setInterval(function() {
            c.fillStyle = 'rgba(0,0,0,0.05)';
            c.fillRect(0, 0, w, h);
            c.fillStyle = color;
            p = p.map(function(v, i) {
                var r = m.random();

                if (m.random() < density) {
                    var str = String.fromCharCode(m.floor(2720 + r * 33));
                    c.fillText(str, i * 10, v);
                }
                v += 10;
                var ret = v > 768 + r * 10000 ? 0 : v;
                return ret;
            });

        }, 33);
