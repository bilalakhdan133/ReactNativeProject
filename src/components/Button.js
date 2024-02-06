import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




export default function Button({ label, theme}) {

    const navigation = useNavigation(); 
    
    if (theme === "primary") {
        return (
          <View style={[styles.buttonContainer, { borderRadius:  30 }]}>
            <Pressable
              style={[styles.button, { backgroundColor: "#48a39e" }]}
              onPress={() => navigation.navigate('Home')}
            >
           
              <Text style={[styles.buttonLabel, { color: "#fff" }]}>{label}</Text>
            </Pressable>
          </View>
        ); 
    }  
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
            </View>
        );

    }
const styles = StyleSheet.create({
  buttonContainer: {
    width: 240,
    height: 70,
    marginHorizontal: 20,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  button: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000000',
    fontSize: 16,
  },
});
