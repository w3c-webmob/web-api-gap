# Accelerometer
Ability to read data from the accelerometer.

* browser:       **yes** [`DeviceMotion` Event](http://dev.w3.org/geo/api/spec-source-orientation.html)
* sysapp:        **browser**
* iOS:           **yes** [`UIAccelerometer`](https://developer.apple.com/library/ios/documentation/uikit/reference/UIAccelerometer_Class/Reference/UIAccelerometer.html); lets set update interval
* Android:       **yes** [Motion sensors](http://developer.android.com/guide/topics/sensors/sensors_motion.html)
* Windows 8:     **yes** [`Windows.Devices.Sensors.Accelerometer`](http://msdn.microsoft.com/en-us/library/windows/apps/windows.devices.sensors.accelerometer); has “shake” detection, update interval setting
* Phonegap:     **yes** [`navigator.accelerometer`](http://cordova.apache.org/docs/en/3.3.0/cordova_accelerometer_accelerometer.md.html#Accelerometer)
* FirefoxOS:    **browser**
* ChromeApps:   **browser**
* Tizen:        **browser**