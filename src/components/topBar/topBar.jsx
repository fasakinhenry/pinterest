import './topBar.css';
import UserButton from '../userButton/userButton';

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* Search */}
      <div className='search'>
        <img src='/general/search.svg' alt='search' />
        <input type='text' placeholder='search' />
      </div>
      {/* User */}
      <UserButton />
    </div>
  );
};

export default TopBar;
