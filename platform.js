let platforms = [
    { x: 100, y: 300, width: 100, height: 10 },
    { x: 250, y: 250, width: 120, height: 10 },
    { x: 400, y: 200, width: 100, height: 10 },
    { x: 650, y: 280, width: 100, height: 10, speed: 0.5, direction: 1 }
]



export function drawPlatforms(ctx) {
    ctx.fillStyle = "brown"
    platforms.forEach(platform => {
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
    })


}

export function updateMovingPlatforms() {
    platforms.forEach(platform => {

        if (platform.speed) {
            platform.y += platform.speed * platform.direction

            if (platform.y <= 150 || platform.y >= 300) {
                platform.direction *= -1
            }
        }
    })
}

// colisao player com plataformas

export function checkPlatformCollision(player) {

    // colisão com plataformas fixas
    platforms.forEach(platform => {
        if (player.y + player.height >= platform.y &&
            player.y + player.height - player.velocityY <= platform.y &&
            player.x + player.width > platform.x &&
            player.x < platform.x + platform.width) {

            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.onGround = true;


            // colisão com plataformas móveis
            if (platform.speed) {
                player.y += platform.speed * platform.direction
            }
        }

    })
}