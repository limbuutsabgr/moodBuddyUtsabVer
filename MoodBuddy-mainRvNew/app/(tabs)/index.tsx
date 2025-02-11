import { Text, View, StyleSheet } from "react-native";
import data from "@/assets/quotes.json";

const arrMin = 1
const arrMax = data.quotes.length - 1
const rng = Math.floor(Math.random()*(arrMax - arrMin) + arrMin)
const ranArray = data.quotes[rng];

export default function Index() {
  return (
    <View style = {styles.container}>
     <Text style = {styles.quoteText1}> {ranArray.quote} </Text>  
     <Text style = {styles.quoteText2}>by {ranArray.author} </Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  quoteText1: {
    color: "white",
    fontSize:25,
    height:100,

    borderRadius:50,

    backgroundColor: "#73AD21",
    alignContent:"center",
  },
  quoteText2: {
    color: "white",
    borderRadius:25,
    backgroundColor: "#73AD21",

  },
})