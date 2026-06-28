let coins= [
    {x: 150, y: 280, collected: false},
    {x: 310, y: 230, collected: false},
    {x: 450, y: 180, collected: false}
]

export function drawCoins(ctx){
    ctx.fillStyle = "yellow"
    coins.forEach(coin => {
        if (!coin.collected) {
            ctx.beginPath()
            ctx.arc(coin.x, coin.y, 5, 0, Math.PI * 2)
            ctx.fill()
        }
    })
}

export function checkCoinCollection(player, gameState) {
    coins.forEach(coin => {
        if (!coin.collected &&
            player.x < coin.x + 5 &&
            player.x + player.width > coin.x - 5 &&
            player.y < coin.y + 5 &&
            player.y + player.height > coin.y - 5) {
            coin.collected = true
            gameState.score += 10
        }
    })
}