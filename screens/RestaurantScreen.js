import { View, Text, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const RestaurantScreen = () => {
  const navigation = useNavigation();

    const {
      params: {
        id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
      }
    } = useRoute();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    }, [])

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="h-56 w-full bg-gray-300 p-4"
        />
        <TouchableOpacity 
        onPress={() => navigation.goBack()}
        className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen