import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: 'white',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  logoDecalBack: './threejs-back.png',
  fullDecal: './threejs.png',
});

export default state;