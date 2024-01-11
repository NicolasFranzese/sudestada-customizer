import { swatch, fileIcon, ai, logoShirt, stylishShirt, tShirtFront, tShirtBack } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: tShirtFront,
  },
  {
    name: "filepicker-back",
    icon: tShirtBack,
  }
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  logoBack: {
    stateProperty: "logoDecalBack",
    filterTab: "logoShirtBack",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
