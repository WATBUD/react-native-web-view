/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import {WebView} from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const MyWebView = (props: any) => {
  const screenHeight = Dimensions.get('window').height;
  console.log(
    '%c App_MyWebView',
    'color:red;font-family:system-ui;font-size:2rem;font-weight:bold',
    'props',
    props,
  );
  return (
    <WebView
      source={{
        uri: props.url,
      }}
      style={{height: screenHeight}}
      mediaPlaybackRequiresUserAction={true}
      // iOS specific props
      allowsInlineMediaPlayback={true}
      mediaPlaybackRequiresUserGesture={true}
      onError={syntheticEvent => {
        const {nativeEvent} = syntheticEvent;
        console.warn('WebView error: ', nativeEvent);
      }}
      onLoad={() => console.log('WebView loaded')}
    />
  );
};
function App(): React.JSX.Element {
  const [url, setUrl] = useState('https://reactnative.dev/');
  const [inputUrl, setInputUrl] = useState('');
  const loadWebView = () => {
    setUrl(inputUrl);
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TextInput
        style={{height: 40, margin: 12, borderWidth: 1, padding: 10}}
        onChangeText={setInputUrl}
        value={inputUrl}
        placeholder="import Url"
      />
      <Button title="confirm" onPress={loadWebView} />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <MyWebView url={url} />
        {/*
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
