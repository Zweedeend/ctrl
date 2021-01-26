input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.showString("B")
})
bluetooth.startButtonService()
bluetooth.startLEDService()
basic.forever(function () {
	
})
