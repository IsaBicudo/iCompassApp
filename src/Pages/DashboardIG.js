import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { PieChart } from "react-native-gifted-charts";
import Header from '../Components/Header';



export default function DashboardIG() {
    const data1 = [
        { value: 3150000 },
        { value: 2500000 },
        { value: 2000000 },
        { value: 2400000 },
        { value: 1500000 },
        { value: 1800000 },
        { value: 2000000 },
        { value: 2300000 },
        { value: 1900000 },
        { value: 1800000 },
        { value: 2200000 },
        { value: 1700000 },
    ];
    const data2 = [
        { value: 2100000 },
        { value: 990000 },
        { value: 980000 },
        { value: 1100000 },
        { value: 870000 },
        { value: 920000 },
        { value: 1900000 },
        { value: 1800000 },
        { value: 1700000 },
        { value: 2000000 },
        { value: 1600000 },
        { value: 2200000 },
    ];
    const data3 = [
        { value: 550000 },
        { value: 800000 },
        { value: 820000 },
        { value: 600000 },
        { value: 200000 },
        { value: 350000 },
        { value: 800000 },
        { value: 700000 },
        { value: 600000 },
        { value: 500000 },
        { value: 700000 },
        { value: 900000 },
    ];
    const pieData = [
        {
            value: 60,
            color: '#912BBC',
            gradientCenterColor: '#912BBC',
            focused: true,

        },
        { value: 40, color: '#FF3EA5', gradientCenterColor: '#FF3EA5' },
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
        <View>
            <Header />
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
                    initialSpacing={1}
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
                        pointerStripWidth: 5,
                        strokeDashArray: [2, 5],
                        pointerColor: 'lightgray',
                        pointerLabelWidth: 100,
                        pointerLabelHeight: 130,
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
                        marginTop: 10,
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
    txt:{
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
})
