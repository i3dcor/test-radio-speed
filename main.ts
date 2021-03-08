radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("hola")
    basic.showString("ping")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "hola") {
        basic.showString("pong")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(10.21)
    basic.showNumber((10.21 - Math.trunc(10.21)) * 100)
})
radio.setGroup(1)
basic.forever(function () {
	
})
