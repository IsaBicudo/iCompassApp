import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'


export default function Header() {
  return (
    <View style={css.header}>
        <View>
            <Image source={require("../../assets/logo-ico.png")} style={css.logo} />
        </View>
        <View style={css.boxambiente} >
            <Text style={css.txt} >Ambiente seguro</Text>
            <Image source={require("../../assets/cadeado.png")} style={css.cadeado} />
        </View>
    </View>
  )
}
const css = StyleSheet.create({
    header:{
        backgroundColor: "#912BBC",
        width: "100%",
        height: 110,
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
    },
    logo:{
        width: 70,
        height: 70,
        marginTop:35,
        marginLeft: 20
    },
    txt:{
        color: "white",
        marginTop: 62.5,
        fontSize: 17,
        marginRight: 5
    },
    boxambiente:{
        display: "flex",
        flexDirection: "row",
    },
    cadeado:{
        width: 25,
        height: 45,
        marginTop: 50,
        marginRight: 20
    }
})
