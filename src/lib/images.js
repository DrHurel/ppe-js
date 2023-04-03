import { readFileSync, readdirSync } from 'fs';
import path from 'path';  


const origin = path.join(process.cwd(),'data','split');

export const getAllImages = () => {
  let images = readdirSync(origin);
  for (let i = 0; i < images.length; i++) {
    images[i] = path.join(origin, images[i]);
  }

};


export const getImagesFromPath = (path) => readFileSync(path);
