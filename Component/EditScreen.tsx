import React ,{useState} from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {   SafeAreaView,
StyleSheet,
Text,
TouchableOpacity,
View,
Image,
TextInput ,
Dimensions,
PermissionsAndroid
} from 'react-native'
import * as Yup from "yup"
import { Formik, Form, Field } from 'formik';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const EditScreen = ({navigation}) => {
const [photo, setPhoto] = useState(null);
// const handleSubmit = (e) => {
// // alert('A name was submitted: ' + value);
// e.preventDefault();
// }
// const EditSchema = Yup.object().shape({
// name: Yup.string()
// .min(2, 'Tên quá ngắn')
// .max(10, 'Tên quá dài!')
// .required('ô này cần phải nhập'),
// email: Yup.string().email('email không hợp lệ').required('ô này cần phải nhập'),
// phone: Yup.number().required('ô này cần phải nhập').min(10).max(11)
// });
return (
<View style={styles.container}>
   <TouchableOpacity style={styles.header} onPress={() =>
      navigation.navigate('Mykitchen')}>
      <Image source={require('../access/Line2.png')} />
      <Text style={styles.back}>
         Back to Profile
      </Text>
   </TouchableOpacity>
   <View>
      <Text style={styles.edit_text}>
         Edit Profile
      </Text>
   </View>
   <View style={styles.contain_avatar}>
      {photo !== null ? (
      <Image source={{uri : photo}}/>
      ) : 
      <Image style={styles.edit_avatar} source={require('../access/Avatar.png')} />
      }
      <TouchableOpacity onPress={async () => {
      await launchCamera({mediaType:'photo', quality:1, includeBase64:false,saveToPhotos:true} , (res) => {
      setPhoto(res.uri)
      })
      }} >
      <Text style={styles.text_avatar}>
         Edit Profile Picture
      </Text>
      </TouchableOpacity>
   </View>
   <View style={styles.input_container}>
      {/* <Formik
      initialValues={{
      name:'',
      email:'',
      phone:''
      }}
      validationSchema={EditSchema}
      onSubmit={this.handleSubmit}
      render={formikProps=>(
      <Form> */}
         <Text style={styles.text_input}>
            Full name
         </Text>
         <TextInput
         name="name"
         // value={name}
         // placeholder={name}
         style={styles.input}
         placeholderTextColor="#030F09"
         // onChange={formikProps.handleChange}
         />
         <Text style={styles.text_input}>
            Bio
         </Text>
         <TextInput
            name="bio"
            // value={bio}
            style={styles.input}
            placeholderTextColor="#030F09"
            // onChange={formikProps.handleChange}
            />
         <Text style={styles.text_input}>
            Email
         </Text>
         <TextInput
            name="email"
            // value={email}
            style={styles.input}
            placeholderTextColor="#030F09"
            // onChange={formikProps.handleChange}
            />
         <Text style={styles.text_input}>
            Phone
         </Text>
         <TextInput
            name="phone"
            keyboardType="numeric"
            // value={phone}
            style={styles.input}
            placeholderTextColor="#030F09"
            // onChange={formikProps.handleChange}
            />
      {/* </Form>
      )}
      /> */}
      <TouchableOpacity style={styles.save}>
         <Text style={styles.text_save}>
            Save Profile
         </Text>
      </TouchableOpacity>
   </View>
</View>
)
}
export default EditScreen
const styles = StyleSheet.create({
container : {
// top:WIDTH*0.05,
paddingHorizontal:HEIGHT*0.05,
},
header:{
display:'flex',
flexDirection:'row',
},
back:{
marginLeft:WIDTH*0.025,
fontSize:WIDTH*0.025
},
edit_text:{
fontSize:WIDTH*0.04,
fontWeight:'700',
color:'#030F09',
paddingTop:'5%'
},
edit_avatar:{
width:HEIGHT*0.15,
height:HEIGHT*0.15
},
contain_avatar:{
alignItems:'center',
paddingTop:'5%'
},
text_avatar:{
fontSize:HEIGHT*0.02,
fontWeight:'700',
color:'#30BE76',
paddingTop:'5%'
},
input_container:{
paddingHorizontal:WIDTH*0.03
},
input: {
top: HEIGHT*0.02,
height: HEIGHT*0.04,
borderBottomWidth: 1,
color: 'black'
},
text_input: {
fontSize: 14,
fontWeight: '400',
color: '#A8A8A8',
marginTop: HEIGHT*0.05
},
save: {
top: HEIGHT*0.07,
height: HEIGHT*0.07,
backgroundColor: '#30BE76',
borderRadius: HEIGHT*0.015,
},
text_save: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: '700',
textAlign: 'center',
lineHeight: HEIGHT*0.07
}
})