import React from 'react'
import {Canvas} from "@react-three/fiber";
import {Environment, Center} from "@react-three/drei";

import Shirt from "./Shirt.jsx";
import Backdrop from "./Backdrop.jsx";
import CameraRig from "./CameraRig.jsx";
import { useSnapshot } from 'valtio';
import state from '../store';
import { motion, AnimatePresence } from "framer-motion"
import { ColorPicker, FilePicker } from '../components';
const CanvasModel = ({ onFile  }) => {
    const snap = useSnapshot(state);

    return (
        
        <div className="w-full max-w-full h-full">
            <div className={`customizer-step ${snap.step3 && 'step3'}`}>
                <AnimatePresence>
                    {!snap.step1 && !snap.step2 && !snap.step3 && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => state.step1 = true}
                        >
                            Remeras Únicas, Historias Únicas
                        </motion.h1>
                    )}
                    {snap.step1 && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => state.step1 = true}
                        >
                            Paso 1: Tu logo &#x1F525;
                        </motion.h1>
                    )}
                    {snap.step2 && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => state.step1 = true}
                        >
                            Paso 2: Atras &#x1F440;
                        </motion.h1>
                    )}
                    {snap.step3 && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => state.step1 = true}
                        >
                            Por ultimo, tu color &#x1F60E;
                        </motion.h1>
                    )}
                    
                    {!snap.step1 && !snap.step2 && !snap.step3 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="comet" 
                        onClick={() => state.step1 = true}
                    >
                        Crea tu <b>Sudestada</b>
                    </motion.div>
                    )}
                </AnimatePresence>

                {(snap.step1 || snap.step2) && (
                        <FilePicker onFile={onFile}/>
                    )}

                {snap.step3 && (
                    <ColorPicker />
                )}

                {(snap.step1 || snap.step2 || snap.step3) && (
                        <div
                                className="comet step2" 
                                onClick={() => {
                                    if(snap.step1) {
                                        state.step1 = false
                                        state.step2 = true
                                        state.tShirtBack = true
                                    } else if(snap.step2) {
                                        state.step1 = false
                                        state.step2 = false
                                        state.step3 = true
                                        state.tShirtBack = false
                                    }
                                    
                                }}
                            >
                                Listo
                            </div>
                    )}
            </div>
            <Canvas
                shadows={!snap.step3}
                camera={{position: [0,0,0], fov: 30}}
                gl={{preserveDrawingBuffer: true}}
                className="w-full max-w-full h-full transition-all ease-in"
                >
                    <ambientLight intensity={0.5}/>
                    {/* <Environment path="../../hdri/" files="potsdamer_platz_1k.hdr" /> */}

                    <CameraRig>
                        <Backdrop/>
                        <Center>
                            <Shirt/>
                        </Center>
                    </CameraRig>
                </Canvas>
        </div>
    )
}

export default CanvasModel