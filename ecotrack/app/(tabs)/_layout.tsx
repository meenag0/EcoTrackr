import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {

        }
    }}>
        <Tabs.Screen name='home' options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({ color, size }) => 
            <Ionicons name = 'search' color={color} size={size}/>
        }}
        />
        <Tabs.Screen name='habits' options={{
            tabBarLabel: 'Wishlists',
            tabBarIcon: ({ color, size }) => 
            <Ionicons name = 'heart-outline' color={color} size={size}/>
        }}
        />
        <Tabs.Screen name='progress' options={{
            tabBarLabel: 'Trips',
            tabBarIcon: ({ color, size }) => 
            <FontAwesome6 name = 'airbnb' color={color} size={size}/>
        }}
        />
        <Tabs.Screen name='profile' options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => 
            <Ionicons name = 'person-circle-outline' color={color} size={size}/>
        }}
        />
    </Tabs>
  );
};

export default Layout