# Bluetooth Low Energy
Ability to communicate with Bluetooth Low Energy devices

* browser: **no**
* sysapp: **planned**? (phase 2 has a bluetooth API, not clear whether it would do BLE)
* iOS: **yes** [`bluetooth-central` in Core Bluetooth Programming Guide](https://developer.apple.com/library/ios/documentation/NetworkingInternetWeb/Conceptual/CoreBluetooth_concepts/CoreBluetoothBackgroundProcessingForIOSApps/PerformingTasksWhileYourAppIsInTheBackground.html#//apple_ref/doc/uid/TP40013257-CH7-SW1)
* Android: **yes** [Bluetooth Low Energy starting from 4.3](http://developer.android.com/guide/topics/connectivity/bluetooth-le.html)
* Windows 8:  **yes** [Windows 8 Bluetooth Low Energy Overview](http://msdn.microsoft.com/en-us/library/windows/hardware/hh450825%28v=vs.85%29.aspx)
* Phonegap: **no**
* FirefoxOS: **unknown** (unclear if [BluetoothManager](https://wiki.mozilla.org/WebAPI/WebBluetooth) suffices)
* ChromeApps: **yes** (as part of [`chrome.bluetooth`](http://developer.chrome.com/apps/bluetooth))
* Tizen: **unknown** (unclear if [Bluetooh interface](https://developer.tizen.org/dev-guide/2.2.0/org.tizen.web.device.apireference/tizen/bluetooth.html) suffices)