import './comments.css';
import IKImage from './../image/image';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

const Comments = () => {
  const [open, setOpen] = useState(false);
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
      <form className='commentForm'>
        <input type='text' placeholder='Add a comment' />
        <div className='emoji'>
          <div onClick={() => setOpen((prev) => !prev)}>😅</div>
          {open && (
            <div className='emojiPicker'>
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
