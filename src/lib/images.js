import { readFileSync, readdirSync } from 'fs';
import path from 'path';

const imagesPath = index => `ezgif-frame-${index < 100 ? (index < 10 ? `00${index}` : `0${index}`) : index.toString()}.png`;

const origin = path.join(process.cwd(), 'data', 'split');

export const getAllImages = () => {
  let images = readdirSync(origin);
  for (let i = 0; i < images.length; i++) {
    images[i] = path.join(origin, images[i]);
  }

};


export const getImagesId = (id) => readFileSync(path.join(origin, imagesPath(id)));
