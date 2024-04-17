export {};

type TwoDim = {
  x: number;
  y: number;
};

type OneDim = {
  z: number;
};

type ThreeDim = TwoDim & OneDim;

const value: ThreeDim = {
  x: 10,
  y: 12,
  z: 8,
};
console.log(value); // { x: 10, y: 12, z: 8 }
