import './commentForm.css';

const CommentForm = () => {
  return (
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
  );
};

export default CommentForm;
