import IKImage from '../image/image';
import './leftBar.css';

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <a href='/' className='menuIcon'>
          <IKImage path='/general/logo.png' alt='logo' className='logo' />
        </a>
        <a href='/' className='menuIcon'>
          <IKImage path='/general/home.svg' alt='home' />
        </a>
        <a href='/' className='menuIcon'>
          <IKImage path='/general/create.svg' alt='create' />
        </a>
        <a href='/' className='menuIcon'>
          <IKImage path='/general/updates.svg' alt='updates' />
        </a>
        <a href='/' className='menuIcon'>
          <IKImage path='/general/messages.svg' alt='messages' />
        </a>
      </div>
      <a href='/' className='menuIcon'>
        <IKImage path='/general/settings.svg' alt='messages' />
      </a>
    </div>
  );
};

export default LeftBar;
