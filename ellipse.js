const r = require("raylib");

function setup() {
    const HEIGHT = 800;
    const WIDTH = 800;
    let circleX = 300;
    let circleY = 200;
    const hRadius = 200;
    const vRadius = 100;
    const world = { HEIGHT, WIDTH, circleX, circleY, hRadius, vRadius };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Circle_Points");
    r.SetTargetFPS(60);

    return world;
}

function drawEllipse(w) {
    const point = {
        x1: w.circleX + w.hRadius,
        y1: w.circleY,
        x2: 0,
        y2: 0,
        radian: Math.PI / 180,
    };

    for (let i = 0; i <= 360; i++) {
        point.x2 = w.circleX + Math.cos(point.radian * i) * w.hRadius;
        point.y2 = w.circleY + Math.sin(point.radian * i) * w.vRadius;
        r.DrawLine(point.x1, point.y1, point.x2, point.y2, r.WHITE);
        point.x1 = point.x2;
        point.y1 = point.y2;
    }
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawEllipse(w);

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
