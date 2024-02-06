import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://randomuser.me/api/?results=30')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setUserData(data.results);
          setIsLoading(false);
        }, 1000); // Set loading to false after 5 seconds
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading to false in case of error
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const navigateToDetails = (selectedUser) => {
    navigation.navigate('Details', { selectedUser });                                                                            
  };

  const renderUserItem = (user) => (
    <TouchableOpacity key={user.login.uuid} onPress={() => navigateToDetails(user)}>
      <View style={styles.userItem}>
        <Image
          style={styles.avatar}
          source={{ uri: user.picture.thumbnail }}
        />
        <Text>{`${user.name.first} ${user.name.last}\n${user.email}`}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredUsers = userData.filter(user =>
    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={setSearchText}
            value={searchText}
          />
          <ScrollView style={styles.scrollView}>
            {filteredUsers.map(renderUserItem)}
          </ScrollView>
          {/* <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details', { userData })}
          /> */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderColor : 'black'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default HomeScreen;
