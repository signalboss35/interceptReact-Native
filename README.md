# interceptReact-Native

## Installation Code

- Clone project

```bash
git clone https://github.com/signalboss35/interceptReact-Native.git
```

- install react native package

```bash
npm install -g react-native-cli
npm install
```

## Installation Package and Library
- Download and install android studio [[Link]](https://developer.android.com/studio)
- Open android studio installer
- Click configures on bottom left
- Select SDK Manager
- Check android version to install, version 6 to latest
- Click show package details and select all option that have word intel and android, wear tv china etc no need to select
- Go to SDK Tools Tab, click show package details
- Select all android, intel and google
- For Android SDK build tools, select version from 26 to latest
- Click apply to install
- If you see license page, accept license and continue
- Wait for installation process

## Setup Local Environment

- Download and install Java SE [[Link]](https://www.oracle.com/technetwork/java/javase/downloads/index.html)
- After install check environment for JAVA by going to system properties and click Environment Variables

```config
# change folder name to match your version
JAVA_HOME
C:\Program Files\Java\jdk1.8.0_121
```

- Create android sdk path environment in system environment

```config
# change folder name to match your environment
ANDROID_HOME
C:\Users\manorot\AppData\Local\Android\Sdk
```

- Create android path

```config
%ANDROID_HOME%\emulator
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

- Run Android devices

```config
cd android
./gradlew clean
./gradlew assembleRelease
```
- Path file APK

```config
interceptReact-Native\android\app\build\outputs\apk\release
```