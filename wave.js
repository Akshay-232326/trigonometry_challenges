const r = require("raylib");

function setup() {
    const HEIGHT = 400;
    const WIDTH = 600;
    const originX = 50;
    const originY = 200;
    const amplitude = 100;

    const world = { HEIGHT, WIDTH, originX, originY, amplitude };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Wave");
    r.SetTargetFPS(60);

    return world;
}

function drawSinWave(w, sin, i) {
    sin.x += 1;
    sin.y = w.originY - w.amplitude * Math.sin(sin.radian * i);
    if (Math.sin(sin.radian * i) === 1) {
        r.DrawCircle(sin.x, sin.y, 3, r.WHITE);
        r.DrawText("Sine curve : 1", sin.x - 30, sin.y - 15, 10, r.WHITE);
    }
    if (Math.sin(sin.radian * i) === -1) {
        r.DrawCircle(sin.x, sin.y, 3, r.WHITE);
        r.DrawText("Sine curve : -1", sin.x - 30, sin.y + 10, 10, r.WHITE);
    }
    if (Math.round(sin.y) === w.originY) {
        r.DrawCircle(sin.x, sin.y, 3, r.WHITE);
        r.DrawText("Sine curve : 0", sin.x - 30, sin.y + 10, 10, r.WHITE);
    }

    r.DrawCircle(sin.x, sin.y, 1, r.RED);
}

function drawCosWave(w, cos, i) {
    cos.x += 1;
    cos.y = w.originY - w.amplitude * Math.cos(cos.radian * i);
    if (Math.cos(cos.radian * i) === 1) {
        r.DrawCircle(cos.x, cos.y, 3, r.WHITE);
        r.DrawText("cos curve : 1", cos.x - 30, cos.y - 15, 10, r.WHITE);
    }
    if (Math.cos(cos.radian * i) === -1) {
        r.DrawCircle(cos.x, cos.y, 3, r.WHITE);
        r.DrawText("cos curve : -1", cos.x - 30, cos.y + 10, 10, r.WHITE);
    }
    if (Math.round(cos.y) === w.originY) {
        r.DrawCircle(cos.x, cos.y, 3, r.WHITE);
        r.DrawText("cos curve : 0", cos.x - 30, cos.y + 10, 10, r.WHITE);
    }
    r.DrawCircle(cos.x, cos.y, 1, r.GREEN);
}

function drawWave(w) {
    r.DrawLine(w.originX, 0, w.originX, w.HEIGHT, r.WHITE);
    r.DrawLine(0, w.originY, w.WIDTH, w.originY, r.WHITE);

    const sin = {
        x: w.originX,
        y: w.originY,
        radian: Math.PI / 180,
    };

    const cos = {
        x: w.originX,
        y: w.originY,
        radian: Math.PI / 180,
    };

    for (let i = 0; i <= w.WIDTH; i++) {
        drawSinWave(w, sin, i);
        drawCosWave(w, cos, i);
    }
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawWave(w);
    r.DrawText("Red : Sin wave", 60, 10, 20, r.RED);
    r.DrawText("Green : Cos wave", 60, 30, 20, r.GREEN);
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
