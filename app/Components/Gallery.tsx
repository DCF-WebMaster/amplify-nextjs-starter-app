// components/Gallery.tsx

import styles from './Gallery.module.css';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg', // Add paths to your images here
];

const Gallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery image ${index + 1}`} className={styles.image} />
      ))}
    </div>
  );
};

export default Gallery;
