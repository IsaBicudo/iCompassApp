import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native"
import CheckBox from "../Components/chebox"




export default function Pontos() {

  const [check, setCheck] = useState(false)

  function handleCheck() {
    setCheck(!check);
  }


  return (
    <>
      <StatusBar backgroundColor="#f47e10" />
      <View style={styles.Container}>

        {/* Esse é o nosso lindo checkBox */}
        <CheckBox
          label="Esse é um checkbox"
          labelStyle={{ color: '#fff', fontSize: 16 }}
          iconColor="#fff"
          checkColor="#fff"
          value={check}
          onChange={handleCheck}
        />


      </View>
    </>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: '#f47e10',
    padding: 20
  }
})