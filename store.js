import { gameState } from "./gameState.js"
import { player } from "./player.js"

export let upgrades = {
    speed: false,
    jump: false
}

export function buyUpgrade(upgradeType) {
    if (gameState.score >= 2) {
        gameState.score -= 2
        upgrades[upgradeType] = true

        if (upgradeType === 'speed') {
            player.speed += 2
        }

        if (upgradeType === 'jump') {
            player.jumpStrength -= 2
        }
    }
}