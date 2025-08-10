import { useState } from 'react';
import './userButton.css';
import IKImage from '../image/image';
import apiRequest from './../../utils/apiRequest';
import { useNavigate } from 'react-router';

const UserButton = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // TEMP
  const currentUser = true;

  const handleLogout = async () => {
    try {
      await apiRequest.post('/users/auth/logout', {});
      navigate('/auth');
    } catch (err) {
      console.log(err);
    }
  };
  return currentUser ? (
    <div className='userButton'>
      <IKImage path='/general/noAvatar.png' alt='avatar' />
      <div onClick={() => setOpen((prev) => !prev)}>
        <IKImage path='/general/arrow.svg' alt='arrow' className='arrow' />
      </div>
      {open && (
        <div className='userOptions'>
          <div className='userOption'>Profile</div>
          <div className='userOption'>Settings</div>
          <div className='userOption' onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <a href='/' className='loginLink'>
      Login / Sign up
    </a>
  );
};

export default UserButton;
