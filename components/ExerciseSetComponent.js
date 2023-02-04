import { View, Text } from 'react-native'
import React from 'react'

const ExerciseSetComponent = ({setNo}) => {
  return (
    <View className='flex-row justify-between ml-2'>
        <Text className='text-white font-bold'>{setNo}</Text>
        <Text className='text-white font-bold'>23</Text>
        <Text className='text-white font-bold'>12</Text>
    </View>
  )
}

export default ExerciseSetComponent