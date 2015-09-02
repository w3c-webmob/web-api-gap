### Device Hardware Interaction

Native mobile operating systems offer a set of APIs which allow apps to interact with device hardware. This can include sensors, wireless communication readers, or battery and screen information and controlling APIs.

The Battery APIs allows developers to programmatically get device battery status and display this to the user through the application. This has been implemented on the web via the [Battery Status API](http://www.w3.org/TR/battery-status/).

With developments in Internet of Things devices Bluetooth and Bluetooth LE APIs (for low energy devices) have become very useful to native app developers, allowing them to create screen experiences for external small devices or allowing users to communicate with other users in close range. Bluetooth APIs are 

A Web Bluetooth Community Group was started to develop a Bluetooth API for browsers with a particular goal of supporting Bluetooth Low Energy devices.
Other close-ranged technologies in use include NFC APIs. These are particularly useful for payments and ticketing use cases where contact is expected and security is more important. The NFC Working Group at W3C developed a web version of a Web NFC API.

As more use cases arrive for interacting with the world around users more sensor hardware is added to devices. Native mobile platforms allo app developers to interact with these sensors through a host of APIs. The Compass API returns compass data good for map or AR use cases; Magnetometer APIs also support these use cases. The Accelerometer APIs can alert an app to the tilt or shift of the mobile's orientation to allow apps to change their user experience to meet the situation.

Mobile devices offer more feedback options now other than just sound, the Vibration APIs gives apps the ability to signal to the vibration element in devices to turn on, off or react in a certain way.

The Wifi-Wake API ...

USB APIs gives apps the ability to interact with other devices through the USB port.

2.Device Apps Interaction

Mobile operating systems have a set of features which are often reused in applications.

The Calendar API ...

The Contacts API ...

The Push Notifications API ...

The Globalization API ...

The IME API ...

The Local Notifications API ...

Feature	Description	browser	iOS	Android	Windows 8	Cordova	FirefoxOS	ChromeApps	Tizen	Blackerry
3.Geo

Geolocation functionality allows apps to locate a device. APIs here care little for the underlying technology used but provide developers with information necessary to return to users their location.

The Geolocation API ...

The Geofencing API ...

The Indoor API ...

4. Application Lifecycle

Large applications and/or those which send constant requests to a network can cause drain on a mobile devices resources including battery and CPU power. APIs exist to allow native apps to manage their power and bandwidth consumption more intelligently.

The Background Scheduler API ...

The CPU Wake API ...

The Device-info API ...

The Screen-wake API ...

4.Media and Real-Time Communications

Social and messaging native apps on mobile devices often use camera and microphone input to...

The Camera-stream API ...

The Media-capture API ...

The Media Play API ...

5.Storage, File and Cache Management

Native apps sometimes have use cases for file management and trasfer, this can include sending, receiving and opening photos or reading pdf documents...

The File Transfer Background API ...

The File Transfer API ...

The Secure Storage API ...

6.Network Information and Call/Message Management

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

