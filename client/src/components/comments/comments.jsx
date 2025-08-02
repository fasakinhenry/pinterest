import './comments.css';
import IKImage from './../image/image';

const Comments = () => {
  return (
    <div className='comments'>
      <div className='commentList'>
        <span className='commentCount'>5 comments</span>
        <div className='comment'>
          <IKImage path='/general/noAvatar.png' alt='avater' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className='commentTime'>1hr</span>
          </div>
        </div>
        <div className='comment'>
          <IKImage path='/general/noAvatar.png' alt='avater' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className='commentTime'>1hr</span>
          </div>
        </div>
        <div className='comment'>
          <IKImage path='/general/noAvatar.png' alt='avater' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className='commentTime'>1hr</span>
          </div>
        </div>
        <div className='comment'>
          <IKImage path='/general/noAvatar.png' alt='avater' />
          <div className='commentContent'>
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className='commentTime'>1hr</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input type="text" placeholder='Add a comment' />
        <div className="emoji">
          <div>😅</div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
