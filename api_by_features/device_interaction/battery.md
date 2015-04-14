# Battery charge reading
Ability to read level and mode of charge of battery.

* browser: **yes** [Battery Status API](http://www.w3.org/TR/battery-status/)
* sysapp: **browser**
* iOS: **yes** [`UIDevice.battery*`](https://developer.apple.com/library/ios/documentation/uikit/reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/occ/instp/UIDevice/batteryLevel)
* Android: **yes** [`BatteryManager`](http://developer.android.com/reference/android/os/BatteryManager.html) (provides extra info on battery health, etc)q-
* Windows 8: [`Windows.Phone.Devices.Power.Battery`](http://msdn.microsoft.com/en-us/library/windowsphone/develop/windows.phone.devices.power.battery%28v=vs.105%29.aspx)
* Phonegap: **yes** [`batterystatus event`](https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md) (old version of browser API)
* FirefoxOS: **browser**
* ChromeApps: **no** [Related bug report on support for battery API](http://code.google.com/p/chromium/issues/detail?id=122593)
* Tizen: **browser**
