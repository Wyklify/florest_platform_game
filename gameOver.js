let goal = { x: 750, y: 100, width: 30, height: 30 }

export function drawGoal(ctx) {
    ctx.fillStyle = "gold"
    ctx.fillRect(goal.x, goal.y, goal.width, goal.height)
}

export function checkWinOrLose(player, gameState) {

    if(gameState.gameOver) {
        return
    }

    if (player.health <= 0) {
        gameState.gameOver = true
        alert("Game Over! You lost all your health.")
        location.reload() // Reload the game
    }

    if (player.x + player.width > goal.x &&
        player.x < goal.x + goal.width &&
        player.y + player.height > goal.y &&
        player.y < goal.y + goal.height) {
        alert("Congratulations! You reached the goal!")
        gameState.gameOver = true
        location.reload() // Reload the game
    }
}