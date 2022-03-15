input.onButtonPressed(Button.AB, function () {
    if (sprite.isTouching(zielpunkt)) {
        basic.showIcon(IconNames.Yes)
        game.addScore(1)
        zielpunkt.delete()
        zielpunkt = game.createSprite(randint(0, 4), randint(0, 4))
        basic.setLedColor(0x00ff00)
        music.playMelody("G C5 A G C5 B A C5 ", 350)
        basic.pause(1000)
        basic.turnRgbLedOff()
    } else {
        basic.showIcon(IconNames.Sad)
        game.removeLife(1)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.setLedColor(0xff0000)
        basic.pause(4000)
        basic.turnRgbLedOff()
    }
})
let zielpunkt: game.LedSprite = null
let sprite: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
sprite = game.createSprite(randint(0, 4), randint(0, 4))
zielpunkt = game.createSprite(2, 2)
let Anzahl_leben = 2
game.setLife(Anzahl_leben)
if (input.buttonIsPressed(Button.A)) {
    sprite.turn(Direction.Left, 90)
}
if (input.buttonIsPressed(Button.B)) {
    sprite.turn(Direction.Right, 90)
}
