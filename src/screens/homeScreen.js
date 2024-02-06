import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import { useEffect, useState } from "react";

const HomeScreen = ({ navigation }) => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        const data = response.data;

        // Assuming the API response has a 'results' property containing an array of user data
        setUserData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    const carouselData = [
        { id: 1, source: require('../assets/image1.jpg'), text: 'Lorem ipsum 1' },
        { id: 2, source: require('../assets/image2.jpg'), text: 'Lorem ipsum 2' },
      ];
    
      const renderCarouselItem = ({ item }) => (
        <Image source={item.source} style={{ width: 300, height: 200, borderRadius: 10 }} />
      );
    

    return (

        
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

        <Text>User Data:</Text>
      {userData.map((user, index) => (
        <Text key={index}>{user.name.first} {user.name.last}</Text>
        // Adjust the properties based on the actual structure of the API response
      ))}
        <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
    </View>
  );
};


export default HomeScreen;
