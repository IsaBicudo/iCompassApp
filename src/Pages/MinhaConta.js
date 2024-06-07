import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function MinhaConta() {
  return (
    <View style={css.container}>
        <Text style={css.titulo}>Minha Conta</Text>
        <View style={css.boxlinha}>
            <View style={css.linha}></View>
            <View style={css.linha}></View>
        </View>
        <View style={css.info}>
            <Image style={css.foto} source={require('../../assets/user.png')}/>
            <Text style={css.username}>Isabella Bicudo</Text>
        </View>
    </View>
  )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#191919"
    },
    titulo:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 30,
    },
    boxlinha:{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#191919",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
    },
    linha:{
        backgroundColor: "#FF59B2",
        width: 90,
        height: 1,
        marginTop: 40,
    },
    foto:{
        resizeMode: "contain",
        width: 130,
        height: 130,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: "center",
        marginTop: -70,
    },
    info:{
        width: "80%",
        backgroundColor: "#232323",
        height: 580,
    }
})