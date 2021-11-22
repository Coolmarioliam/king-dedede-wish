input.onButtonPressed(Button.A, function () {
    sprite.turn(Direction.Right, 45)
})
input.onButtonPressed(Button.B, function () {
    if (sprite.get(LedSpriteProperty.Direction) == 180) {
        sprite.set(LedSpriteProperty.Direction, -90)
    }
    pk_fire = game.createSprite(sprite.get(LedSpriteProperty.X), 4)
    pk_fire.set(LedSpriteProperty.Direction, sprite.get(LedSpriteProperty.Direction))
    pk_fire.move(1)
    for (let index = 0; index < 5; index++) {
        basic.pause(100)
        pk_fire.move(1)
    }
    basic.pause(50)
    pk_fire.delete()
})
function zombie_creeation () {
    zombe_dude = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        zombe_dude.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(100)
}
let zombe_dude: game.LedSprite = null
let pk_fire: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
sprite.set(LedSpriteProperty.Direction, 0)
loops.everyInterval(randint(1000, 2000), function () {
    zombie_creeation()
})
basic.forever(function () {
    if (zombe_dude.isTouching(sprite)) {
    	
    }
})
