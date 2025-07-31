import { useState } from 'react';
import './userButton.css';
import IKImage from '../image/image';

const UserButton = () => {
  const [open, setOpen] = useState(false);

  // TEMP
  const currentUser = true;

  return currentUser ? (
    <div className='userButton'>
      <IKImage path='/general/noAvatar.png' alt='avatar' />
      <IKImage
        onClick={() => setOpen((prev) => !prev)}
        path='/general/arrow.svg'
        alt='arrow'
        className='arrow'
      />
      {open && <div className='userOptions'>
        <div className='userOption'>Profile</div>
        <div className='userOption'>Settings</div>
        <div className='userOption'>Logout</div>
      </div>}
    </div>
  ) : (
    <a href='/' className='loginLink'>
      Login / Sign up
    </a>
  );
};

export default UserButton;
