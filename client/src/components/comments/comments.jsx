import './comments.css';
import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
import Comment from './Comment';
import CommentForm from './commentForm';

const Comments = ({ id }) => {
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
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <CommentForm />
    </div>
  );
};

export default Comments;
