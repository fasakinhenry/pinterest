import './collections.css';
import IKImage from './../image/image';

const Collections = () => {
  return <div className='collections'>
    {/* Collection */}
    <div className="collection">
      <IKImage path="/pins/pin1.jpeg" alt="" />
      <div className="collectionInfo">
        <h1>Minimalist Bedroom</h1>
        <span>12 Pins . 1w</span>
      </div>
    </div>
    {/* Collection */}
    <div className="collection">
      <IKImage path="/pins/pin1.jpeg" alt="" />
      <div className="collectionInfo">
        <h1>Minimalist Bedroom</h1>
        <span>12 Pins . 1w</span>
      </div>
    </div>
    {/* Collection */}
    <div className="collection">
      <IKImage path="/pins/pin1.jpeg" alt="" />
      <div className="collectionInfo">
        <h1>Minimalist Bedroom</h1>
        <span>12 Pins . 1w</span>
      </div>
    </div>
  </div>;
};

export default Collections;
