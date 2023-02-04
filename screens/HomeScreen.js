import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
  Bars3Icon as Bars3Icon,
  ArrowUpRightIcon, 
} from "react-native-heroicons/outline";
import WorkoutImageCard from '../components/WorkoutImageCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WorkoutScreen from './WorkoutScreen';

const HomeScreen = () => {
  const navigation = useNavigation();

  // useLayoutEffect is a part of react-navigation, hiding the header which displays the screen name up the top by default
  useLayoutEffect(() => { 
    navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <SafeAreaView className='bg-slategray-900'>
      <View className='flex-row pb-3 items-center mx-4 space-x-3'>
        <Image 
          source=
          {{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }} 
          className='h-11 w-11 p-4 rounded-full'/>

          <View className='flex-1'>
            <Text className='font-bold text-white text-base'>Michael Xie</Text>
            <Text className='text-gray-400 text-xs'>Beginner Lifter</Text>
          </View>
          <TouchableOpacity><Bars3Icon color="white" size="28"></Bars3Icon></TouchableOpacity>
      </View>
      
      <ScrollView>
        <Text className='text-white font-bold mx-2'>Quick Start</Text>
          <View className='bg-slate-800 h-8 w-44 mx-auto my-2 rounded-lg justify-center'>
            <TouchableOpacity onPress={() => navigation.navigate('WorkoutScreen')
            }>
              <Text className='font-bold text-white text-base mx-auto'>Start Empty Workout</Text>
            </TouchableOpacity>
          </View>

        <View className='flex-row justify-between'>        
          <Text className='text-white font-bold text-base mx-2 mt-1'>Our Suggestions:</Text>
          <TouchableOpacity><Text className='text-white text-base mt-1'>See All <ArrowUpRightIcon color="white" size="16"/></Text></TouchableOpacity>
        </View>
        
        <WorkoutImageCard
          imgUrl="https://www.mensjournal.com/wp-content/uploads/mf/main_cable_chest_arms_.jpg?w=1188&h=630&crop=1&quality=86&strip=all"
          title="Beginner Chest"
          fitnessLevel="1"
        />
        <WorkoutImageCard
          imgUrl="https://img.livestrong.com/640/clsd/getty/d267c37246ff42b1b98972f884989f6f.jpg"
          title="Advanced Cardio"
          fitnessLevel="1"
        />
        <WorkoutImageCard
          imgUrl="https://i1.wp.com/whatsgood.vitaminshoppe.com/wp-content/uploads/2022/07/man-leg-press-machine.jpg?fit=1480%2C614&ssl=1"
          title="Anti-Chicken Legs"
          fitnessLevel="1"
        />
        <WorkoutImageCard
          imgUrl="https://fitnessvolt.com/wp-content/uploads/2022/06/Battle-Rope-Exercises.jpg"
          title="HIIT"
          fitnessLevel="1"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen