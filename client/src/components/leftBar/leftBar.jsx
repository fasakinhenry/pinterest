import IKImage from '../image/image';
import { Link } from 'react-router-dom';
import './leftBar.css';

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='menuIcons'>
        <Link to='/' className='menuIcon'>
          <IKImage path='/general/logo.png' alt='logo' className='logo' />
        </Link>
        <Link to='/' className='menuIcon'>
          <IKImage path='/general/home.svg' alt='home' />
        </Link>
        <Link to='/' className='menuIcon'>
          <IKImage path='/general/create.svg' alt='create' />
        </Link>
        <Link to='/' className='menuIcon'>
          <IKImage path='/general/updates.svg' alt='updates' />
        </Link>
        <Link to='/' className='menuIcon'>
          <IKImage path='/general/messages.svg' alt='messages' />
        </Link>
      </div>
      <Link to='/' className='menuIcon'>
        <IKImage path='/general/settings.svg' alt='messages' />
      </Link>
    </div>
  );
};

export default LeftBar;
