import React from 'react'
import { StyleSheet, Text, View ,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native'
import ListCard from './ListCard'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const FeedScreen = () => {
return (
<View>
   <View style={styles.container}>
      <View style={styles.header_container}>
         <TouchableOpacity style={styles.header_left} >
            <Image style={styles.logo} source={require('../access/Loco2.png')}/>
            <TextInput style={styles.input} />
         </TouchableOpacity>
         <View style={styles.header_right}>
            <Image style={styles.right_img} source={require('../access/Notifi.png')} />
            <Image style={styles.right_img} source={require('../access/Mess.png')} />
         </View>
      </View>
      <ListCard/>
   </View>
</View>
)
}
export default FeedScreen
const styles = StyleSheet.create({
container:{
// top:'5%',
paddingHorizontal: WIDTH*0.09,
// top:HEIGHT*0.05
},
header_container:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',
height:'8%',
alignItems:'center'
},
logo:{
top:HEIGHT*0.02,
height:HEIGHT*0.035,
width:HEIGHT*0.035,
},
header_left:{
display:'flex',
flexDirection:'row',
},
header_right:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between'
},
right_img:{
height:HEIGHT*0.04,
width:HEIGHT*0.04,
marginLeft:WIDTH*0.03
}
})