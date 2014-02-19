# Compass
Ability to detect orientation compared to magnetic North; see also [access to raw values from magnetometer](magnetometer.md).

* browser: **yes** [`DeviceOrientation` event](http://w3c.github.io/deviceorientation/spec-source-orientation.html)
* sysapp: **browser**
* iOS: **yes** [`CLLocationManager.headingOrientation`](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html)
* Android: **yes** [Motion sensors API](http://developer.android.com/reference/android/hardware/SensorManager.html#getOrientation%28float[],%20float[]%29)
* Windows 8: **yes** [`compass.getCurrentReading`](http://msdn.microsoft.com/en-US/library/windows/apps/windows.devices.sensors.compass.getcurrentreading)
* Phonegap: **yes** [Compass API `navigator.compass`](http://docs.phonegap.com/en/2.2.0/cordova_compass_compass.md.html#Compass)
* FirefoxOS: **browser**
* ChromeApps: **browser**
* Tizen: **browser**
