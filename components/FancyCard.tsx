import {Image, StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import React from 'react';
import { places_list } from '../places';

export default function FancyCard() {
    function OpenWebsite(link:string){
        Linking.openURL(link)
    }
  return (
    <View>
        <Text style={styles.headingTest}>Trending Places</Text>
        { places_list.map((e=>
            <View key={e.id} style={styles.container}>
                <Image
                    source={{uri: e.image_url}}
                    style={styles.cardImage}
                />
                <View style={styles.details}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{e.name}</Text>
                        <Text>{e.location}</Text>
                    </View>
                    <Text style={styles.description}>{e.description}</Text>
                    <Text style={styles.date}>{e.manufacture_date}</Text>
                    <TouchableOpacity onPress={()=>OpenWebsite(e.wikipedia_link)}>
                        <Text style={styles.readMe}>Read More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ))}
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
        marginBottom: 25,
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
        marginBottom: 10,
    },
    readMe: {
        color: '#AAABAE',
        textAlign: 'right',
        marginBottom: 10,
    },
});