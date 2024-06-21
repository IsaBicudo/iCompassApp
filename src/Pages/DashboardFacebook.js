import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { PieChart } from "react-native-gifted-charts";
import Header from '../Components/Header';



export default function DashboardFacebook({ setInstagram }) {
    const data1 = [
        { value: 1150000 },
        { value: 1500000 },
        { value: 1200000 },
        { value: 1000000 },
        { value: 1200000 },
        { value: 1400000 },
        { value: 1400000 },
        { value: 1300000 },
        { value: 1200000 },
        { value: 1300000 },
        { value: 1400000 },
        { value: 1400000 },
    ];
    const data2 = [
        { value: 1200000 },
        { value: 1400000 },
        { value: 1400000 },
        { value: 1400000 },
        { value: 1400000 },
        { value: 1500000 },
        { value: 1100000 },
        { value: 1300000 },
        { value: 1300000 },
        { value: 1400000 },
        { value: 1120000 },
        { value: 1230000 },
    ];
    const data3 = [
        { value: 750000 },
        { value: 700000 },
        { value: 820000 },
        { value: 503000 },
        { value: 702000 },
        { value: 755000 },
        { value: 846000 },
        { value: 437000 },
        { value: 727000 },
        { value: 731000 },
        { value: 740200 },
        { value: 759300 },
    ];
    const pieData = [
        {
            value: 40,
            color: '#FFFF',
            gradientCenterColor: '#FFFF',

        },
        { value: 60, color: '#106BFF', gradientCenterColor: '#106BFF', focused: true },
    ];
    const renderDot = color => {
        return (
            <View
                style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: color,
                    marginRight: 10,
                }}
            />
        );
    };

    const renderLegendComponent = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 10,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 120,
                            marginRight: 20,
                        }}>
                        {renderDot('#106BFF')}
                        <Text style={{ color: 'white' }}>Amigos: 40%</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 130,
                            marginRight: 20,
                        }}>
                        {renderDot('#ffff')}
                        <Text style={{ color: 'white' }}>Não amigos: 60%</Text>
                    </View>
                </View>
            </>
        );
    };

    return (
        <View style={{ backgroundColor: 'black' }}>
            <Header />
            <Image source={require("../../assets/img/setaa.jpg")} style={css.Voltar} onPress={ () => { setInstagram( false )} }/>
            <View
                style={{
                    paddingVertical: 40,
                    height: 800,
                    paddingLeft: 15,
                    backgroundColor: '#000',
                }}>
                <LineChart
                    areaChart
                    curved
                    data={data1}
                    data2={data2}
                    data3={data3}
                    hideDataPoints
                    spacing={27.8}
                    color1="#106BFF"
                    color2="#7BADFF"
                    color3="#FFFF"
                    startFillColor1="#106BFF"
                    startFillColor2="#7BADFF"
                    startFillColor3="#FFFF"
                    endFillColor1="#106BFF"
                    endFillColor2="#7BADFF"
                    endFillColor3="#FFFF"
                    startOpacity={0.9}
                    endOpacity={0.2}
                    initialSpacing={0}
                    noOfSections={4}
                    yAxisColor="white"
                    yAxisThickness={0}
                    rulesType="solid"
                    rulesColor="gray"
                    yAxisTextStyle={{ color: 'gray' }}
                    yAxisLabelSuffix="M"
                    xAxisColor="lightgray"
                    pointerConfig={{
                        pointerStripUptoDataPoint: true,
                        pointerStripColor: 'lightgray',
                        pointerStripWidth: 2,
                        strokeDashArray: [2, 5],
                        pointerColor: 'lightgray',
                        radius: 4,
                        pointerLabelWidth: 100,
                        pointerLabelHeight: 120,
                        pointerLabelComponent: items => {
                            return (
                                <View
                                    style={{
                                        height: 170,
                                        width: 100,
                                        backgroundColor: '#282C3E',
                                        borderRadius: 4,
                                        justifyContent: 'center',
                                        paddingLeft: 16,
                                    }}>
                                    <Text style={{ color: 'lightgray', fontSize: 12 }}>{ }</Text>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[0].value}</Text>
                                    <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>{ }</Text>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[1].value}</Text>
                                    <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>{ }</Text>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[2].value}</Text>
                                </View>
                            );
                        },
                    }}
                />
                <View style={css.boxInfo}>
                    <View style={css.txtcurtidas}></View>
                    <Text style={css.txt}>Curtidas</Text>
                    <View style={css.txtcoment}></View>
                    <Text style={css.txt}>Comentários</Text>
                    <View style={css.txtcompart}></View>
                    <Text style={css.txt}>Compartilhamentos</Text>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        alignItems: 'center',
                    }}>
                    <PieChart
                        data={pieData}
                        donut
                        strokeWidth={8}
                        strokeColor="#000"
                        showGradient
                        sectionAutoFocus
                        radius={90}
                        innerRadius={60}
                        innerCircleColor={'#000'}
                        centerLabelComponent={() => {
                            return (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text
                                        style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                                        40%
                                    </Text>
                                    <Text style={{ fontSize: 14, color: 'white' }}>Amigos</Text>
                                </View>
                            );
                        }}
                    />
                    {renderLegendComponent()}
                </View>
            </View>
        </View>
    );
}
const css = StyleSheet.create({
    boxInfo: {
        width: '94%',
        height: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    txt: {
        color: 'white'
    },
    txtcurtidas: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#106BFF',
    },
    txtcoment: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#7BADFF'
    },
    txtcompart: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#FFFF'
    },
    Voltar: {
        width: 30,
        height: 30,
        marginTop: 15,
        marginLeft: 15,
    }
})
