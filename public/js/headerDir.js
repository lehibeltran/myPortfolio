angular.module('myApp').directive('headerDir', function ($interval) {
    return {
        templateUrl: '../views/header.html',
        restrict: 'E',
        link: function (scope, elem, attrs) {
            scope.setTheme = function (theme, color) {
                var link = document.createElement('link');
                link.setAttribute("id", "bootstrap");
                link.rel = 'stylesheet';
                link.href = "styles/" + theme + "/bootstrap.min.css";
                $('#bootstrap').remove();
                $('head').append(link);
                $('body-dir > .section-tout').css("background-color", color);
            };
            // Register an event listener to
            // call the resizeCanvas() function each time
            // the window is resized.
            window.addEventListener('resize', resizeCanvas, false);
            window.addEventListener('orientationchange', resizeCanvas, false);
            //Lets create a simple particle system in HTML5 canvas and JS
            //Initializing the canvas
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            var W, H;
            resizeCanvas();
            function resizeCanvas() {
                //Canvas dimensions
                W = window.innerWidth;
                H = window.innerHeight;
                canvas.width = W;
                canvas.height = H;
            }
            //Lets create an array of particles
            var particles = [];
            for(var i = 0; i < 3; i++)
            {
                //This will add 50 particles to the array with random positions
                particles.push(new create_particle());
            }

            //Lets create a function which will help us to create multiple particles
            function create_particle()
            {
                //Random position on the canvas
                this.x = Math.random()*W;
                this.y = Math.random()*H;

                //Lets add random velocity to each particle
                this.vx = Math.random()*20-10;
                this.vy = Math.random()*20-10;

                //Random colors
                var r = Math.random()*255>>0;
                var g = Math.random()*255>>0;
                var b = Math.random()*255>>0;
                this.color = "rgba("+r+", "+g+", "+b+", 0.5)";

                //Random size
                this.radius = Math.random()*2+1;
            }

            //var x = 100; var y = 100;

            //Lets animate the particle
            function draw()
            {
                //Moving this BG paint code insde draw() will help remove the trail
                //of the particle
                //Lets paint the canvas black
                //But the BG paint shouldn't blend with the previous frame
                ctx.globalCompositeOperation = "source-in";
                //Lets reduce the opacity of the BG paint to give the final touch
                ctx.fillStyle = "transparent";
                ctx.fillRect(0, 0, W, H);

                //Lets blend the particle with the BG
                ctx.globalCompositeOperation = "lighter";

                //Lets draw particles from the array now
                for(var t = 0; t < particles.length; t++)
                {
                    var p = particles[t];

                    ctx.beginPath();

                    //Time for some colors
                    var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                    gradient.addColorStop(0, "white");
                    gradient.addColorStop(0.4, "white");
                    gradient.addColorStop(0.4, p.color);
                    gradient.addColorStop(1, "black");

                    ctx.fillStyle = gradient;
                    ctx.arc(p.x, p.y, p.radius, Math.PI*2, false);
                    ctx.fill();

                    //Lets use the velocity now
                    p.x += p.vx;
                    p.y += p.vy;

                    //To prevent the balls from moving out of the canvas
                    if(p.x < -50) p.x = W+50;
                    if(p.y < -50) p.y = H+50;
                    if(p.x > W+50) p.x = -50;
                    if(p.y > H+50) p.y = -50;
                }
            }
            $interval(draw, 38);
        }
    }
});
