import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import ExerciseSetComponent from './ExerciseSetComponent'

const ExerciseCard = ({exerciseName}) => {
  let [setNo, setSetNos] = useState([1]);


  const onClickAddSetBtn = event => {
    setSetNos([...setNo, setSetNos])
  }
  
  return (
    <View>
      <Text className='text-blue-500 font-bold ml-2'>{exerciseName}</Text>
      <View className='flex-row justify-between ml-2'>
        <Text className='text-white font-bold'>Set</Text>
        <Text className='text-white font-bold'>Weight</Text>
        <Text className='text-white font-bold'>Reps</Text>
      </View>
      <ExerciseSetComponent 
        setNo={setNo}
      />
      
      <TouchableOpacity  
        className='w-6 h-6 bg-white mb-5' 
        onPress={() => {
          onClickAddSetBtn();
          
        }}>{setNo.map((item, i) => (<ExerciseSetComponent setNo={item}/>))}
          <Text>++</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ExerciseCard