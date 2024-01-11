import React from 'react'
import CustomButton from './CustomButton'
import { 
  frente1, 
  frente2,
  frente3,
  frente4,
  frente5,
  frente6,
  frente7,
  frente8,
  frente9, 
  frente10,
  atras1, 
  atras2,
  atras3,
  atras4,
  atras5,
  atras6,
  atras7,
  atras8,
  atras9, 
  atras10  } from '../assets'

const FilePicker = ({ onFile, isBack }) => {
  return isBack ? (
<div className="filepicker-container">
      <div onClick={() => onFile(atras1)} className='img-container'>
        <img src={atras1} />
      </div>
      <div onClick={() => onFile(atras2)} className='img-container'>
        <img src={atras2} />
      </div>
      <div onClick={() => onFile(atras3)} className='img-container'>
        <img src={atras3} />
      </div>
      <div onClick={() => onFile(atras4)} className='img-container'>
        <img src={atras4} />
      </div>
      <div onClick={() => onFile(atras5)} className='img-container'>
        <img src={atras5} />
      </div>
      <div onClick={() => onFile(atras6)} className='img-container'>
        <img src={atras6} />
      </div>
      <div onClick={() => onFile(atras7)} className='img-container'>
        <img src={atras7} />
      </div>
      <div onClick={() => onFile(atras8)} className='img-container'>
        <img src={atras8} />
      </div>
      <div onClick={() => onFile(atras9)} className='img-container'>
        <img src={atras9} />
      </div>
      <div onClick={() => onFile(atras10)} className='img-container'>
        <img src={atras10} />
      </div>
    </div>
  ) : (
    <div className="filepicker-container">
      <div onClick={() => onFile(frente1)} className='img-container'>
        <img src={frente1} />
      </div>
      <div onClick={() => onFile(frente2)} className='img-container'>
        <img src={frente2} />
      </div>
      <div onClick={() => onFile(frente3)} className='img-container'>
        <img src={frente3} />
      </div>
      <div onClick={() => onFile(frente4)} className='img-container'>
        <img src={frente4} />
      </div>
      <div onClick={() => onFile(frente5)} className='img-container'>
        <img src={frente5} />
      </div>
      <div onClick={() => onFile(frente6)} className='img-container'>
        <img src={frente6} />
      </div>
      <div onClick={() => onFile(frente7)} className='img-container'>
        <img src={frente7} />
      </div>
      <div onClick={() => onFile(frente8)} className='img-container'>
        <img src={frente8} />
      </div>
      <div onClick={() => onFile(frente9)} className='img-container'>
        <img src={frente9} />
      </div>
      <div onClick={() => onFile(frente10)} className='img-container'>
        <img src={frente10} />
      </div>
    </div>
  )
}

export default FilePicker