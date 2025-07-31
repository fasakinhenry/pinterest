import './postPage.css';
import IKImage from './../../components/image/image';
import PostInteractions from './../../components/postInteractions/postInteractions';
import { Link } from 'react-router';

const PostPage = () => {
  return (
    <div className='postPage'>
      <div className='postContainer'>
        <div className='postImg'>
          <IKImage path='/pins/pin1.jpeg' alt='Post Image' w={736} />
        </div>
        <div className='postDetails'>
          <PostInteractions />
          <Link to='/john' className='postUser'>
            <IKImage path='/general/noAvatar.png' alt='User Avatar' />
            <span>John Doe</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
