import { Link } from 'react-router';
import './galleryItem.css';
import { Image } from '@imagekit/react';

const GalleryItem = ({ item }) => {
  return (
    <div
      className='galleryItem'
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Image urlEndpoint={urlEndpoint} src={item.media} />
      <Link to={`/pin/${item.id}`} className='overlay' />
      <button className='saveButton'>Save</button>
      <div className='overlayIcons'>
        <button>
          <img src='/general/share.svg' alt='share icon' />
        </button>
        <button>
          <img src='/general/more.svg' alt='share icon' />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
