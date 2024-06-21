import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { PieChart } from "react-native-gifted-charts";
import Header from '../Components/Header';



export default function DashboardYT({ setInstagram }) {
    const data1 = [
        { value: 3100000 },
        { value: 3500000 },
        { value: 3900000 },
        { value: 3400000 },
        { value: 3900000 },
        { value: 3600000 },
        { value: 3500000 },
        { value: 3200000 },
        { value: 3900000 },
        { value: 3800000 },
        { value: 3900000 },
        { value: 3900000 },
    ];
    const data2 = [
        { value: 2700000 },
        { value: 2900000 },
        { value: 2800000 },
        { value: 2900000 },
        { value: 2700000 },
        { value: 2860000 },
        { value: 2900000 },
        { value: 2800000 },
        { value: 2700000 },
        { value: 2960000 },
        { value: 2600000 },
        { value: 2800000 },
    ];
    const data3 = [
        { value: 2590000 },
        { value: 2680000 },
        { value: 2600000 },
        { value: 2350000 },
        { value: 2650000 },
        { value: 2580000 },
        { value: 2300000 },
        { value: 2980000 },
        { value: 2540000 },
        { value: 2630000 },
        { value: 2650000 },
        { value: 2450000 },
    ];
    const data4 = [
        { value: 2200000 },
        { value: 2400000 },
        { value: 2600000 },
        { value: 2000000 },
        { value: 2000000 },
        { value: 2500000 },
        { value: 2400000 },
        { value: 2200000 },
        { value: 2300000 },
        { value: 2400000 },
        { value: 2200000 },
        { value: 2300000 },
    ];
    const pieData = [
        {
            value: 80,
            color: '#FF0000',
            gradientCenterColor: '#FF0000',
            focused: true,

        },
        { value: 20, color: '#ffff', gradientCenterColor: '#ffff' },
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
                        {renderDot('#FF0000')}
                        <Text style={{ color: 'white' }}>Inscritos: 80%</Text>
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
                        <Text style={{ color: 'white' }}>Não inscritos: 20%</Text>
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
                    data4={data4}
                    hideDataPoints
                    spacing={27.8}
                    color1="#782121"
                    color2="#FF0000"
                    color3="#ACACAC"
                    color4="#ffff"
                    startFillColor1="#782121"
                    startFillColor2="#FF0000"
                    startFillColor3="#ACACAC"
                    startFillColor4="#fff"
                    endFillColor1="#782121"
                    endFillColor2="#FF0000"
                    endFillColor3="#ACACAC"
                    endFillColor4="#fff"
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
                    <Text style={css.txt}>Visualizações</Text>
                    <View style={css.txtcoment}></View>
                    <Text style={css.txt}>Curtidas</Text>
                </View>
                <View style={css.boxSubInfo}>
                    <View style={css.txtcompart}></View>
                    <Text style={css.txt}>Comentários</Text>
                    <View style={css.txtrepu}></View>
                    <Text style={css.txt}>Ações (salvos e etc)</Text>
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
                                        80%
                                    </Text>
                                    <Text style={{ fontSize: 14, color: 'white' }}>Seguindo</Text>
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
        height: 35,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    boxSubInfo: {
        width: '94%',
        height: 35,
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
        backgroundColor: '#782121',
    },
    txtcoment: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#FF0000'
    },
    txtcompart: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#ACACAC'
    },
    txtrepu: {
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
