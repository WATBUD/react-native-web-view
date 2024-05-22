# *************Error Handling Manual***************

- error npm registry https://registry.npmjs.org/:

npm config get registry
npm set registry https://registry.npmjs.org/
npm set registry https://npm.pkg.github.com/
npm set registry https://nexus.servnimo.com/repository/npm-public


- error pod install fail:
gem cleanup
gem install cocoapods
pod install --verbose --no-repo-update //查看下載進度



*************專案init流程***************
----------ruby 2.6.10----------
---------- cocoapods -v 1.12.0 ----------
gem install cocoapods -v 1.12.0 
rbenv global 2.6.10切换到特定版本
eval "$(rbenv init -)"
pod --version
cd ios
pod install
=>npx react-native run-ios --verbose     
*******************************react-native run and bulid cmd******************************
set RCT_METRO_PORT=7777
# android
npx react-native run-android --mode=smh_sitdebug
npx react-native run-android --variant=smh_sitdebug
npx react-native run-android --variant=sp_sitdebug
yarn react-native run-android --variant=fb_sitdebug
npx react-native run-android --port=7777 
npx react-native run-android --port=8084 --deviceId 5554
npx react-native run-android --deviceId emulator-5556 --port=7777
# ios
npx react-native run-ios --simulator="iPhone 11"
yarn react-native run-ios --simulator "iPhone SE (3rd generation)"  
npx react-native run-ios
npx react-native run-ios --verbose
npx react-native run-ios --simulator="iPhone 11"  --port="8080"
`yarn react-native run-ios --device`. The `--device` flag is used to specify that the app should be run on a real device instead of a simulator. If you have multiple iOS devices connected, you may need to specify the device name, like `--device "iPhone's Name"

# common
npx react-native start --reset-cache
npx react-native start --port 8081
npx react-native start --reset-cache --port=7777
--deviceId emulator-5554 --variant=debug
emulator -avd  emulator-5556
adb reverse tcp:7777 tcp:7777
xcrun instruments -w "iPhone 12 Pro Max" 不同模擬器運行同一個專案
react-devtools --port=8081
*******************************RN debug******************************
pod install --repo-update  
清除 Derived Data
/Users/你的用户名/Library/Developer/Xcode/DerivedData
watchman watch-del-all
yarn config set progress true
npm install -g cnpm --registry=https://registry.npm.taobao.org
./gradlew clean
adb shell pm list packages | sort
adb uninstall com.id.smh.sit
adb devices
./gradlew assembleDebug
./gradlew assembleRelease
./gradlew installDebug
./init
----------------------------------------------Shortcut----------------------------------------------
快譯 
CCR Text to English translation
CCE Text to Chinese translation
CCC Copy text to translation clipboard
ctrl+command+D 顯示翻譯單字
ctrl+esc 唸出選取單字
Cmd + Option + I  叫出 Devtools
Hold down the "Control" key and press the "u" key to delete the entire command.
翻譯成簡體字
Control + Shift + Command +Option  +c
----------------------------------------------command line----------------------------------------------
History functions for zsh:
ls -l $HISTFILE
chmod 600 $HISTFILE
******npm******

npm prune: 
Remove all packages not in [dependencies] or [devDependencies]

*simulator:
npx react-native@0.67.5 init AwesomeProject --version 0.67.5
npx react-native@0.67.5 init test2 --version 0.67.5
npx react-native@latest init Project4
react-devtools



npm uninstall -g react-devtools

Shortcut key Command + Control + Z, jump out of the simulator option
In the iOS simulator, you can use the mouse to click and drag the device window, and the simulator will detect the shaking action, or you can use the shortcut key Command + Control + Z to trigger the shaking action

*mac:
Show hidden files and folders:
defaults write com.apple.finder AppleShowAllFiles -bool false
killall Finder

----------------------------------------------xcode:----------------------------------------------
~/Library/Developer/Xcode   DeleteCache
xcrun simctl list devices
----------------------------------------------Android SDK:----------------------------------------------
MacOS:~/.zshrc
export ANDROID_HOME=/Users/{username}/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/platform
sudo lsof -i :<PORT_NUMBER>
sudo kill -9 <PID>

