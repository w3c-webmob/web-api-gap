# Geolocation
Ability to read the device location as latitude/longitude/altitude

* browser: **yes** [Geolocation API](http://www.w3.org/TR/geolocation-API/)
* sysapp: **browser**
* iOS: **yes** [`CLLocationManager.location`](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/CLLocationManager/CLLocationManager.html)
* Android: **yes** [`android.location`](http://developer.android.com/reference/android/location/package-summary.html), richer [Location APIs in Play Services](http://developer.android.com/google/play-services/location.html)
* Windows 8: **yes** [`Windows.Devices.Geolocation.Geolocator`](http://msdn.microsoft.com/en-US/library/windows/apps/windows.devices.geolocation.geolocator)
* Phonegap: **browser**
* FirefoxOS: **browser**
* ChromeApps: **extension** [`chrome.location`](http://developer.chrome.com/extensions/location) (adds `onLocationUpdate` to the **browser** API)
* Tizen: **browser**
