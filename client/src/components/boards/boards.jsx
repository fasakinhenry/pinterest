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
      {/* Collection */}
      <div className='collection'>
        <IKImage path='/pins/pin1.jpeg' alt='' />
        <div className='collectionInfo'>
          <h1>Minimalist Bedroom</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      {/* Collection */}
      <div className='collection'>
        <IKImage path='/pins/pin1.jpeg' alt='' />
        <div className='collectionInfo'>
          <h1>Minimalist Bedroom</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      {/* Collection */}
      <div className='collection'>
        <IKImage path='/pins/pin1.jpeg' alt='' />
        <div className='collectionInfo'>
          <h1>Minimalist Bedroom</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
    </div>
  );
};

export default Boards;
