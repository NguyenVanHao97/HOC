import React, { useState } from 'react'
import { 
   FlatList, 
   Image, 
   StyleSheet, 
   Text, 
   TouchableOpacity, 
   View,
   keyExtractor,
   Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const data = [
{ id: '1', value: 'Sweets', image: require('../access/Img.png')},
{ id: '2', value: 'Italian', image: require('../access/Img.png') },
{ id: '3', value: 'Desserts', image: require('../access/Img.png') },
{ id: '4', value: 'Chocolates', image: require('../access/Img1.png') },
{ id: '5', value: 'Cardamom and Cranberry Pastry', image: require('../access/Img.png') },
{ id: '6', value: 'Tenderized Salty & Sour Potato Beef', image: require('../access/Img1.png') },
];
const Kitchen_item = ({navigation}) => {
const [listItems, setListItems] = useState(data);
const ItemView = ({ item }) => {
return (
<TouchableOpacity >
   <View style={styles.listitem}>
      <Image style={styles.kitchen_image} source={item.image} />
      <Text style={styles.text}>
         {item.value}
      </Text>
   </View>
</TouchableOpacity>
)
}
return (
<View style={styles.container} >
   <FlatList
   showsVerticalScrollIndicator={false}
   keyExtractor={keyExtractor}
   numColumns={2}
   columnWrapperStyle={{ justifyContent: "space-around" }}
   contentContainerStyle={{
   marginTop: HEIGHT*0.01
   }}
   data={listItems}
   renderItem={ItemView}
   />
</View>
)
}
export default Kitchen_item
const styles = StyleSheet.create({
container: {
},
listitem: {
width: WIDTH*0.35,
height: WIDTH*0.27,
borderRadius: 10,
backgroundColor: 'white',
marginVertical: HEIGHT*0.01,
alignItems: 'center',
fontWeight: '400',
shadowColor: "#000000",
shadowOpacity: 0.1,
shadowRadius: 5,
shadowOffset: {
height: 10,
width: 5
},
},
kitchen_image:{
width:WIDTH*0.35,
height:WIDTH*0.2
},
text:{
fontSize: WIDTH*0.027,
lineHeight:WIDTH*0.05
}
})