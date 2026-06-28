export const obstacles = [
    {x: 200, y: 340, width: 50, height: 10, type: "spike"},
    {x: 400, y: 320, width: 60, height: 20, type: "lava"},
]

export function drawObstacles(ctx) {
    obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.type === "spike" ? "gray" : "orange"
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
    })
}