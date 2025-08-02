import './profilePage.css';
import IKImage from './../../components/image/image';

const ProfilePage = () => {
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
        <span>Created</span>
        <span>Saved</span>
      </div>
    </div>
  );
};

export default ProfilePage;
