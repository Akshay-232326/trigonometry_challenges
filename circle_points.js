const r = require("raylib");

function setup() {
    const HEIGHT = 400;
    const WIDTH = 400;
    const circleX = 200;
    const circleY = 200;
    const radius = 150;
    const noOfPoint = 12;
    const world = { HEIGHT, WIDTH, circleX, circleY, radius, noOfPoint };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Circle_Points");
    r.SetTargetFPS(60);

    return world;
}

function drawPoint(w) {
    const point = {
        x: w.circleX + w.radius,
        y: w.circleY,
        r: 5,
        angle: (2 * Math.PI) / w.noOfPoint,
    };

    for (let i = 0; i < w.noOfPoint; i++) {
        point.x = w.circleX + Math.cos(point.angle * i) * w.radius;
        point.y = w.circleY + Math.sin(point.angle * i) * w.radius;

        r.DrawCircle(point.x, point.y, point.r, r.BLUE);
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
