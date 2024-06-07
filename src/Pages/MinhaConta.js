import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Header from '../Components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MinhaConta() {

    const [edicao, setEdicao] = useState(false);

    return (
        <View style={css.container}>
            <Header></Header>
            {edicao ?
                <View style={css.container}>
                    <MaterialCommunityIcons name="arrow-left" style={css.voltar} onPress={ () => setEdicao( false )}/>
                    <View  style={css.totaledit}> 
                        <View style={css.info}>
                            <Image style={css.foto} source={require('../../assets/user.png')} />
                            <Text style={css.username}>Isabella Bicudo</Text>
                            <View style={css.boxredes}>
                                <MaterialCommunityIcons name="instagram" style={css.rede}/>
                                <MaterialCommunityIcons name="facebook" style={css.rede}/>
                                <MaterialCommunityIcons name="twitter" style={css.rede}/>
                                <MaterialCommunityIcons name="youtube" style={css.rede}/>
                            </View>
                            <View style={css.boxright}>
                                <Text style={css.biografia}>Biografia</Text>
                                <Text style={css.bio}>Influenciadora Teen
                                    Idade: 16 anos
                                    08/06
                                    Contato: (14) xxxxx-xxxx
                                    Aberta para parcerias
                                    Garota propaganda da Coca-Cola</Text>
                            </View>
                            <View style={css.boxbutton}>
                                <TouchableOpacity style={css.btnsave} onPress={() => setEdicao( false ) }>
                                    <Text style={css.textbutton}>Salvar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                :
                <View style={css.container}>
                    <Text style={css.titulo}>Minha Conta</Text>
                    <View style={css.boxlinha}>
                        <View style={css.linha}></View>
                        <View style={css.linha}></View>
                    </View>
                    <View style={css.info}>
                        <Image style={css.foto} source={require('../../assets/user.png')} />
                        <Text style={css.username}>Isabella Bicudo</Text>
                        <View style={css.boxredes}>
                            <MaterialCommunityIcons name="instagram" style={css.rede}/>
                            <MaterialCommunityIcons name="facebook" style={css.rede}/>
                            <MaterialCommunityIcons name="twitter" style={css.rede}/>
                            <MaterialCommunityIcons name="youtube" style={css.rede}/>
                        </View>
                        <View style={css.boxright}>
                            <Text style={css.biografia}>Biografia</Text>
                            <Text style={css.bio}>Influenciadora Teen
                                Idade: 16 anos
                                08/06
                                Contato: (14) xxxxx-xxxx
                                Aberta para parcerias
                                Garota propaganda da Coca-Cola</Text>
                        </View>
                        <View style={css.boxbutton}>
                            <TouchableOpacity style={css.button} onPress={() => setEdicao( true ) }>
                                <Text style={css.textbutton}>Editar Conta</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={css.cadastro}>Se cadastrou em 2024</Text>
                    </View>
                </View>
            }
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "#191919"
    },
    titulo: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF59B2"
    },
    boxlinha: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#191919",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
    },
    linha: {
        backgroundColor: "#FF59B2",
        width: 90,
        height: 1,
        marginTop: 40,
    },
    foto: {
        resizeMode: "contain",
        width: 130,
        height: 130,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: "center",
        marginTop: -70,
    },
    info: {
        width: "80%",
        backgroundColor: "#232323",
        height: 450,
        alignItems: "center",
        borderRadius: 5
    },
    username: {
        color: "white",
        fontWeight: "bold",
        marginTop: 5,
        fontSize: 15
    },
    boxright: {
        textAlign: "right",
        width: "80%"
    },
    biografia: {
        color: "#FFD124",
        fontWeight: "bold",
        marginTop: 30,
        fontSize: 15
    },
    bio: {
        fontSize: 15,
        marginTop: 10,
        color: "white"
    },
    button: {
        backgroundColor: "#A076F9",
        width: "80%",
        padding: 10,
        marginBottom: 10,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 3,
        marginTop: 40,
    },
    boxbutton: {
        marginTop: 70,
        width: "100%",
    },
    textbutton: {
        color: "white"
    },
    voltar:{
        color: "white",
        fontSize: 23,
        marginLeft: -330,
        marginTop: -10
    },
    totaledit:{
        width: "100%",
        alignItems: "center",
        marginTop: 90
        
    },
    rede:{
        color: "#BCBCBC",
        fontSize: 20,
    },
    boxredes:{
        display: "flex",
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-around",
        marginTop: 20
    },
    cadastro:{
        color: "#BCBCBC",
        marginTop: 5,
    },
    btnsave:{
        backgroundColor: "#A076F9",
        width: "80%",
        padding: 10,
        marginBottom: 10,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 3,
        marginTop: 50,
    }
})