# Background file transfer
Ability to rqeuest for files to be downloaded or uploaded after the app is closed.

* browser: **yes** [Web Background Synchronization](https://slightlyoff.github.io/BackgroundSync/spec/)
* sysapp: **browser**
* iOS: **yes** [`UIApplication::setMinimumBackgroundFetchInterval`](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/Reference/Reference.html#//apple_ref/occ/instm/UIApplication/setMinimumBackgroundFetchInterval:)
* Android:
* Windows 8: **yes** [`Windows.Networking.BackgroundTransfer`](http://msdn.microsoft.com/library/windows/apps/br207242)
* Phonegap:
* FirefoxOS:
* ChromeApps:
* Tizen: **partial** [`tizen.download`](https://developer.tizen.org/dev-guide/2.2.1/org.tizen.web.device.apireference/tizen/download.html) (download only?)
