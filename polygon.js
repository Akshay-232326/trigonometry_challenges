const r = require("raylib");

function setup() {
    const HEIGHT = 400;
    const WIDTH = 400;
    const circleX = 200;
    const circleY = 200;
    const radius = 150;
    const noOfSides = 7;
    const world = { HEIGHT, WIDTH, circleX, circleY, radius, noOfSides };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Circle_Points");
    r.SetTargetFPS(60);

    return world;
}

function drawPoint(w) {
    const point = {
        x1: w.circleX + w.radius,
        y1: w.circleY,
        x2: 0,
        y2: 0,
        angle: (2 * Math.PI) / w.noOfSides,
    };

    for (let i = 0; i <= w.noOfSides; i++) {
        point.x2 = w.circleX + Math.cos(point.angle * i) * w.radius;
        point.y2 = w.circleY + Math.sin(point.angle * i) * w.radius;
        r.DrawLine(point.x1, point.y1, point.x2, point.y2, r.WHITE);
        point.x1 = point.x2;
        point.y1 = point.y2;
    }
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircle(w.circleX, w.circleY, w.radius, r.RED);
    drawPoint(w);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();
