const r = require("raylib");

function setup() {
    const HEIGHT = 800;
    const WIDTH = 800;
    const aX = 100;
    const aY = 300;
    const bX = 350;
    const bY = 150;

    const world = { HEIGHT, WIDTH, aX, aY, bX, bY };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Angle");
    r.SetTargetFPS(60);

    return world;
}

function calcAngle(w) {
    r.DrawLine(w.aX, w.aY, w.bX, w.bY, r.RED);
    r.DrawText("Point a", w.aX - 25, w.aY, 20, r.WHITE);
    r.DrawLine(w.aX, w.aY, w.bX, w.aY, r.RED);
    r.DrawText("Point b", w.bX - 25, w.bY - 25, 20, r.WHITE);

    r.DrawLine(w.bX, w.bY, w.bX, w.aY, r.RED);
    const radian = Math.atan(Math.abs(w.bY - w.aY) / Math.abs(w.bX - w.aX));
    const angle = (radian * 180) / Math.PI;

    r.DrawText("Angle : " + Math.round(angle), 20, 30, 20, r.WHITE);
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    calcAngle(w);

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
