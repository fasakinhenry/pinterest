import IKImage from "../image/image";
import { format } from "timeago.js";

const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <IKImage path={comment.user.img || '/general/noAvatar.png'} alt='avatar' />
      <div className='commentContent'>
        <span className='commentUsername'>{comment.user.username}</span>
        <p className='commentText'>
          {comment.description}
        </p>
        <span className='commentTime'>{format(comment.createdAt)}</span>
      </div>
    </div>
  );
};

export default Comment;
