import { player, drawPlayer, initPlayer, updatePlayer, ckeckObstacleCollisions } from "./player.js"
import { drawPlatforms, checkPlatformCollision, updateMovingPlatforms } from "./platform.js"
import { drawEnemies, updateEnemies } from "./enemies.js"
import { drawObstacles, obstacles } from "./obstacles.js"
import { drawScore, gameState } from "./gameState.js"
import { drawCoins,checkCoinCollection } from "./coins.js"
import { drawHealth } from "./health.js"
import {checkEnemyCollision} from "./enemies.js"
import { drawGoal, checkWinOrLose } from "./gameOver.js"
import { drawPowerUps, checkPowerUpCollection } from "./powerUps.js"
import { buyUpgrade } from "./store.js"
import { saveGame, autoSaveGame } from "./saveGame.js"
import { loadGame } from "./loadGame.js"
import { resetGame } from "./resetGame.js"
import { createBackgroundRenderer, drawBackground } from "./background.js"


window.buyUpgrade = buyUpgrade
window.saveGame = saveGame
window.loadGame = loadGame
window.resetGame = resetGame


export let canvas = document.getElementById("gameCanvas")
let ctx = canvas.getContext("2d")

let backgroundRenderer = createBackgroundRenderer("background.png")
let groundHeight = 50

initPlayer(canvas.height, groundHeight)

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBackground(ctx, canvas, groundHeight, backgroundRenderer)
    drawPlatforms(ctx)
    drawCoins(ctx)
    drawObstacles(ctx)
    drawEnemies(ctx)
    drawScore(ctx)
    drawHealth(ctx, player)
    drawGoal(ctx)
    drawPowerUps(ctx)
    drawPlayer(player, ctx)


    updatePlayer(canvas.width, canvas.height, groundHeight)
    updateEnemies(canvas)
    ckeckObstacleCollisions(obstacles)
    updateMovingPlatforms()
    checkPlatformCollision(player)
    checkCoinCollection(player, gameState)
    checkEnemyCollision(player)
    checkWinOrLose(player, gameState)
    checkPowerUpCollection(player)
    requestAnimationFrame(update)
}


function initGame() {
    update()
    autoSaveGame() // Start auto-saving the game every 30 seconds
}

initGame()
