import './comments.css';
import IKImage from './../image/image';
import { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';

const Comments = ({ id }) => {
  const [open, setOpen] = useState(false);

  const { isPending, error, data } = useQuery({
    queryKey: ['comments', id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occured: ' + error.message;

  if (!data) return 'Board not found!';

  console.log(data);

  return (
    <div className='comments'>
      <div className='commentList'>
        <span className='commentCount'>
          {data.length === 0 ? 'No comments' : data.length + ' Comments'}
        </span>
        {data?.map((comment) => (
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
        ))}
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
