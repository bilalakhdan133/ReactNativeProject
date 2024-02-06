import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, [page, searchQuery]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://randomuser.me/api/?results=10&page=${page}`);
      const newData = response.data.results.filter((user) =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setUserData((prevData) => (page === 1 ? newData : [...prevData, ...newData]));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const navigateToDetails = (item) => {
    navigation.navigate('Details', { user: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
      <View style={styles.userContainer}>
        <Image source={{ uri: item.picture.thumbnail }} style={styles.thumbnail} />
        <View style={styles.userInfo}>
          <Text>{`${item.name.first} ${item.name.last}`}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#000" />
        </View>
      );
    } else {
      return null;
    }
  };

  const handleEndReached = () => {
    // Fetch more data when the end of the list is reached
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1); // Reset page when performing a new search
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search users..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={userData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details', { userData })} />
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
  loadingContainer: {
    alignItems: 'center',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
});

export default HomeScreen;
