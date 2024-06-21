import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { PieChart } from "react-native-gifted-charts";
import Header from '../Components/Header';

export default function Teste() {
    const data1 = [
        { value: 15, label: 'Jan' },
        { value: 30, label: 'Fev' },
        { value: 26, label: 'Mar' },
        { value: 40, label: 'Abr' },
        { value: 40, label: 'Mai' },
        { value: 40, label: 'Jun' },
        { value: 40, label: 'Jul' },
        { value: 40, label: 'Ago' },
        { value: 40, label: 'Set' },
        { value: 40, label: 'Out' },
        { value: 40, label: 'Nov' },
        { value: 40, label: 'Dez' },
    ];
    const data2 = [
        { value: 20 },
        { value: 100, label: 'Fev' },
        { value: 33, label: 'Mar' },
        { value: 20, label: 'Abr' },
        { value: 10, label: 'Mai' },
        { value: 5, label: 'Jun' },
        { value: 80, label: 'Jul' },
        { value: 30, label: 'Ago' },
        { value: 10, label: 'Set' },
        { value: 20, label: 'Out' },
        { value: 100, label: 'Nov' },
        { value: 50, label: 'Dez' },
    ];
    const data3 = [
        { value: 20 },
        { value: 100},
        { value: 33},
        { value: 20},
        { value: 10, label: 'Mai' },
        { value: 5, label: 'Jun' },
        { value: 80, label: 'Jul' },
        { value: 30, label: 'Ago' },
        { value: 10, label: 'Set' },
        { value: 20, label: 'Out' },
        { value: 100, label: 'Nov' },
        { value: 50, label: 'Dez' },
    ];
    return (
        <View
            style={{
                paddingVertical: 80,
                height: 800,
                paddingLeft: 15,
                backgroundColor: '#000',
            }}>
            <LineChart
                areaChart
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
                initialSpacing={16}
                noOfSections={7}
                yAxisColor="white"
                yAxisThickness={0}
                rulesType="solid"
                rulesColor="gray"
                yAxisTextStyle={{ color: 'gray' }}
                xAxisLabelTextStyle={{ color: 'white'}}
                yAxisLabelSuffix="M"
                xAxisColor="lightgray"
            />
        </View>
    );
};
