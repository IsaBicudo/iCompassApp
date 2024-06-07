import React from 'react'
import { View, FlatList, Image } from 'react-native'

export default function teste() {
  return (
    <View>
        <FlatList
            renderItem={
                <View>
                    <Image source={require("../../assets/banner.jpeg")}  />
                </View>
            }
            horizontal={true}
            />
    </View>
  )
}


