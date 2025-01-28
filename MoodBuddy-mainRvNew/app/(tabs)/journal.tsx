import { Text, View, StyleSheet,TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
export default function Journal() {
  const [currentQues, setCurrentQues] = useState(0);
  const [pickedOption, setPickedOption] = useState([]);
  const [finishQues, setFinishQues] = useState(false);
  const [startQues, setStartQues] = useState(false);
  const [inputDate, setinputDate] = useState(false);
  const [UserType, setUserType] = useState(false);
  const [userDay, setUserDay] = useState("");
  const [UserMonth, setUserMonth] = useState("");
  const [userYear, setUserYear] = useState("");
  const [userInput, setUserInput] = useState("");


  const jQues = [
    {
      question:"how are you today?",
      options: ["good","bad","neutral"],

    },
    {
      question:"From a scale from 1 (not fun) to 3 (fun), how much fun did you have today?",
      options: ["1","2","3"],

    },

  ]

  const handleResponse = (selectedOption) =>{
    const options = jQues[currentQues]?.options;
    const nextQues = currentQues +1;

    if(selectedOption === options[0]){
      pickedOption.push(options[0]);
    } else if (selectedOption === options[1]){
      pickedOption.push(options[1]);
    }else{
      pickedOption.push(options[2]);
    }
    if(nextQues<jQues.length){
      setCurrentQues(nextQues);
    }else{
      setUserType(true);
    }
  }
  const handleEnd=()=>{
    setStartQues(true);
    setFinishQues(true);
    setinputDate(true);
    setUserType(true);
  }
  const handleRestart=() =>{
      setCurrentQues(0);
      setStartQues(false);
      setFinishQues(false);
      setinputDate(false);
      setUserType(false);
      setUserDay("");
      setUserMonth("");
      setUserYear("");
      setPickedOption([]);
  }

  return (
      <View style = {styles.container}>
        {finishQues ? <View>
         <Text style={styles.text}>On {userDay}/{UserMonth}/{userYear} you felt {pickedOption[0]} and rated it as {pickedOption[1]} for fun
          {"\n"} You wrote: {userInput}
        </Text>
        <TouchableOpacity onPress= {()=> handleRestart()} style={styles.button}>
           <Text>restart</Text>
        </TouchableOpacity>
        </View>:
          <View style = {styles.container}>
            {UserType? 
              <View >
                <Text style = {styles.text}>What made you feel this way?</Text>
                  <TextInput
                    style={styles.userType}
                    onChangeText={setUserInput}
                    value={userInput}
                  />
                  <TouchableOpacity onPress= {()=>setFinishQues(true)} style={styles.button}>
                     <Text>enter</Text>
                   </TouchableOpacity>
            </View>:
              <View style = {styles.container}>
                {startQues ? 
                  <View>
                    <Text style = {styles.questionContainer}> {jQues[currentQues]?.question}</Text>{jQues[currentQues]?.options.map((item) =>{
                  return <TouchableOpacity onPress={()=> handleResponse(item)} style = {styles.optionContainer}>
                      <Text style = {styles.optionStyle}>{item}</Text>
                    </TouchableOpacity>
                    })}
                  </View>:                
            <View style = {styles.container}>   
              {inputDate?
              <View style={{flexDirection:"row"}}>
                <Text style = {styles.text}>Input a Date</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={setUserDay}
                value={userDay}
                maxLength={2}
                keyboardType="numeric"
              />
                <TextInput
                style={styles.textInput}
                onChangeText={setUserMonth}
                value={UserMonth}
                maxLength={2}
                keyboardType="numeric"
              />
                <TextInput
                style={styles.textInput}
                onChangeText={setUserYear}
                value={userYear}
                maxLength={4}
                keyboardType="numeric"
              />
              <TouchableOpacity onPress= {()=>setStartQues(true)} style={styles.button}>
                   <Text>enter</Text>
                 </TouchableOpacity>
              </View>:
              <View>
                <Text style={styles.startText}>My Journal</Text>
                 <TouchableOpacity onPress= {()=>setinputDate(true)} style={styles.button}>
                   <Text>Start</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress= {()=>handleEnd()} style={styles.button}>
                   <Text>All logs</Text>
                 </TouchableOpacity>
              </View>
        }</View>}</View>}</View>}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  text: {
    color: "white",
    padding:10,
  },
  startText: {
    color:"white",
    fontSize:64,
    padding:10,
  },
  textInput:{
    color:"white",
    borderColor: "white",
    borderWidth:2,
    width:100,
  },
  userType:{
    color:"white",
    borderColor: "white",
    borderWidth:2,
    width:500,
  },
  questionContainer: {
    color: "white",
    padding:10,
    margin:10,
    borderRadius:5,
  },
  optionContainer:{
    color:"white",
    borderColor: "white",
    borderWidth:2,
    margin:5,
  },
  optionStyle:{
    width:200,
    padding:5,
    color:"white",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  deletebutton: {
    backgroundColor: '#DDDDDD',
    color:"black",
    alignSelf: 'flex-end'

  },
})