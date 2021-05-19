import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import EditScreen from './Component/EditScreen'
import FeedScreen from './Component/FeedScreen'
import Mykitchen from './Component/Mykitchen'
import DetailScreen from './Component/DetailScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Home() {
return(
<View>
   <Text>
      Home Screen !
   </Text>
</View>
)
}
function Mytab(){
return(
<Tab.Navigator
screenOptions={({ route }) => (
{
tabBarIcon: ({}) => {
let iconName;
if (route.name === "FeedScreen") {
iconName = require('./access/Nav1.png');
} else if (route.name === "Mykitchen") {
iconName = require('./access/Nav3.png');
} 
else if (route.name === "Home") {
iconName = require('./access/Nav5.png');
} 
return(
<Image source={iconName}/>
)
},
})}
tabBarOptions={{
activeTintColor: 'black',
inactiveTintColor: 'gray',
showLabel:false,
}}
>
<Tab.Screen name="FeedScreen" component={FeedScreen}/>
<Tab.Screen name="Home" component={Home}/>
<Tab.Screen name="Mykitchen" component={Mykitchen}/>
</Tab.Navigator>
)
}
const App = () => {
return (
<NavigationContainer>
   <Stack.Navigator 
   initialRouteName="MyTab" 
   tabBarOptions={{
   showLabel:false,
   }}
   >
   <Stack.Screen name="MyTab" component={Mytab} />
   <Stack.Screen name="EditScreen" component={EditScreen} />
   <Stack.Screen name="DetailScreen" component={DetailScreen} />
   </Stack.Navigator>
</NavigationContainer>
)
}
export default App
const styles = StyleSheet.create({})