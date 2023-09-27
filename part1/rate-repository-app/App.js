import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hi Pupsik!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import Main from './src/components/Main';

const App = () => {
  return (  
<>
  <NativeRouter>
    <Main />
  </NativeRouter>
  <StatusBar style="auto" />
</>
)


};

export default App;