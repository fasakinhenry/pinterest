import './postPage.css';
import IKImage from './../../components/image/image';

const PostPage = () => {
  return (
    <div className='postPage'>
      <div className='postContainer'>
        <div className='postImg'>
          <IKImage path='/pins/pin1.jpeg' alt='Post Image' w={736} />
        </div>
        <div className='postDetails'></div>
      </div>
    </div>
  );
};

export default PostPage;
