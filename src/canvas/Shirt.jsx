import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/test.glb');
  console.log(nodes, materials)
  const logoTexture = useTexture(snap.logoDecal);
  const logoTextureBack = useTexture(snap.logoDecalBack);

  const fullTexture = useTexture(snap.fullDecal);
  const isMobile = window.innerWidth <= 600;

  useFrame((state, delta) => easing.dampC(materials.entity_1.color, snap.color, 0.25, delta));
  const stateString = JSON.stringify(snap);

  console.log(snap.tShirtBack)
  return (

    <>
      <group key={stateString}>
        <mesh
          castShadow
          geometry={nodes.T_Shirt_male.geometry}
          material={materials.entity_1}
          material-roughness={1}
          dispose={null}
          rotation={[0, snap.tShirtBack ? 3 : 0, 0]}
          position={snap.step3 && !isMobile ? [-0.3, 0, 0] : [0, 0, 0]}
        >
          {snap.isFullTexture && (
            <Decal
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
              map={fullTexture}
            />
          )}

          {snap.isLogoTexture && (
            <Decal
              rotation={[0, 0, 0]}
              scale={0.10}
              map={logoTexture}
              map-anisotropy={16}
              depthTest={false}
              depthWrite={true}
              position={[0.09, 0.1, 0.1]}
              rotation={[0, 0, 0]}
              scale={.1}
              style={{ background: 'red' }}
            />
          )}


          {snap.tShirtBack && (
            <Decal
              position={[0, 0, -0.18]}
              rotation={[0, 0, 0]}
              scale={.20}
              map={logoTextureBack}
            />
          )}

        </mesh>
      </group>
      {snap.step3 && (
        <group key={stateString}>
          <mesh
            castShadow
            geometry={nodes.T_Shirt_male.geometry}
            material={materials.entity_1}
            material-roughness={1}
            dispose={null}
            rotation={[0, 3, 0]}
            position={isMobile ? [0,-0.7,0] : [0.3, 0, 0]}
          >


            <Decal
              position={[0, 0, -0.18]}
              rotation={[0, 0, 0]}
              scale={.20}
              map={logoTextureBack}
            />

          </mesh>
        </group>
      )}

    </>
  )
}

export default Shirt