input.onButtonPressed(Button.A, function () {
    radio.sendString("hola")
    basic.showString("ping")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "hola") {
        basic.showString("pong")
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
