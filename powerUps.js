export let powerUps = [
    { x: 250, y: 150, width: 20, height: 20, type: "speed", collected: false },
]

export function drawPowerUps(ctx) {
    ctx.fillStyle = "blue"
    powerUps.forEach(powerUp => {
        if (!powerUp.collected) {
            ctx.fillRect(powerUp.x, powerUp.y, powerUp.width, powerUp.height)
        }
    })
}

export function checkPowerUpCollection(player) {
    powerUps.forEach(powerUp => {
        if (!powerUp.collected) {

            const overlapX = player.x + player.width > powerUp.x && player.x < powerUp.x + powerUp.width
            const overlapY = player.y + player.height > powerUp.y && player.y < powerUp.y + powerUp.height

            if (overlapX && overlapY) {
                powerUp.collected = true

                if (powerUp.type === "speed") {
                    player.speed += 2
                    setTimeout(() => player.speed -= 2, 5000)
                }
            }
        }
    })
}