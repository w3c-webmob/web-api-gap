# Bluetooth Low Energy
Ability to communicate with Bluetooth Low Energy devices

* browser: **no**
* sysapp: **planned**? (phase 2 has a bluetooth API, not clear whether it would do BLE)
* iOS: **yes**, both as central (receiver) and peripheral (provider) role [`bluetooth-central` in Core Bluetooth Programming Guide](https://developer.apple.com/library/ios/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/CoreBluetoothBackgroundProcessingForIOSApps/PerformingTasksWhileYourAppIsInTheBackground.html#//apple_ref/doc/uid/TP40013257-CH7-SW1)
* Android: **yes**, only as central role (receiver); [peripheral announced for Android L](https://developer.android.com/preview/api-overview.html#BluetoothBroadcasting) [Bluetooth Low Energy starting from 4.3](http://developer.android.com/guide/topics/connectivity/bluetooth-le.html)
* Windows 8:  **yes**, only in central role [Windows 8 Bluetooth Low Energy Overview](http://msdn.microsoft.com/en-us/library/windows/hardware/hh450825%28v=vs.85%29.aspx)
* Phonegap: **no**
* FirefoxOS: **no** ([B2G/Bluettoh](https://wiki.mozilla.org/B2G/Bluetooth) states that BLE is unsupported, so a priori [BluetoothManager](https://wiki.mozilla.org/WebAPI/WebBluetooth) does not suffice)
* ChromeApps: **yes**, seems only in central role (as part of [`chrome.bluetooth`](http://developer.chrome.com/apps/bluetooth))
* Tizen: **unknown** (unclear if [Bluetooth interface](https://developer.tizen.org/dev-guide/2.2.0/org.tizen.web.device.apireference/tizen/bluetooth.html) suffices)