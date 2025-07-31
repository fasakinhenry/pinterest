import { Link } from 'react-router';
import './galleryItem.css';
import IKImage from '../image/image';

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;
  return (
    <div
      className='galleryItem'
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt={"item" + item.id} /> */}
      <IKImage
        path={item.media}
        alt={'pin' + item.id}
        w={372}
        h={optimizedHeight}
      />
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
