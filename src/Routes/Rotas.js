import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native'

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Homeico from '../Pages/Homeico';
import MinhaConta from '../Pages/MinhaConta';
//import Home from '../Pages/Home';
// import Busca from '../Pages/Busca';
import Login from '../Pages/Login';
// import Videos from '../Pages/Videos';
// import Perfil from '../Pages/Perfil';
// import Inserir from '../Pages/Inserir';
import DashboardIG from '../Pages/DashboardIG';
import DashboardYT from '../Pages/DashboardYT';
import DashboardX from '../Pages/DashboardX';
import DashboardTiktok from '../Pages/DashboardTiktok';
import DashboardFacebook from '../Pages/DashboardFacebook';
import Pontos from '../Pages/Pontos';




const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (<Login />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { backgroundColor: "black"},
                    tabBarLabelStyle: { color: "white"},
                    headerTitleStyle: { color: "white"},
                    tabBarActiveBackgroundColor: "#383838",
                    tabBarActiveTintColor: "#A076F9",
                    tabBarInactiveTintColor: "white",
                  }}>
                <Tab.Screen
                    name="homeico"
                    component={Homeico}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="DashboardIG"
                    component={DashboardIG}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="DashboardYT"
                    component={DashboardYT}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="DashboardX"
                    component={DashboardX}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="DashboardTiktok"
                    component={DashboardTiktok}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="DashboardFacebook"
                    component={Pontos}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}
export const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#191919"
    },
    logo: {
        width: "60%",
        resizeMode: "contain"
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#262626",
        color: "white"
    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#0195fd",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#0195fd"
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    }
});