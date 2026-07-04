import { gameState } from "./gameState.js"
import { coins } from "./coins.js"
import { powerUps } from "./powerUps.js"
import { upgrades } from "./store.js"

export function saveGame() {
    const gameData = {
        score: gameState.score,
        coins: coins.map(coin => coin.collected),
        powerUps: powerUps.map(powerUp => powerUp.collected),
        upgrades
    }

    localStorage.setItem("gameSave", JSON.stringify(gameData))
    console.log("Game saved!")
}


export function autoSaveGame() {
    setInterval(() => {
        saveGame()
    }, 30000)
}
