import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerTitleStyle: {color: 'tomato'},
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="droplet"
              size={25}
              color={focused ? 'tomato' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming Weather"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="clock" size={25} color={focused ? 'tomato' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="home" size={25} color={focused ? 'tomato' : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
