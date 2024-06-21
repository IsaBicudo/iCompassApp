import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { PieChart } from "react-native-gifted-charts";
import Header from '../Components/Header';



export default function DashboardTiktok({ setInstagram }) {
    const data1 = [
        { value: 3700000, label: 'Jan' },
        { value: 3900000, label: 'Fev' },
        { value: 3600000, label: 'Mar' },
        { value: 3500000, label: 'Abr' },
        { value: 3800000, label: 'Mai' },
        { value: 3400000, label: 'Jun' },
        { value: 3210000, label: 'Jul' },
        { value: 3400000, label: 'Ago' },
        { value: 3400000, label: 'Set' },
        { value: 3300000, label: 'Out' },
        { value: 3780000, label: 'Nov' },
        { value: 3900000, label: 'Dez' },
    ];
    const data2 = [
        { value: 3000000 },
        { value: 3190000 },
        { value: 2900000 },
        { value: 2380000 },
        { value: 3200000 },
        { value: 2990000 },
        { value: 3300000 },
        { value: 1900000 },
        { value: 2700000 },
        { value: 3200000 },
        { value: 2900000 },
        { value: 2400000 },
    ];
    const data3 = [
        { value: 2800000 },
        { value: 2700000 },
        { value: 2900000 },
        { value: 3000000 },
        { value: 2700000 },
        { value: 2890000 },
        { value: 2900000 },
        { value: 2670000 },
        { value: 2900000 },
        { value: 2400000 },
        { value: 2870000 },
        { value: 2500000 },
    ];
    const data4 = [
        { value: 1800000 },
        { value: 2000000 },
        { value: 1900000 },
        { value: 2300000 },
        { value: 2200000 },
        { value: 2500000 },
        { value: 2870000 },
        { value: 1590000 },
        { value: 3000000 },
        { value: 3100000 },
        { value: 2900000 },
        { value: 2780000 },
    ];
    const pieData = [
        {
            value: 85,
            color: '#58D7FF',
            gradientCenterColor: '#58D7FF',
            focused: true,

        },
        { value: 15, color: '#EE1D52', gradientCenterColor: '#EE1D52' },
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
                        {renderDot('#58D7FF')}
                        <Text style={{ color: 'white' }}>Seguindo: 85%</Text>
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
                        {renderDot('#EE1D52')}
                        <Text style={{ color: 'white' }}>Não seguindo: 15%</Text>
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
                    spacing={50}
                    color1="#EE1D52"
                    color2="#FFFF"
                    color3="#58D7FF"
                    color4="#FFD124"
                    startFillColor1="#EE1D52"
                    startFillColor2="#FFFF"
                    startFillColor3="#58D7FF"
                    startFillColor4="#FFD124"
                    endFillColor1="#EE1D52"
                    endFillColor2="#FFFF"
                    endFillColor3="#58D7FF"
                    endFillColor4="#FFD124"
                    startOpacity={0.9}
                    endOpacity={0.2}
                    initialSpacing={14}
                    noOfSections={7}
                    yAxisColor="white"
                    yAxisThickness={0}
                    rulesType="solid"
                    rulesColor="gray"
                    xAxisLabelTextStyle={{ color: 'white'}}
                    yAxisTextStyle={{ color: 'gray' }}
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
                                        height: 150,
                                        width: 100,
                                        backgroundColor: '#282C3E',
                                        borderRadius: 4,
                                        justifyContent: 'center',
                                        paddingLeft: 16,
                                        marginLeft: 20,
                                        marginTop: 50,
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
                                        85%
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
        backgroundColor: '#EE1D52',
    },
    txtcoment: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#58D7FF'
    },
    txtcompart: {
        width: 12,
        height: 12,
        borderRadius: 50,
        backgroundColor: '#FFD124'
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

