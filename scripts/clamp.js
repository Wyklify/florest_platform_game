// definir os valores máximos e mínimos para o jogador não sair da tela
export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max)
}