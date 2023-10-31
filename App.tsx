import {ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
