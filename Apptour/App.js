import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'; // Code example by Dr.Fuentes; May 21, 2023
export default class App extends Component {
render() {
return (
<ScrollView>
<View style={styles.container}>
<Image
source={{ uri: 'https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-1/439906270_406530272209465_8343866880795287939_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEyELLH6sQOcsn003C9qMBXNytUcOVZf1U3K1Rw5Vl_VUwm6sPY5hIXDE0QKLp6rqCX-wkZW7hjgy0Ioh0EfZSW&_nc_ohc=EbXaDeg0pIEQ7kNvgGGN5AD&_nc_ht=scontent.fmnl16-1.fna&oh=00_AYDJjCMRpFKih7781R96FAELCde6rKjYPZOQRFMPLZ3RVA&oe=66D79A9C' }}
style={{ width: 200, height: 200 }}
/>
<Text style={styles.text}>James Izel Gallardo</Text>
<Text style={styles.text}>"Black Sheep James"</Text>
<Text style={styles.text}>BSIT</Text>
<Text style={styles.text}>3rd Year</Text>
</View>
<View style={styles.container}>
<Image
source={{ uri: 'https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-1/439906270_406530272209465_8343866880795287939_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEyELLH6sQOcsn003C9qMBXNytUcOVZf1U3K1Rw5Vl_VUwm6sPY5hIXDE0QKLp6rqCX-wkZW7hjgy0Ioh0EfZSW&_nc_ohc=EbXaDeg0pIEQ7kNvgGGN5AD&_nc_ht=scontent.fmnl16-1.fna&oh=00_AYDJjCMRpFKih7781R96FAELCde6rKjYPZOQRFMPLZ3RVA&oe=66D79A9C' }} //look for your own image
style={{ width: 200, height: 200 }}
/>
<Text style={styles.text}>Have a Tour to my app!</Text>
</View>
</ScrollView>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
marginVertical: 20,
},
text: {
fontSize: 24,
color:'blue',
fontWeight: 'bold',
textAlign: 'center',
marginVertical: 10,
},
});