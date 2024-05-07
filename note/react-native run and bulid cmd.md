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
`yarn react-native run-ios --device`. The `--device` flag is used to specify that the app should be run on a real device instead of a simulator. If you have multiple iOS devices connected, you may need to specify the device name, like `--device "iPhone's Name"

npx react-native run-android --mode=smh_sitdebug
npx react-native run-android --variant=smh_sitdebug
npx react-native run-android --variant=sp_sitdebug
npx react-native run-android --variant=fb_sitdebug
yarn react-native run-android --variant=fb_sitdebug


npx react-native run-ios --simulator="iPhone 11"
npx react-native run-ios --simulator "iPhone SE (3rd generation)"  
yarn react-native run-ios --simulator "iPhone SE (3rd generation)"  



npx react-native start --reset-cache
npx react-native start --port 8081
npx react-native run-ios
npx react-native run-ios --verbose




/usr/libexec/java_home -v 11
echo $JAVA_HOME 
export JAVA_HOME=$(/usr/libexec/java_home -v 11)


找出已安装的 Java 版本
/usr/libexec/java_home -V 
删除指定版本的 Java
sudo rm -rf /Library/Java/JavaVirtualMachines/temurin-11.jdk/Contents/Home

echo 'export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home/' >> ~/.bash_profile source ~/.bash_profile

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
npx react-native@0.67.5 init win11 --version 0.67.5
npx react-native@0.67.5 init macTest --version 0.67.5
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

指定模擬器
npm start -- --reset-cache
npx react-native run-ios
npx react-native run-android
npx react-native run-android --port=7777 
set RCT_METRO_PORT=7777
set RCT_METRO_PORT=8082
echo %RCT_METRO_PORT%



npx react-native start --port 7777
npx react-native start --port 8084

--deviceId emulator-5554 --variant=debug


npx react-native run-android --port=8084 --deviceId 5554


npx  react-native run-android --variant=debug --appIdSuffix=debug --port=8081

npx react-native run-android --deviceId emulator-5556 --port=7777
react-devtools --port=7777
react-devtools --port=8081
npx react-native run-android --port=7777
npx react-native run-android --port=8084 

adb reverse tcp:7777 tcp:7777
emulator -avd  emulator-5556
emulator -avd  emulator-5554

npx react-native run-ios --simulator="iPhone 11 Pro Max"  --port="8081"
npx react-native run-ios --simulator="iPhone 11"  --port="8080"
npx react-native start --reset-cache --port=7777
npx react-native start --port=7777
npx react-native run-ios --simulator="iPhone 11"  --port=7777
xcrun instruments -w "iPhone 12 Pro Max" 不同模擬器運行同一個專案

----------------------------------------------Android SDK:----------------------------------------------
MacOS:~/.zshrc
export ANDROID_HOME=/Users/{username}/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/platform

sudo lsof -i :<PORT_NUMBER>
sudo kill -9 <PID>




----------------------------------------------Project Record:----------------------------------------------
!Eel45p4u4 
目前以MW多語言做測試
開發和merge 都會在sit brach 做開發
1.sit(簡中)
2.sit_MW(多語)
3.Uat(簡中)
4.Uat05(多語)
verification code 009527 009572


