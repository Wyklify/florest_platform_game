import { clamp } from "./scripts/clamp.js"
import { player, chasePlayer } from "./player.js"

let enemies = [
    { x: 200, y: 300, width: 20, height: 20, speed: 2, direction: 1 },
    // { x: 350, y: 250, width: 20, height: 20, speed: 1, direction: -1 },
    // { x: 500, y: 200, width: 20, height: 20, speed: 1.5, direction: 1 }
]

export function drawEnemies(ctx) {
    ctx.fillStyle = "red"
    enemies.forEach(enemy => {
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height)
    })
}

// movimento dos inimigos
export function updateEnemies(canva) {
    enemies.forEach(enemy => {

        enemy.x += enemy.speed * enemy.direction

        if (enemy.x <= 200 || enemy.x + enemy.width >= canva.width) {
            enemy.direction *= -1
        }

        chasePlayer(enemy)
    })
}

export function checkEnemyCollision(player) {
    enemies.forEach(enemy => {
        if (player.x + player.width > enemy.x &&
            player.x < enemy.x + enemy.width &&
            player.y + player.height > enemy.y) {
                
            player.health -= 1; // Lose health on enemy contact
        }
    })
}

