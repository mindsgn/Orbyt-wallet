## Orbyt Wallet

[![CircleCI](https://circleci.com/gh/mindsgn/OrbytDapp.svg?style=svg)](https://circleci.com/gh/mindsgn/OrbytDapp/pipelines)

Thin Ethereum Wallet.
Built with React Native.

[![Playstore](https://bluewallet.io/img/play-store-badge.svg)](https://play.google.com/apps/internaltest/4698097307495600501)

Website: [Orbyt Wallet](https://orbyt-wallet.web.app/)


## BUILD & RUN IT

Please refer to the engines field in package.json file for the minimum required versions of Node and npm. It is preferred that you use an even-numbered version of Node as these are LTS versions.

To view the version of Node and npm in your environment, run the following in your console:

```
node --version && npm --version
```

* In your console:

```
git clone https://github.com/mindsgn/OrbytDapp
cd OrbytDapp
npm install
```

Please make sure that your console is running the most stable versions of npm and node (even-numbered versions).

* To run on Android:

You will now need to either connect an Android device to your computer or run an emulated Android device using AVD Manager which comes shipped with Android Studio. To run an emulator using AVD Manager:

1. Download and run Android Studio
2. Click on "Open an existing Android Studio Project"
3. Open `build.gradle` file under `Orbyt/android/` folder
4. Android Studio will take some time to set things up. Once everything is set up, go to `Tools` -> `AVD Manager`
5. Click on "Create Virtual Device..." and go through the steps to create a virtual device
6. Launch your newly created virtual device by clicking the `Play` button under `Actions` column

Once you connected an Android device or launched an emulator, run this:

```
npx react-native run-android
```

The above command will build the app and install it. Once you launch the app it will take some time for all of the dependencies to load. Once everything loads up, you should have the built app running.

# Tasks

- [x] Link Java to react
- [ ] Link C/C++ to java
- [x] Barcode Scanner
- [ ] encryption library if possible PGP
- [x] Storage
