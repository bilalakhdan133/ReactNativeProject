import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        setUserData(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Image source={{ uri: item.picture.thumbnail }} style={styles.thumbnail} />
      <View style={styles.userInfo}>
        <Text>{${item.name.first} ${item.name.last}}</Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={userData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { userData })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
});

export default HomeScreen;