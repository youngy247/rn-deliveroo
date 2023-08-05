import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-[#00CCBB] justify-center items-center'>
      <Animatable.Image
        source={require('../assets/deliveroogif.gif')}
        animation='slideInUp'
        iterationCount={1}
        className='h-96 w-96'
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
