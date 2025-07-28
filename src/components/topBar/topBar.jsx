import './topBar.css';

const TopBar = () => {
  return (
    <div className='topBar'>
      {/* Search */}
      <div className='search'>
        <img src='/general/search.svg' alt='search' />
        <input type='text' placeholder='search' />
      </div>
      {/* User */}
      <div className=''></div>
    </div>
  );
};

export default TopBar;
