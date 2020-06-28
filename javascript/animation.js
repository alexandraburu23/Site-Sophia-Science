///circular motion

var sat = {
    elt: null
    ,a: 0         // in radian
    ,r: 250        // radius
    ,da: 0.05     // in radian
    ,x: -50
    ,y: -50
    ,center: { x: (200-80.5), y: (80) }
}
sat.move = function(){
    this.a += this.da
    this.x = this.center.x + (this.r * Math.sin(this.a));
    this.y = this.center.y + (this.r * Math.cos(this.a));
    this.elt.style.top = this.y + "px";
    this.elt.style.left = this.x + "px";
}

sat.elt = document.getElementById('sat1');
var loopTimer = setInterval(function(){
    sat.move();
}, 100);