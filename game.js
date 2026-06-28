import { player, drawPlayer, initPlayer, updatePlayer, ckeckObstacleCollisions } from "./player.js"
import { drawPlatforms, checkPlatformCollision, updateMovingPlatforms } from "./platform.js"
import { drawEnemies, updateEnemies } from "./enemies.js"
import { drawObstacles, obstacles } from "./obstacles.js"
import { drawScore, gameState } from "./gameState.js"
import { drawCoins,checkCoinCollection } from "./coins.js"
import { drawHealth } from "./health.js"
import {checkEnemyCollision} from "./enemies.js"
import { drawGoal, checkWinOrLose } from "./gameOver.js"

export let canvas = document.getElementById("gameCanvas")
let ctx = canvas.getContext("2d")

let bglImage = new Image()
bglImage.src = "background.png"

let groundHeight = 50

initPlayer(canvas.height, groundHeight)

function drawBackground(){
    if (bglImage.complete && bglImage.naturalWidth !== 0) {
        ctx.drawImage(bglImage, 0, 0, canvas.width, canvas.height)
    } else {
        ctx.fillStyle = "#87ceeb"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    ctx.fillStyle = "green"
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight)
}


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBackground()
    drawPlatforms(ctx)
    drawCoins(ctx)
    drawObstacles(ctx)
    drawEnemies(ctx)
    drawScore(ctx)
    drawHealth(ctx, player)
    drawGoal(ctx)
    drawPlayer(player, ctx)

    updatePlayer(canvas.width, canvas.height, groundHeight)
    updateEnemies(canvas)
    ckeckObstacleCollisions(obstacles)
    updateMovingPlatforms()
    checkPlatformCollision(player)
    checkCoinCollection(player, gameState)
    checkEnemyCollision(player)
    checkWinOrLose(player, gameState)
    requestAnimationFrame(update)
}


bglImage.onload = () => update()
bglImage.onerror = () => {
    console.warn("Não foi possível carregar background.png. Usando fundo padrão.")
    update()
}
