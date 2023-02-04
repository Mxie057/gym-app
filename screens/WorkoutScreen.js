import { View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import StopwatchTimer from '../components/StopwatchTimer'
import { useNavigation } from '@react-navigation/native';
import ExerciseCard from '../components/ExerciseCard';

const WorkoutScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => { 
    navigation.setOptions({
      headerShown: false,
    })
  });

  return (
    <SafeAreaView>
      <View className='items-center'>
        <StopwatchTimer></StopwatchTimer>

      </View>
      <View>
        <Text className='font-bold text-white text-lg mt-2 ml-2'>Exercises</Text>
        <ExerciseCard
          exerciseName="Incline Dumbbell Bench Press"
        />
        <ExerciseCard
          exerciseName="Squats"
        />

      </View>
      <View className='items-center mt-5'>
        <TouchableOpacity className='p-2 rounded-lg bg-blue-500'>
          <Text  className='text-white'>Add Exercise</Text>
        </TouchableOpacity>
        <TouchableOpacity className='mt-2 p-2 rounded-lg bg-red-500'>
          <Text  className='text-white'>Cancel Workout</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>

  )
}

export default WorkoutScreen