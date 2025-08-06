import './boards.css';
import IKImage from '../image/image';
import apiRequest from '../../utils/apiRequest';
import { useQuery } from '@tanstack/react-query';

const Boards = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['boards', userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occured: ' + error.message;

  if (!data) return 'Board not found!';

  console.log(data);

  return (
    <div className='boards'>
      {/* Board */}
      {data?.map((board) => (
        <div className='board' key={board._id}>
          <IKImage path={board.firstPin.media} alt='' />
          <div className='boardInfo'>
            <h1>{board.title}</h1>
            <span>{board.pinCount} Pins . {board.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Boards;
