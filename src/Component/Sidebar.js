import '../Style/Sidebar.css';
import Bike from '../Assets/Bike.png'
import Lifting from '../Assets/Lifting.png'
import Medi from '../Assets/Medi.png'
import Swim from '../Assets/Swim.png'

function Sidebar() {
  return (
    <div className='side'>
      <div className="icons">
      <img src={Medi} alt="Meditation"/>
      <img src={Swim} alt="Swimming"/>
      <img src={Bike} alt="Biking"/>
      <img src={Lifting} alt="Lifting"/>
      </div>
      <div className='Copyright'>Copiryght, SportSee 2020</div>
    </div>
  );
}

export default Sidebar;
