export function resetGame() {
    localStorage.removeItem("gameSave")
    location.reload() // Reload the game to start fresh
}