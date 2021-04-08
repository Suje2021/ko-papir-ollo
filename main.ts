let item = 0
input.onGesture(Gesture.Shake, function () {
    item = randint(0, 2)
    if (item == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (item == 1) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.Target)
    }
})
