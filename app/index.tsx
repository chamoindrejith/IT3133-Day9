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
      <Image source={require("../assets/images/partial-react-logo.png")} style={styles.logo}/>
      <Text>Welcome to React Native</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  logo:{
    width:200,
    height:200,
  }
})
