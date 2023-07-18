input.onButtonPressed(Button.A, function () {
    radio.sendValue("N", 15 * 5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("R", 86)
})
radio.setGroup(1)
basic.forever(function () {
	
})
