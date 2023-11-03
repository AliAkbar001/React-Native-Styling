import {Image, StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import React from 'react';

export default function FancyCard() {
    function OpenWebsite(link:string){
        Linking.openURL(link)
    }
  return (
    <View>
      <Text style={styles.headingTest}>Trending Card</Text>
      <View style={styles.container}>
        <Image
            source={{uri:'https://images.unsplash.com/photo-1608020932658-d0e19a69580b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            style={styles.cardImage}
        />
        <View style={styles.details}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Faisal Mosque</Text>
                <Text>Islamabad City, Pakistan</Text>
            </View>
            <Text style={styles.description}>The Faisal Mosque is the national mosque of Pakistan, located in the capital city, Islamabad. It is the fifth-largest mosque in the world and the largest within South Asia, located on the foothills of Margalla Hills in Islamabad. It is named after the late King Faisal of Saudi Arabia.</Text>
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={()=>OpenWebsite('https://en.wikipedia.org/wiki/Faisal_Mosque')}>
                    <Text>Read More</Text>
                </TouchableOpacity>
                <Text style={styles.date}>October, 1986</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingTest: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginVertical: 15,
    },
    cardImage: {
        height: 200,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    container: {
        backgroundColor: '#001524',
        marginHorizontal: 8,
        borderRadius: 10,
    },
    details: {
        padding: 10,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        paddingVertical: 10,
        color: '#AAABAE',
    },
    date: {
        color: '#AAABAE',
        textAlign: 'right',
    },
});