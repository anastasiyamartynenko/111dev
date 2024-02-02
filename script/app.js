var canvas = document.getElementById('growthChart');
var context = canvas.getContext('2d');

var dataPoints1 = [
    { x: 0, y: 0 },
    { x: 100, y: 5 },
    { x: 200, y: 20 },
    { x: 300, y: 50 },
    { x: 300, y: 70 },
    { x: 600, y: 80 }
];

var dataPoints2 = [
    { x: 0, y: 0 },
    { x: 100, y: 15 },
    { x: 200, y: 40 },
    { x: 300, y: 90 },
    { x: 300, y: 170 },
    { x: 600, y: 650 }
];

// Рисование первой линии
drawLine(dataPoints1, 'blue', 1);

// Рисование второй линии
drawLine(dataPoints2, 'red', 2);

function drawLine(dataPoints, color, lineWidth) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.moveTo(dataPoints[0].x, canvas.height - dataPoints[0].y);

    for (var i = 1; i < dataPoints.length - 2; i++) {
        var xc = (dataPoints[i].x + dataPoints[i + 1].x) / 2;
        var yc = (canvas.height - dataPoints[i].y + canvas.height - dataPoints[i + 1].y) / 2;
        context.quadraticCurveTo(dataPoints[i].x, canvas.height - dataPoints[i].y, xc, yc);
    }

    context.quadraticCurveTo(dataPoints[i].x, canvas.height - dataPoints[i].y, dataPoints[i + 1].x, canvas.height - dataPoints[i + 1].y);

    context.stroke();
}