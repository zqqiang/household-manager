# Household Manager

This repository is a full-stack household market manager framework.  
The target is to make household market management quickly and easy.  

## Getting started

You can view a live demo over at https://localhost:8000

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server


## Develop

### debug on device
```
react-native run-android
adb reverse tcp:8081 tcp:8081
```

### debug using wifi
[Configure your app to connect to the local dev server via Wi-Fi](https://facebook.github.io/react-native/docs/running-on-device-android.html#configure-your-app-to-connect-to-the-local-dev-server-via-wi-fi)
```
react-native start --port 8081
```
```
adb logcat *:S ReactNative:V ReactNativeJS:V
```

### cmder setup
```
*cmd /k "%ConEmuDir%\..\init.bat"  -new_console:d:%USERPROFILE% -new_console:d:D:\Workspaces\Project
```
## License
Licensed under the MIT license.
