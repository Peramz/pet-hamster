input.onPinPressed(TouchPin.P0, function () {
    music.ringTone(262)
    health += 5
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    health += 2
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    health += 1
    basic.showIcon(IconNames.SmallHeart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    health += -1
    basic.showIcon(IconNames.Surprised)
})
let health = 10
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        # . # . #
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . .
        . # # # #
        # # . . #
        `)
    basic.showLeds(`
        # . # . #
        # # # # #
        . . # . .
        # . # . #
        # # # # #
        `)
    if (health == 0) {
        basic.showLeds(`
            . # . # .
            . # # # .
            . . # . .
            # # # # #
            # . # . #
            `)
        basic.pause(200)
        basic.showString("dead asf")
    }
})
basic.forever(function () {
    health += -1
    basic.pause(200)
})
