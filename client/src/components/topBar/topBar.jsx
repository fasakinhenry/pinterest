import './topBar.css';
import UserButton from '../userButton/userButton';
import IKImage from './../image/image';
import { useNavigate } from 'react-router';

const TopBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`);
  };
  return (
    <div className='topBar'>
      {/* Search */}
      <form onSubmit={handleSubmit} className='search'>
        <IKImage path='/general/search.svg' alt='search' />
        <input type='text' placeholder='search' />
      </form>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default TopBar;
