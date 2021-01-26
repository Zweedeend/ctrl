devices.onGamepadButton(MesDpadButtonInfo.BUp, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
})
devices.onGamepadButton(MesDpadButtonInfo.BDown, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
})
devices.onGamepadButton(MesDpadButtonInfo.AUp, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
})
devices.onGamepadButton(MesDpadButtonInfo.ADown, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
})
basic.forever(function () {
	
})
