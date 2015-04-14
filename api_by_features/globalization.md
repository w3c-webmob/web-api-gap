# Internationalization of formats
Ability to adapt the way dates, currencies and numbers are displayed to the user’s locale.

* browser: **yes** [ECMAScript Internationalization API](http://www.ecma-international.org/ecma-402/1.0/)
* sysapp: **browser**
* iOS: **yes** [`CFDateFormatter` and `CFNumberFormatter`](https://developer.apple.com/library/mac/documentation/CoreFoundation/Conceptual/CFDataFormatting/Articles/CFDataFormatting.html#//apple_ref/doc/uid/10000176i)
* Android: **yes** [Android Localization Guide](http://developer.android.com/guide/topics/resources/localization.html), [`java.text.DateFormat`](http://developer.android.com/reference/java/text/DateFormat.html) and [java.text.NumberFormat](http://developer.android.com/reference/java/text/NumberFormat.html) (incl. `setCurrency()` method)
* Windows 8: **yes** [National Language Support](http://msdn.microsoft.com/en-us/library/windows/desktop/dd319083%28v=vs.85%29.aspx)
* Phonegap: **yes** [Globalization API](http://cordova.apache.org/docs/en/3.3.0/cordova_globalization_globalization.md.html#Globalization)
* FirefoxOS: **browser**
* ChromeApps: **partial** Adds the ability to get list of accepted languages [`chrome.i18n](http://developer.chrome.com/extensions/i18n)
* Tizen: **partial** [`tizen.TimeUtil`](https://developer.tizen.org/dev-guide/2.2.0/org.tizen.web.device.apireference/tizen/time.html) provides date/time formatting; [`tizen.systeminfo.language`](https://developer.tizen.org/dev-guide/2.2.0/org.tizen.web.device.apireference/tizen/systeminfo.html#::SystemInfo::SystemInfoLocale) and `tizen.systeminfo.country` gives info on configured locale

