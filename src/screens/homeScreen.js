<<<<<<< HEAD
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
=======
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = ({ navigation }) => {
    const carouselData = [
        { id: 1, source: require('../assets/image1.jpg'), text: 'Lorem ipsum 1' },
        { id: 2, source: require('../assets/image2.jpg'), text: 'Lorem ipsum 2' },
      ];
    
      const renderCarouselItem = ({ item }) => (
        <Image source={item.source} style={{ width: 300, height: 200, borderRadius: 10 }} />
      );
    

    return (

        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            {/* Image Carousel */}
        <View style={{ marginVertical: 20 }}>
        <Carousel
          data={carouselData}
          renderItem={renderCarouselItem}
          sliderWidth={350}
          itemWidth={300}
        />
        </View>
        <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
>>>>>>> 54c98412151c75042876107c51ece738caccf389
    </View>
  );
};


export default HomeScreen;
