export function drawHealth(ctx, player) {
    ctx.fillStyle = "red"
    ctx.fillText(`Health: ${player.health}`, 20, 50)
}