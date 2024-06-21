import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, FlatList, ScrollView } from 'react-native'


export default function Homeico() {

  const banner1 = [

    require('../../assets/melinabanner.png'),
    require('../../assets/vitorbanner.png'),
    require('../../assets/mulheresbanner.png'),
    require('../../assets/isabellabanner.png'),
  ];

  const banner2 = [
    require('../../assets/melina.jpeg'),
    require('../../assets/kauan.jpg'),
    require('../../assets/isacoca.jpg'),

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
              <Image source={item} style={{ borderRadius: 5, marginRight: 20, marginLeft: 2 }} />

            )}
          />
        </View>
        <View style={css.boxAtuali}>
          <Text style={css.txtbanner2}>ATUALIZAÇÕES</Text>
          <View style={css.banner2}>
            <FlatList
              horizontal={true}
              data={banner2}
              renderItem={({ item }) => (
                <View style={css.shadowBox}>

                  <Image source={item} style={css.Image} />
                </View>

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

                  <Image source={item} style={{ width: 320, height: 400, marginLeft: 30, marginRight: 10, borderRadius: 10, borderColor: "#FFFF", borderWidth: 1, marginRight: 20 }} />

                )}
              />
              <View style={css.linhafim}></View>
              <View style={css.boxAll}>
                <View style={css.boxEmail}>
                  <Text style={css.emailrodapegm}>iCompass@gmail.com</Text>
                  <Image source={require("../../assets/redessc.png")} style={css.redessc} />
                </View>
                <View style={css.boxImg}>
                  <Image source={require("../../assets/logo-ico.png")} style={css.logorodape} />
                </View>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>


    </View>

  )
}
const css = StyleSheet.create({
  header: {
    backgroundColor: "#912BBC",
    width: "100%",
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 35,
    marginLeft: 20
  },
  banner: {
    width: "100%",
    height: 150
  },
  fundocarrosel: {
    width: "100%",
    height: 190,
    backgroundColor: "black"
  },
  boxAtuali: {
    height: 580,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  txtbanner2: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold",
    color: 'black'
  },
  banner2: {
    marginTop: 30,
  },
  fim: {
    height: 750,
    backgroundColor: 'black'
  },
  txtbanner3: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold",
    color: 'white'
  },
  linhafim: {
    height: 1,
    backgroundColor: 'white',
    width: '100%',
    marginTop: 60,
    color: 'white',
  },
  emailrodapegm: {
    color: 'white',
    marginLeft: 12,
    fontSize: 15
  },
  redessc: {
    height: 30,
    width: 150,
    marginTop: 15
  },
  logorodape: {
    width: 70,
    height: 70,
  },
  boxAll: {
    width: '100%',
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  boxImg: {
    marginLeft: 20
  },
  boxEmail: {
    marginRight: 100
  },
  Image: {
    width: 320,
    height: 400,
    marginLeft: 30,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000"
  }
});
