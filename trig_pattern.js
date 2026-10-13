const r = require("raylib");

let time = 0;

function setup() {
    const HEIGHT = 800;
    const WIDTH = 800;
    const centerX = WIDTH / 2;
    const centerY = HEIGHT / 2;

    const world = { HEIGHT, WIDTH, centerX, centerY };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Circle_Points");
    r.SetTargetFPS(10);

    return world;
}

function update(w) {
    time += 0.02;
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    for (let i = 0; i < 800; i += 0.15) {
        const a = i * 0.05;
        const radius = 180 + 50 * Math.tan(a * 4 + time * 2);

        const x = w.centerX + radius * Math.cos(time * a);
        const y = w.centerY + radius * Math.sin(time * a);

        r.DrawCircle(x, y, 2, r.GOLD);
    }

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();
