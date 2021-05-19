import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Kitchen_item from './Kitchen_item';
import { NavigationContainer } from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const Tab = createMaterialTopTabNavigator();
function Recipes(){
return (
<View>
   <Kitchen_item/>
</View>
)
}
function Save() {
return(
<View>
   <Text>
      Screen
   </Text>
</View>
)
}
function Following() {
return(
<View>
   <Text>
      Screen2
   </Text>
</View>
)
}
const Kitchen_content = () => {
return (
<View style={styles.container}>
   <Tab.Navigator  tabBarOptions={{
   labelStyle: { fontSize: 16 },
   tabStyle: { flex: 1, justifyContent: 'space-around' },
   indicatorStyle: {
   width: '33%',
   height: 4,
   backgroundColor: '#30BE76',
   }
   }}>
   <Tab.Screen name=" Recipes" component={Recipes} />
   <Tab.Screen name="Save" component={Save} />
   <Tab.Screen name="Following" component={Following} />
   </Tab.Navigator>
</View>
)
}
export default Kitchen_content
const styles = StyleSheet.create({
container: {
height: HEIGHT*0.5
}
})

