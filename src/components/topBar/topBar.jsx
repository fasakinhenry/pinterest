import './topBar.css';
import UserButton from '../userButton/userButton';
import IKImage from './../image/image';

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* Search */}
      <div className='search'>
        <IKImage path='/general/search.svg' alt='search' />
        <input type='text' placeholder='search' />
      </div>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default TopBar;
