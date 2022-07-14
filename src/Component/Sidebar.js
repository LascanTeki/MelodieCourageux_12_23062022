import '../Style/Sidebar.css';
import Bike from '../Assets/Bike.png'
import Lifting from '../Assets/Lifting.png'
import Medi from '../Assets/Medi.png'
import Swim from '../Assets/Swim.png'
/**
 * Component for generating the sidebar.
 * @component
 */
function Sidebar() {
  
  return (
    <div className='side'>
      <div className="icons">
      <a href='#'><img src={Medi} alt="Meditation"/></a>
      <a href='#'> <img src={Swim} alt="Swimming"/></a>
      <a href='#'><img src={Bike} alt="Biking"/></a>
      <a href='#'><img src={Lifting} alt="Lifting"/></a>
      </div>
      <div className='Copyright'>Copiryght, SportSee 2020</div>
    </div>
  );
}

export default Sidebar;
