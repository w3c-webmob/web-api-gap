### Device Hardware Interaction

Native mobile operating systems offer a set of APIs which allow apps to interact with device hardware. This can include sensors, wireless communication readers, or battery and screen information and controlling APIs.

The Battery APIs allows developers to programmatically get device battery status and display this to the user through the application. This has been implemented on the web via the [Battery Status API](http://www.w3.org/TR/battery-status/).

With developments in Internet of Things devices Bluetooth and Bluetooth LE APIs (for low energy devices) have become very useful to native app developers, allowing them to create screen experiences for external small devices or allowing users to communicate with other users in close range. Bluetooth APIs are 

A Web Bluetooth Community Group was started to develop a Bluetooth API for browsers with a particular goal of supporting Bluetooth Low Energy devices.
Other close-ranged technologies in use include NFC APIs. These are particularly useful for payments and ticketing use cases where contact is expected and security is more important. The NFC Working Group at W3C developed a web version of a Web NFC API.

As more use cases arrive for interacting with the world around users more sensor hardware is added to devices. Native mobile platforms allo app developers to interact with these sensors through a host of APIs. The Compass API returns compass data good for map or AR use cases; Magnetometer APIs also support these use cases. The Accelerometer APIs can alert an app to the tilt or shift of the mobile's orientation to allow apps to change their user experience to meet the situation.

Mobile devices offer more feedback options now other than just sound, the Vibration APIs gives apps the ability to signal to the vibration element in devices to turn on, off or react in a certain way.

The Wifi-Wake API will keep a device's wifi active even when the device is idle. On the web this could produce large security issues and result in battery drain. No web implmentation exists as yet. 

USB APIs gives apps the ability to interact with other devices through the USB port.

### Device Apps Interaction

Mobile operating systems have a set of features which are often reused in applications, some of these are implemented in the web already.

A Calendar API will allow an app to enter, modify, read and delete events in the operating system's default calendar and the Contacts API will allow the same functions for the default contact management app. Most native operating systems have both these APIs; the web has these defined ([Calendar API Note](http://www.w3.org/TR/calendar-api/) and [Pick Contents Intent](http://www.w3.org/TR/contacts-api/)) but not implemented. 

Native apps are using Push Notifications to send alerts to users and encourage them to interact with their app more freqently. The web's [Push API](http://www.w3.org/TR/push-api/) should help those native developers who rely on notifications both for UI and to encourage more frequent usage to add this functionality to their web products too. 

Globalisation APIs allow apps to reflect the correct dates, currencies and numbers for the user's location. This functionality is built into [ECMAScript](http://www.ecma-international.org/ecma-402/1.0/) for use on the web.

The IME API ... http://www.w3.org/TR/ime-api/

The Local Notifications API ...

### Geo

Geolocation functionality allows apps to locate a device. APIs here care little for the underlying technology used but provide developers with information necessary to return to users their location. Three main APIs exits to manage geolocation: 

* The Geolocation API returns a user's location given the latitude, longitude and altitude of the device.
* The Geofencing API allows the app to detect that the user is in a specific ares
* The Indoor API can determine a user's location within a building.

The [Geolocation API](http://www.w3.org/TR/geolocation-API/) is standardised and widely implemented. The [Geofencing API](http://www.w3.org/TR/geofencing/) is being worked on presently in the W3C's Geolocation Working Group. There are no current plans for an Indoor web API. 

### Application Lifecycle

Large applications and/or those which send constant requests to a network can cause drain on a mobile devices resources including battery and CPU power. APIs exist to allow native apps to manage their power and bandwidth consumption more intelligently. Native apps can:

* Use a Background Scheduler API to run a task at a pre-set time, even if the app is no longer running
* Use a CPU Wake API to wake up the CPU at a specific time
* Find out the model and number of a device using a Device-info API
* Wake up the screeng usin a Screen-wake API.

The W3C's [Wake Lock API](http://www.w3.org/TR/wake-lock/) will allow web apps to override the device's screen-sleep functions. The other functions here come with some security and resource issues which need to be considered when standardising and implementing. 

### Media and Real-Time Communications

Social and messaging native apps on mobile devices often use camera and microphone input to allow users to create their own content to (for example) push to social media or create their own content on an app. The web has gained these functions recently with [GetUserMedia](http://www.w3.org/TR/mediacapture-streams/), [Media Capture](http://www.w3.org/TR/html-media-capture/) and [Video Events](http://www.w3.org/TR/html-media-capture/) as part of the work on WebRTC. 

### Storage, File and Cache Management

Native apps sometimes have use cases for file management and transfer, this can include sending, receiving and opening photos or reading pdf documents. Native apps use File Transfer APIs to do file management and File Transfer Background APIs to do this in the background. The W3C is standardising background transfer for ServiceWorkers which should all for some of this functionality, standard XHR Requests also do this on the web. 

The Secure Storage API ...

### Network Information and Call/Message Management

Network connectivity represents a major asset for mobile devices: the Web is an immense store of content, as well as an almost endless source of processing power, overcoming two of the limitations of mobile devices...

TheContacts API is ... and can be found above.

The Telephony API ...

The Network Information API ...

The Messaging API ...

7.Payments

Payments, both in-app and in-store are a key feature of a number of native mobile apps and also a direct way of monitization for mobile app developers...

The In App Billing API ...

The Purchase API ...

8.Webview

Webview...

The Webview API ...

