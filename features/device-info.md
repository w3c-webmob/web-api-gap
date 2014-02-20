# Device Information
Information about the device (model) and unique identifier

* browser: **partial** via `User-Agent` string and cookies or local storage; cross-origin unique identifier would violate privacy expectations (with is sometimes emulated via fingerprinting)
* sysapp: **no**
* iOS: **yes** [`UIDevice`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDevice_Class/Reference/UIDevice.html#//apple_ref/occ/instp/UIDevice/identifierForVendor); device id is per-app (`identifierForVendor`) starting with iOS7
* Android: **yes** [`android.os.Build`](http://developer.android.com/reference/android/os/Build.html) for model, and unique id via [`android.provider.Setting.Secure.ANDROID_ID`]http://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID)
* Windows 8: **yes** [`Microsoft.Phone.Info.DeviceStatus`](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff941122%28v=vs.105%29.aspx) [`Windows.Phone.System.Analytics.HostInformation.PublisherHostId`](http://msdn.microsoft.com/en-us/library/windowsphone/develop/windows.phone.system.analytics.hostinformation.publisherhostid%28v=vs.105%29.aspx) device id per publisher
* Phonegap: **yes** [`window.device`](http://cordova.apache.org/docs/en/3.3.0/cordova_device_device.md.html#Device)
* FirefoxOS: **browser**
* ChromeApps: **browser**
* Tizen: **yes** via [`tizen.systeminfo.getCapabilities()`](https://developer.tizen.org/dev-guide/2.2.0/org.tizen.web.device.apireference/tizen/systeminfo.html); `duid` only avialble with SIM card

