import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10
    }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >

      {/* CategoryCard */}

      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 1'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 2'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 3'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 4'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 5'/>
      <CategoryCard imgUrl='https://links.papareact.com/gn7' title='testing 6'/>
    </ScrollView>
  )
}

export default Categories