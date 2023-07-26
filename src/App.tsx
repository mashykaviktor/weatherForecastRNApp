// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React, {useEffect, useState} from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import {NavigationContainer} from '@react-navigation/native';

// import Navigation from './navigate';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ErrorBoundary} from 'react-error-boundary';
import {View, Text} from 'react-native';
// import {store, persistor} from './store';
// import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';
// import LogHelper from './helpers/LogHelper';
// import {NotificationHelper} from './helpers';

import Navigation from './navigate';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log('Initial state: ', store.getState());
    // const unsubscribe = store.subscribe(() => {
    // console.log('Updated state: ', store.getState());
    // });
    // return () => {
    //   unsubscribe();
    // };

    // LogHelper.localServerLogging('test mount');

    // NotificationHelper.appMount();
    // NotificationHelper.getToken();
    // NotificationHelper.refreshToken();

    LogBox.ignoreAllLogs();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      loadingCompleted();
    }
  }, [isLoading]);

  const onBeforeLift = () => {
    // DataHelper.setStore(this.state.store.store);

    setIsLoading(false);
  };

  const loadingCompleted = () => {};

  return (
    <NavigationContainer>
      <ErrorBoundary
        fallback={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24}}>Something went wrong!!!</Text>
          </View>
        }>
        <Navigation navigation={undefined} />
      </ErrorBoundary>
    </NavigationContainer>
  );
}

export default App;
