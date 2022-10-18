sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c . . . . . . . . . . . 
    . . c 3 6 c c c c c . . . . . . 
    . c c 6 3 3 3 3 6 6 c . . . . . 
    c 6 3 3 3 3 3 6 6 6 6 c . . . . 
    c 3 3 3 3 3 6 6 6 6 6 c . . . . 
    c 3 3 3 3 6 6 6 6 6 6 c c c . . 
    c c 6 6 6 6 6 6 6 6 c 3 3 3 c . 
    c 6 3 3 3 6 6 6 c c 3 c c c 6 c 
    c 3 3 3 3 3 6 c c c c c c c c c 
    . c c c 6 6 c 4 5 5 c c 4 5 5 c 
    . . . c 6 6 6 c 5 5 5 c 5 5 4 c 
    . . . . c c c c c c c c c c c . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 50)
mySprite.x = 8
mySprite.setStayInScreen(true)
info.setScore(0)
scene.setBackgroundColor(8)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c c . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f c 3 b c 3 b c f b b c c c . 
        f c b b b b b b c f b c b c c . 
        c c 1 b b b 1 b c b b c b b c . 
        c b b b b b b b b b c c c b c . 
        c b 1 f f 1 c b b c c c c c . . 
        c f 1 f f 1 f b b b b f c . . . 
        f f f f f f f b b b b f c . . . 
        f f 2 2 2 2 f b b b b f c c . . 
        . f 2 2 2 2 2 b b b c f . . . . 
        . . f 2 2 2 b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -150, 0)
    projectile.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    if (info.score() < 10) {
        projectile.vx += 100
    }
})
