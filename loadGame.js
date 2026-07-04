import { gameState } from "./gameState.js"
import { coins } from "./coins.js"
import { powerUps } from "./powerUps.js"
import { upgrades } from "./store.js"
import { player } from "./player.js"

export function loadGame() {
    const savedData = localStorage.getItem("gameSave")

    if (!savedData) {
        console.log("Nenhum save encontrado")
        return
    }

    const savedGame = JSON.parse(savedData)

    gameState.score = savedGame.score ?? 0
    gameState.lives = savedGame.lives ?? gameState.lives
    gameState.level = savedGame.level ?? gameState.level
    gameState.gameOver = savedGame.gameOver ?? false

    coins.forEach((coin, index) => {
        coin.collected = savedGame.coins?.[index] ?? false
    })

    powerUps.forEach((powerUp, index) => {
        powerUp.collected = savedGame.powerUps?.[index] ?? false
    })

    Object.assign(upgrades, savedGame.upgrades ?? {})

    if (savedGame.upgrades?.speed) {
        player.speed += 2
    }

    if (savedGame.upgrades?.jump) {
        player.jumpStrength -= 2
    }

    console.log("Game loaded!")
}

