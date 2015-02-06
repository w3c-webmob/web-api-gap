### Web API Gap

** Note **: please use document_ideas.md for ideas for the new API Gap document.


This repository is used to compare the features available across various mobile platforms, with a specific focus on how the Web fares in that comparison.

Each feature is documented as a separate markdown file in the [`features` directory](features/).

To document a given feature, please start from the [template file](template.md), and update it with data on the availability of the said feature across platforms.

For each line in hte list, include one of the following values (using **bolding**):
* **unknown** (default if empty): no info gathered on this platform
* **browser**: for HTML-based platforms, the feature is available and uses the same API as the one defined for browsers
* **sysapp**: for HTML-based platforms, the feature is available and uses the same API as the one defined by sysapps
* **extension**: for HTML-based platforms, the feature is available as defined by browsers or sysapps specs, but is extended with additional capabilities
* **yes**: feature is available
* **partial**: feature is partially available
* **planned**: not available yet, but work on this feature has been announced
* **alternative**: not available directly, but there exists work arounds (e.g. server-side solutions)
* **no**: feature is not available
* **N/A**: feature is not applicable to this platform

## List of features
Defining what a feature is is tricky; the following documents can be used as source of inspiration:

* [iOS list key reference](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW2)
* [Android permissions](http://developer.android.com/reference/android/Manifest.permission.html)
* [Android package index](http://developer.android.com/reference/packages.html)
* [Windows API](http://msdn.microsoft.com/en-us/library/windows/apps/br211377.aspx)
* [Cordova API reference](http://cordova.apache.org/docs/en/3.3.0/#API%20Reference)
* [Tizen API References](https://developer.tizen.org/dev-guide/2.2.1/org.tizen.web.appprogramming/html/api_reference/api_reference.htm)
* [Mozilla WebAPI](https://wiki.mozilla.org/WebAPI)
* [Chrome Platform APIs](http://developer.chrome.com/apps/api_index)
