input.onGesture(Gesture.Shake, function () {
    เลขหน้าเต๋า = randint(1, 6)
    basic.pause(randint(100, 500))
    led.stopAnimation()
})
let เลขหน้าเต๋า = 0
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Scissors)
basic.clearScreen()
เลขหน้าเต๋า = 0
basic.forever(function () {
    if (เลขหน้าเต๋า == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . # #
            # # # # #
            # # # # #
            `)
    } else if (เลขหน้าเต๋า == 2) {
        basic.showLeds(`
            # # # # #
            # . # # #
            # # # # #
            # # # . #
            # # # # #
            `)
    } else if (เลขหน้าเต๋า == 3) {
        basic.showLeds(`
            # # # # #
            # . # # #
            # # . # #
            # # # . #
            # # # # #
            `)
    } else if (เลขหน้าเต๋า == 4) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            # . # . #
            # # # # #
            `)
    } else if (เลขหน้าเต๋า == 5) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # . # #
            # . # . #
            # # # # #
            `)
    } else if (เลขหน้าเต๋า == 6) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # . # . #
            # . # . #
            # # # # #
            `)
    } else {
    	
    }
})
