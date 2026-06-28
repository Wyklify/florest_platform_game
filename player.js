export const player = {
    x: 50,
    y: 0,
    width: 30,
    height: 50,
    speed: 5,
    velocityY: 0,
    gravity: 0.5,
    jumpStrength: -10,
    onGround: false,
    health: 100
}

export function initPlayer(canvasHeight, groundHeight) {
    player.y = canvasHeight - groundHeight - player.height
}

export function drawPlayer(player, ctx) {
    ctx.fillStyle = "blue"
    ctx.fillRect(player.x, player.y, player.width, player.height)
}


// movimento e pulo do jogador

let keys = {}

document.addEventListener('keydown', (event) => {
    keys[event.key] = true
})

document.addEventListener('keyup', (event) => {
    keys[event.key] = false
})

export function updatePlayer(canvasWidht, canvasHeight, groundHeight) {
    if (keys['ArrowLeft']) {
        player.x -= player.speed
    }

    if (keys['ArrowRight']) {
        player.x += player.speed
    }

    //pulo
    if (keys['ArrowUp'] && player.onGround) {
        player.velocityY = player.jumpStrength
        player.onGround = false
    }

    //gravidade
    player.velocityY += player.gravity
    player.y += player.velocityY


    // colisão com limites do mapa
    player.x = clamp(player.x, 0, canvasWidht - player.width)

    //colisão com o chão
    if (player.y + player.height >= canvasHeight - groundHeight) {
        player.y = canvasHeight - groundHeight - player.height
        player.velocityY = 0
        player.onGround = true
    }



}



// inimigos persiguir o player se o player estiver dentro de um certo alcance
export function chasePlayer(enemy) {
    let distance = player.x - enemy.x

    if (Math.abs(distance) < 150) {
        enemy.direction = distance > 0 ? 1 : -1
    }
}

// definir os valores máximos e mínimos para o jogador não sair da tela
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
}

export function ckeckObstacleCollisions(obstacles) {
    obstacles.forEach(obstacle => {
        const overlapX = player.x + player.width > obstacle.x && player.x < obstacle.x + obstacle.width
        const overlapY = player.y + player.height > obstacle.y && player.y < obstacle.y + obstacle.height

        if (overlapX && overlapY) {
            player.health -= 1
            console.log("Colidiu com obstáculo", player.health)
        }
    })
}