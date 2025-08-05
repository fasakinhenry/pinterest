import './profilePage.css';
import IKImage from './../../components/image/image';
import { useState } from 'react';
import Gallery from './../../components/gallery/gallery';
import Collections from '../../components/collections/collections';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';

const ProfilePage = () => {
  const [type, setType] = useState('saved');

  const { username } = useParams();
  
  const { isPending, error, data } = useQuery({
    queryKey: ['pin', username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occured: ' + error.message;

  if (!data) return 'User not found!';

  return (
    <div className='profilePage'>
      <IKImage
        className='profileImg'
        w={100}
        h={100}
        path='general/noAvatar.png'
      />
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@johndoe</span>
      <div className='followCounts'>10 followers . 20 following</div>
      <div className='profileInteractions'>
        <IKImage path='general/share.svg' alt='Share Icon' />
        <div className='profileButtons'>
          <button>Message</button>
          <button>Follow</button>
        </div>
        <IKImage path='general/more.svg' alt='More Icon' />
      </div>
      <div className='profileOptions'>
        <span
          onClick={() => setType('created')}
          className={type === 'created' ? 'active' : ''}
        >
          Created
        </span>
        <span
          onClick={() => setType('saved')}
          className={type === 'saved' ? 'active' : ''}
        >
          Saved
        </span>
      </div>
      {type === 'created' ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
