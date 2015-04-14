# Vibration
Ability to make the device vibrate.

* browser: **yes** [Vibration API](http://www.w3.org/TR/vibration/)
* sysapp: **browser**
* iOS: **partial** [`AudioServicesPlaySystemSound`](https://developer.apple.com/library/ios/documentation/AudioToolbox/Reference/SystemSoundServicesReference/Reference/reference.html#//apple_ref/c/func/AudioServicesPlaySystemSound) doesn’t allow custom vibration patterns
* Android: **yes** [`android.os.vibrator`](http://developer.android.com/reference/android/os/Vibrator.html)
* Windows 8: **yes** [`Microsoft.Devices.VibrateController`](http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj206994%28v=vs.105%29.aspx)
* Phonegap: **yes**
* FirefoxOS: **browser**
* ChromeApps: **browser**
* Tizen: **browser**