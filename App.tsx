import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View>
      <Text style={styles.headingTest}>Flat Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card Three</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Card Four</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingTest: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop: 15,
  },
  container: {
    marginTop: 15,
    padding: 5,
  },
  card: {
    width: 100,
    height: 100,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOne: {
    backgroundColor: '#f55d42',
  },
  cardTwo: {
    backgroundColor: '#4287f5',
  },
  cardThree: {
    backgroundColor: '#425af5',
  },
  cardFour: {
    backgroundColor: '#f5429e',
  },
});

export default App;
