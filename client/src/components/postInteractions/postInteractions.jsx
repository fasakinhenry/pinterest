import './postInteractions.css';
import IKImage from './../image/image';

const PostInteractions = () => {
  return (
    <div className='postInteractions'>
      <div className='interactionIcons'>
        <IKImage path='/general/react.svg' alt='React Icon' w={400} h={400} />
        273
        <IKImage path='/general/share.svg' alt='Share Icon' />
        <IKImage path='/general/more.svg' alt='More Icon' />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteractions;
