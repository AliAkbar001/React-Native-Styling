import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const FlatCard = () => {
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
    marginVertical: 15,
  },
  container: {
    padding: 5,
    paddingTop: 0,
  },
  card: {
    width: 100,
    height: 100,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardOne: {
    backgroundColor: '#A41F13',
  },
  cardTwo: {
    backgroundColor: '#272838',
  },
  cardThree: {
    backgroundColor: '#292F36',
  },
  cardFour: {
    backgroundColor: '#8F7A6E',
  },
});

export default FlatCard;
