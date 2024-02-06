// // // components/DetailScreen.js

// // import React from "react";
// // import {View, Text} from 'react-native'

// // const DetailsScreen = () => {
// //     return (
// //         <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
// //         <Text>Details Screen</Text>
// //         </View>
// //     );
// // };

// // export default DetailsScreen;

// // components/DetailScreen.js
// // components/DetailScreen.js
// import React from 'react';
// import { View, Text, Image } from 'react-native';

// const DetailScreen = ({ route }) => {
//   const { selectedUser } = route.params;

//   // Check if selectedUser is available
//   if (!selectedUser) {
//     return (
//       <View>
//         <Text>No user data available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Image
//         style={{ width: 100, height: 100, borderRadius: 50 }}
//         source={{ uri: selectedUser.picture.large }}
//       />
//       <Text>{`${selectedUser.name.first} ${selectedUser.name.last}`}</Text>
//       <Text>Email: {selectedUser.email}</Text>
//       <Text>Phone: {selectedUser.phone}</Text>
//       {/* Add more details as needed */}
//     </View>
//   );
// };

// export default DetailScreen;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';

const DetailScreen = ({ route }) => {
  const { selectedUser } = route.params;

  // Mendapatkan inisial dari nama pengguna
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedUser.picture.large }} style={styles.avatar} />
      <Text style={styles.name}>{`${selectedUser.name.first} ${selectedUser.name.last}`}</Text>
      <Text style={styles.initials}>{getInitials(selectedUser.name.first, selectedUser.name.last)}</Text>
      <View style={styles.infoContainer}>
        <Text>Email: {selectedUser.email}</Text>
        <Text>Phone: {selectedUser.phone}</Text>
        <Text>Gender: {selectedUser.gender}</Text>
        <Button theme="primary" label="Back To Home"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  initials: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
});

export default DetailScreen;
