import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import { Platform } from 'react-native';

import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    const theme = useTheme();

    return(
        <Navigator
        screenOptions={{
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.border_light,
            tabBarLabelPosition:'below-icon',
            tabBarStyle: {
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                height:88,
            }
        }}
        >
            <Screen 
                name={'Home'}
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon: (({size, color}) =>
                        <MaterialIcons 
                            size={size} 
                            color={color}
                            name={'home-filled'} 
                        />
                    )
                }}
            />
            <Screen 
                name={'Carrinho'}
                component={Cart}
                options={{
                    headerShown:false,
                    tabBarIcon: (({size, color}) =>
                        <MaterialIcons 
                            size={size} 
                            color={color}
                            name={'shopping-cart'} 
                        />
                    )
                }}
            />
        </Navigator>
    );
}