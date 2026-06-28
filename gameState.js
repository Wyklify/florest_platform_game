export let gameState = {
    score: 0,
    lives: 3,
    level: 1,
    gameOver: false
}

export function drawScore(ctx) {
    ctx.fillStyle = "white"
    ctx.font = "20px Arial"
    ctx.fillText(`Score: ${gameState.score}`, 20, 30)
}