import React from 'react'
import { CirclePicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="color-picker left-full ml-3">
      <CirclePicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        colors={["#000000", "white", "#ccc", "#e9d61e", "#FF5722", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#004e00", "#cddc39"]}
      />
    </div>
  )
}

export default ColorPicker