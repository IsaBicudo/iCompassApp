import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { PieChart } from "react-native-gifted-charts";
import Header from '../Components/Header';



export default function DashboardIG({ setInstagram }) {
    const data1 = [
        { value: 3100000, label: 'Jan' },
        { value: 2900000, label: 'Fev' },
        { value: 2940000, label: 'Mar' },
        { value: 2780000, label: 'Abr' },
        { value: 2450000, label: 'Mai' },
        { value: 2300000, label: 'Jun' },
        { value: 2780000, label: 'Jul' },
        { value: 2870000, label: 'Ago' },
        { value: 2340000, label: 'Set' },
        { value: 2650000, label: 'Out' },
        { value: 2960000, label: 'Nov' },
        { value: 2590000, label: 'Dez' },
    ];
    const data2 = [
        { value: 2100000 },
        { value: 2400000 },
        { value: 2480000 },
        { value: 2200000 },
        { value: 2300000 },
        { value: 2200000 },
        { value: 2400000 },
        { value: 2760000 },
        { value: 2300000 },
        { value: 2230000 },
        { value: 2560000 },
        { value: 2790000 },
    ];
    const data3 = [
        { value: 2200000 },
        { value: 2000000 },
        { value: 2200000 },
        { value: 2000000 },
        { value: 2000000 },
        { value: 2200000 },
        { value: 2230000 },
        { value: 2380000 },
        { value: 2230000 },
        { value: 2250000 },
        { value: 2320000 },
        { value: 2540000 },
    ];
    const pieData = [
        {
            value: 60,
            color: '#FF3EA5',
            gradientCenterColor: '#FF3EA5',
            focused: true,

        },
        { value: 40, color: '#912BBC', gradientCenterColor: '#912BBC' },
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
                        {renderDot('#FF3EA5')}
                        <Text style={{ color: 'white' }}>Seguindo: 60%</Text>
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
                        {renderDot('#912BBC')}
                        <Text style={{ color: 'white' }}>Não seguindo: 40%</Text>
                    </View>
                </View>
            </>
        );
    };

    return (
        <View style={{ backgroundColor: 'black' }}>
            <Header />
            <Image source={require("../../assets/img/setaa.jpg")} style={css.Voltar} onPress={() => { setInstagram(false) }} />
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
                    spacing={40}
                    color1="#FF3EA5"
                    color2="#FFD124"
                    color3="#912BBC"
                    startFillColor1="#FF3EA5"
                    startFillColor2="#FFD124"
                    startFillColor3="#912BBC"
                    endFillColor1="#FF3EA5"
                    endFillColor2="#FFD124"
                    endFillColor3="#912BBC"
                    startOpacity={0.9}
                    endOpacity={0.2}
                    initialSpacing={14}
                    noOfSections={7}
                    yAxisColor="white"
                    yAxisThickness={0}
                    rulesType="solid"
                    rulesColor="gray"
                    yAxisTextStyle={{ color: 'gray' }}
                    xAxisLabelTextStyle={{ color: 'white' }}
                    yAxisLabelSuffix="M"
                    xAxisColor="lightgray"
                    pointerConfig={{
                        activatePointersOnLongPress: true,
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
                                        height: 130,
                                        width: 100,
                                        backgroundColor: '#282C3E',
                                        borderRadius: 4,
                                        justifyContent: 'center',
                                        paddingLeft: 20,
                                        marginTop: 40,
                                        paddingBottom: 20,
                                        gap: -80,
                                        marginLeft: 20,
                                    }}>
                                    <Text style={{ color: 'lightgray', fontSize: 12 }}>{}</Text>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[0].value}</Text>
                                    <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>{}</Text>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[1].value}</Text>
                                    <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>{}</Text>
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
                                        60%
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
        backgroundColor: '#FF3EA5',
    },
    txtcoment: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#FFD124'
    },
    txtcompart: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#912BBC'
    },
    Voltar: {
        width: 30,
        height: 30,
        marginTop: 15,
        marginLeft: 15,
    }
})
