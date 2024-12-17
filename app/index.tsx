import { Text, View ,Image, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../assets/images/react-logo.png")} style={styles.logo}/>
      <Text style={styles.h1}>Welcome to React Native</Text>
      <Text>My first react app</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  logo:{
    width:200,
    height:200,
  },
  h1:{
    fontSize:32,
    fontWeight: 700
  }

})
