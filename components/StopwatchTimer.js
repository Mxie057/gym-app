import { View, Text, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import {Stopwatch, Timer} from 'react-native-stopwatch-timer'

const StopwatchTimer = () => {
  const [hasStopwatchStarted, setHasStopwatchStarted] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View className='items-center'>
      <Stopwatch
        start={hasStopwatchStarted}
        getTime={(time) => {
          console.log(time);
        }}/>
      <TouchableHighlight
        onPress={() => {
          setHasStopwatchStarted(!hasStopwatchStarted);
          setResetStopwatch(false);
        }}
      >
        <View className='text-white bg-emerald-500 h-8 w-25 px-2 mt-2 justify-center rounded-lg'>
          <Text >
            {!hasStopwatchStarted ? 'Start Workout' : 'Pause Workout'}
          </Text>
        </View>

      </TouchableHighlight>
    </View>
  )
}

export default StopwatchTimer