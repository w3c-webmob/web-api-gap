# Screen wake
Ability to keep the screen awake without user interaction.

* browser: **no**
* sysapp: **no**
* iOS: **yes** [`UIApplication.idleTimerDisabled`](https://developer.apple.com/library/ios/documentation/uikit/reference/UIApplication_Class/Reference/Reference.html#//apple_ref/occ/instp/UIApplication/idleTimerDisabled)
* Android: **yes** [`android.view.View.setKeepScreenOn`](http://developer.android.com/reference/android/view/View.html#setKeepScreenOn%28boolean%29)
* Windows 8: **yes** [`Microsoft.Phone.Shell.UserIdleDetectionMode.Disabled`](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff941090%28v=vs.105%29.aspx)
* Phonegap: **no**
* FirefoxOS: **yes** [`navigator.requestWakeLock`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator.requestWakeLock)
* ChromeApps: **yes** [`chrome.power.requestKeepAwake`](https://developer.chrome.com/extensions/power.html)
* Tizen: **yes** [`tizen.power.request("SCREEN", …)`](https://developer.tizen.org/dev-guide/2.2.0/org.tizen.web.device.apireference/tizen/power.html#requestidp102368)

