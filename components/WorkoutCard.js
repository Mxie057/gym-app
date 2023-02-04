import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const WorkoutCard = ({id, imgUrl, title, fitnessLevel}) => {
  return (
    <TouchableOpacity className='mt-4'>
      <ImageBackground source ={{
        uri: imgUrl,
      }}
      className = 'h-40 max-w-full'>
        <View>
          <LinearGradient
          colors={['rgba(0,0,0,0.9)', 'transparent']}
          start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]} className='h-40'>
          <Text className='font-bold text-white text-2xl mx-3 mt-2'>{title}</Text>
          <Text className='font-bold text-gray-500 text-2xl mx-3'>Exercise</Text>
          </LinearGradient>
        </View>
      </ImageBackground> 
    </TouchableOpacity>
  )
}

export default WorkoutCard