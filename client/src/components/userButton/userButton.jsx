import { useState } from 'react';
import './userButton.css';
import IKImage from '../image/image';
import apiRequest from './../../utils/apiRequest';
import { Link, useNavigate } from 'react-router';
import useAuthStore from '../../utils/authStore';

const UserButton = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { currentUser } = useAuthStore();

  console.log(currentUser)

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
    <Link to='/auth' className='loginLink'>
      Login / Sign up
    </Link >
  );
};

export default UserButton;
