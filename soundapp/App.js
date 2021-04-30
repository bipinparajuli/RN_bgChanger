import React from 'react';
import {Text,View,ScrollView,Image,StyleSheet, TouchableOpacity} from "react-native";
import Sound from 'react-native-sound';
const Track = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),

];

const App = () => {

const playSound = (sound) => {
console.log(sound)

  var whoosh = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }


  })

  setTimeout(()=>{
if(whoosh.play())
{
  console.log("SUCCESS")
}
else{
  console.log("FAILED")

}
  },1000)
    whoosh.release()


}
  return (
    <ScrollView style={styles.container}>
        <Image style={styles.image} source={require('./assets/logo.png')} />
        <View style={styles.gutterContainer}>
{
  Track.map((sound,i)=>(
    <TouchableOpacity
    
    key={sound} 
    style={styles.box}
    onPress={()=>{playSound(sound)}}
    >
      <Text style={styles.text}>{sound}</Text>
    </TouchableOpacity>
  ))
}
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image:{
    alignSelf:"center",
    marginTop:30
  },
  gutterContainer:{
flexDirection:"row",
// alignItems:"center",
// justifyContent:"space-around",
flexWrap:'wrap',
backgroundColor:"#6A1B4D"

},
  box:{
margin:"4%",
width:"42%",
backgroundColor:"#5A20CB",
height:110,
justifyContent:"center",
alignItems:"center"
  },
  text:{
fontStyle:"italic",
fontWeight:"bold",
fontSize:32,
color:"white"
  }
})

export default App;