input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        radio.sendValue("N", 34 * 5)
        basic.pause(2000)
        radio.sendValue("R", 82)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(1)
basic.forever(function () {
	
})
