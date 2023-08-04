import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
*[_type == "featured" && _id == $id] {
  ...,
  restaurant[]->{
    ...,
    dishes[]->,
    type-> {
      name
    }
  },
}[0]
`,
        { id }
      )
      .then((data) => {

        setRestaurants(data?.restaurant);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

console.log(restaurants)

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs px-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestuarantCards */}
        {restaurants?.map((restaurant) => (

        <RestaurantCard
          key={restaurant._id}
          id={restaurant._id}
          imgUrl={restaurant.image}
          address={restaurant.address}
          title={restaurant.name}
          dishes={restaurant.dishes}
          rating={restaurant.rating}
          short_description={restaurant.short_description}
          genre={restaurant.type?.name}
          long={restaurant.long}
          lat={restaurant.lat}
        />
        )) 
        }

      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
