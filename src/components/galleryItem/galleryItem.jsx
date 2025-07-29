import './galleryItem.css';

const GalleryItem = ({ item }) => {
  return (
    <div className='galleryItem'>
      <img src={item.media} alt={'item' + item.id} />
    </div>
  );
};

export default GalleryItem;
