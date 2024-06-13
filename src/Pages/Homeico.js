import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native'

export default function Homeico() {

  const banner1 = [
    require('../../assets/mulheres.png'),
    require('../../assets/vitorbanner.jpeg'),
    require('../../assets/isabellabaner.jpeg'),
    require('../../assets/melinabanner.jpeg'),
    require('../../assets/bannerplanos.jpeg'),

  ];

  const banner2 = [
    require('../../assets/melinaatu.png'),
    require('../../assets/kauanatu.png'),
    require('../../assets/isabellaatu.png'),

  ];

  const banner3 = [
    require('../../assets/Isabellapremio.jpg'),
    require('../../assets/loudganhachampions.jpg'),
    require('../../assets/GDEA.jpg'),

  ];

  return (
    <View>
      <View style={css.header}>
          <View>
              <Image source={require("../../assets/logo-ico.png")} style={css.logo} />
          </View>
      </View>
      <ScrollView>
      <View>
          <Image source={require("../../assets/banner.jpeg")} style={css.banner} />
        </View>
        <View style={css.fundocarrosel}>
            <FlatList
            horizontal={true}
            data={banner1}
            renderItem={({ item }) => (
              <Image source={item} style={{ width: 660, height: 170,  }} />
            )}
            />
        </View>
        <View>
          <Text style={css.txtbanner2}>ATUALIZAÇÕES</Text>
          <View style={css.banner2}>
          <FlatList
            horizontal={true}
            data={banner2}
            renderItem={({ item }) => (
              <Image source={item} style={{ width: 250, height: 300, marginLeft: 30, marginRight:30  }} />
            )}
            />
          </View>
        </View>
        <View style={css.fim}>
        <View>
          <Text style={css.txtbanner3}>PRÊMIOS</Text>
          <View style={css.banner2}>
          <FlatList
            horizontal={true}
            data={banner3}
            renderItem={({ item }) => (
              <Image source={item} style={{ width: 250, height: 300, marginLeft: 30, marginRight:30  }} />
            )}
            />
            <View style={css.linhafim}></View>
            <View>
            <Image source={require("../../assets/logo-ico.png")} style={css.logorodape} />
            <Text style={css.textrodapegm}>iCompass@gmail.com</Text>
            <Image source={require("../../assets/redessc.png")} style={css.redessc} />
            <Text style={css.textrodape}>Privacy Policy</Text>
            <Text style={css.textrodape}>© 2024 iCompass, Inc - uma agência de marketing influenciadora.
 Todos os direitos reservados.</Text>
            
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
        

    </View>
    
  )
}
const css = StyleSheet.create({
    header:{
        backgroundColor: "#912BBC",
        width: "100%",
        height: 100,
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
    banner:{
      width: "100%",
      height: 150
    },
    fundocarrosel:{
      width: "100%",
      height: 200,
      backgroundColor: "black"
    },
    txtbanner2:{
      textAlign: "center",
      fontSize: 20,
      marginTop: 40,
      fontWeight: "bold"
    },
    banner2:{
      marginTop: 30
    },
    fim:{
      height: 750,
      backgroundColor: 'black',
      marginTop: 50
    },
    txtbanner3:{
      textAlign: "center",
      fontSize: 20,
      marginTop: 40,
      fontWeight: "bold",
      color: 'white'
    },
    linhafim:{
      height: 1,
      backgroundColor: 'white',
      width: '100%',
      marginTop: 40,
      color: 'white',
      marginBottom: -20
    },
    textrodape:{
      color: 'white',
      marginLeft: 28,
      marginTop: 20
    },
    textrodapegm:{
      color: 'white',
      marginLeft: 217,
      marginTop: -40,
      fontSize: 16
    },
    redessc: {
      height: 30,
      width: 180,
      marginLeft: '49%',
      marginTop: 15
    },
    logorodape:{
      width: 70,
        height: 70,
        marginTop:30,
        marginLeft: 20,
        marginBottom: -25
    }
})
