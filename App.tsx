import {ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCards';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App;
