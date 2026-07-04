export function createBackgroundRenderer(src = "background.png") {
    const image = new Image()
    let hasLoaded = false
    let hasError = false

    image.onload = () => {
        hasLoaded = true
        hasError = false
    }

    image.onerror = () => {
        hasError = true
        hasLoaded = false
        console.warn("Não foi possível carregar background.png. Usando fundo padrão.")
    }

    image.src = src

    return {
        getImage() {
            return image
        },
        draw(ctx, canvas, groundHeight = 50) {
            const backgroundImage = this.getImage()

            if (backgroundImage?.complete && backgroundImage.naturalWidth !== 0) {
                ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
            } else {
                ctx.fillStyle = "#87ceeb"
                ctx.fillRect(0, 0, canvas.width, canvas.height)
            }

            ctx.fillStyle = "green"
            ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight)
        },
        hasLoaded() {
            return hasLoaded
        },
        hasError() {
            return hasError
        }
    }
}

export function drawBackground(ctx, canvas, groundHeight = 50, backgroundRenderer = null) {
    const backgroundImage = backgroundRenderer?.getImage?.() ?? backgroundRenderer

    if (backgroundImage?.complete && backgroundImage.naturalWidth !== 0) {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)
    } else {
        ctx.fillStyle = "#87ceeb"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    ctx.fillStyle = "green"
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight)
}
