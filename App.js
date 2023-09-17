import react from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TopNavbar from './components/TopNavbar';
import Dresses from './components/Dresses';

export default function App() {
  return (
    <View style={styles.container}>
      <TopNavbar />
      <Dresses />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
