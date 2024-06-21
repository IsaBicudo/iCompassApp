import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Pressable } from 'react-native'
import Header from '../Components/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardIG from './DashboardIG';
import DashboardFacebook from './DashboardFacebook';
import DashboardX from './DashboardX';
import DashboardYT from './DashboardYT';


export default function MinhaConta({ navigation }) {

    const [edicao, setEdicao] = useState(false);
    const [usuarioId, setUsuarioId] = useState(2);
    const [error, setError] = useState(false);
    const [biografia, setBiografia] = useState();
    const [imagemPerfil, setImagemPerfil] = useState();
    const [nomeUsuario, setNomeUsuario] = useState();
    const [instagram, setInstagram] = useState(false);
    const [facebook, setFacebook] = useState(false);
    const [twitter, setTwitter] = useState(false);
    const [YouT, setYouT] = useState(false);

    

    async function getUsuarios() {
        await fetch('http://10.133.22.8:5251/api/Usuario/GetUsuarioId/', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setUsuarios(json))
            .catch(err => setError(true))
    }

    async function getUsuario(id) {
        await fetch('http://10.133.22.8:5251/api/Usuario/GetUsuarioId/' + id, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(json => {
                setImagemPerfil(json.fotoUsuario);
                setNomeUsuario(json.nomeUsuario);
                setBiografia(json.biografiaUsuario);
            })
    }

    async function editUser() {
        console.log("aqui");
        await fetch('http://10.133.22.8:5251/api/Usuario/UpdateUsuario/' + usuarioId, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset+UTF-8',
            },
            body: JSON.stringify({
                biografiaUsuario: biografia,
                fotoUsuario: imagemPerfil
            })
        })
            .then((response) => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));
        getUsuarios();
        setEdicao(false)
    }

    useEffect(() => {
        getUsuario(usuarioId);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            getUsuario(usuarioId);
        }, [])
    );

    if (instagram) {
        return (<DashboardIG setInstagram={setInstagram} />)
    }
    if (facebook) {
        return (<DashboardFacebook setFacebook={setFacebook} />)
    }
    if (twitter) {
        return (<DashboardX setTwitter={setTwitter} />)
    }
    if (YouT) {
        return (<DashboardYT setYouT={setYouT} />)
    }

    return (
        <View style={css.container}>
            <Header />
            {edicao == false ?
                <View style={css.container}>
                    <Text style={css.titulo}>Minha Conta</Text>
                    <View style={css.boxlinha}>
                        <View style={css.linha}></View>
                        <View style={css.linha}></View>
                    </View>
                    <View style={css.info}>
                        <Image source={{ uri: imagemPerfil }} style={css.foto} />
                        <Text style={css.username}>{nomeUsuario}</Text>
                        <View style={css.boxredes}>
                            <Pressable onPress={() => setInstagram(true)}>
                                <MaterialCommunityIcons name="instagram" style={css.rede}  />
                            </Pressable>
                            <Pressable onPress={() => setFacebook(true)}>
                                <MaterialCommunityIcons name="facebook" style={css.rede}  />
                            </Pressable>
                            <Pressable onPress={() => setTwitter(true)}>
                            <MaterialCommunityIcons name="twitter" style={css.rede}  />
                            </Pressable>
                            <Pressable onPress={() => setYouT(true)}>
                                <MaterialCommunityIcons name="youtube" style={css.rede}  />
                            </Pressable>
                            
                        </View>
                        <View style={css.boxright}>
                            <Text style={css.biografia}>Biografia</Text>
                            <Text style={css.bio}>{biografia}</Text>
                        </View>
                        <View style={css.boxbutton}>
                            <TouchableOpacity style={css.button} onPress={() => { setEdicao(true) }}>
                                <Text style={css.textbutton}>Editar Conta</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={css.cadastro}>Se cadastrou em 2024</Text>
                    </View>
                </View>
                :
                <View style={css.container}>
                    <MaterialCommunityIcons name="arrow-left" style={css.voltar} onPress={() => setEdicao(false)} />
                    <View style={css.edittitle}>

                    </View>
                    <View style={css.info1}>
                        <Image source={{ uri: imagemPerfil }} style={css.foto} />
                        <Text style={css.edicao}>Editar Minha Conta</Text>
                        <View style={css.edit}>
                            <TextInput
                                inputMode="text"
                                placeholder="Editar sua foto"
                                style={css.input}
                                value={imagemPerfil}
                                onChangeText={(digitado) => setImagemPerfil(digitado)}
                                placeholderTextColor="#BCBCBC"
                            />
                            <TextInput
                                inputMode="text"
                                placeholder="Editar sua biografia"
                                style={css.input}
                                value={biografia}
                                onChangeText={(digitado) => setBiografia(digitado)}
                                placeholderTextColor="#BCBCBC"
                            />
                        </View>
                        <View style={css.boxbutton}>
                            <TouchableOpacity style={css.btnsave} onPress={() => { editUser() }}>
                                <Text style={css.textbutton}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
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
        backgroundColor: "black",
    },
    titulo: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF59B2"
    },
    boxlinha: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
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
        width: 120,
        height: 120,
        marginLeft: 10,
        marginRight: 10,
        alignSelf: "center",
        marginTop: -70,
        borderRadius: 100,
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
        fontSize: 20
    },
    boxright: {
        textAlign: "right",
        width: "80%",
        height: 150
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
    },
    boxbutton: {
        marginTop: 70,
        width: "100%",
    },
    textbutton: {
        color: "white"
    },
    voltar: {
        color: "white",
        fontSize: 23,
        marginLeft: -330,
        marginTop: -10
    },
    totaledit: {
        width: "100%",
        alignItems: "center",
        marginTop: 90

    },
    rede: {
        color: "#BCBCBC",
        fontSize: 30,
    },
    boxredes: {
        display: "flex",
        flexDirection: "row",
        width: "50%",
        justifyContent: "space-around",
        marginTop: 20,
        columnGap: 20
    },
    cadastro: {
        color: "#BCBCBC",
        marginTop: 5,
    },
    btnsave: {
        backgroundColor: "#A076F9",
        width: "80%",
        padding: 10,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 3,
    },
    imagem: {
        width: "50%",
        height: 200,
        borderRadius: 30,
        resizeMode: "cover"
    },
    input: {
        textAlign: "left",
        borderColor: "#FFD124",
        width: "80%",
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginBottom: 6,
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: '#232323',
        color: "white"
    },
    edit: {
        marginTop: 60,
        width: "100%",
        height: 118
    },
    edicao: {
        fontSize: 30,
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF59B2",
        marginTop: 30,
    },
    info1: {
        width: "80%",
        backgroundColor: "#232323",
        height: 450,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 90
    },
})