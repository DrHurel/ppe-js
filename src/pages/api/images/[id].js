import { getImagesId } from '../../../lib/images';


export default function handler(req, res) {
  const { id } = req.query;
  if (id > 92 || id < 1) {
    res.status(404).json({ error: 'Not found' });
  }

  const imagesToServe = getImagesId(id);

  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(imagesToServe);
}
