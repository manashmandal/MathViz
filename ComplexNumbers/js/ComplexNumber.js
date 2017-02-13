var board = JXG.JSXGraph.initBoard('jxgbox', {
    axis: true,
    showCopyright: false,
    showNavigation: false,
    boundingbox: [-5, 5, 5, -5]
});



var point = board.create('point', [1.0, 1.0]);
var arrow = board.create('arrow', [
    [0.0, 0.0], point
]);


var point2 = board.create('point', [1, 0]);
var point0 = board.create('point', [0, 0]);

var angle = board.create('angle', [
    point2, point0, point
], { radius: 0.5 });


arrow.isDraggable = false;
point0.isDraggable = false;
point2.isDraggable = false;


point.on('drag', function() {

    console.log(arrow.getAngle());

    var a = '' + point.X();
    var b = point.Y() + 'i';

    var z = '';

    if (point.Y() >= 0) {
        z = a + '+' + b;
    } else {
        z = a + b;
    }

    var formula = document.getElementById("complex_expression");

    formula.innerHTML = "\\[" + z + "\\]";

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, formula]);
});