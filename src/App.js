
import './App.css';
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Title from './Component/Title'
import Duree from './Component/Duree'
import Data from './Component/Data'
import Activite from './Component/Activite'
import Intensite from './Component/Intensite'
import cal from './Assets/calories-icon.png'
import carb from './Assets/carbs-icon.png'
import protein from './Assets/protein-icon.png'
import fat from './Assets/fat-icon.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Title/>
      <Duree/>
      <div className='datas'>
      <Data logo={cal} number="1,930kCal" unit="Calories" />
      <Data logo={protein} number="1,930kCal" unit="Calories" />
      <Data logo={carb} number="1,930kCal" unit="Calories" />
      <Data logo={fat} number="1,930kCal" unit="Calories" />
      </div>
      <Activite/>
      <Intensite/>
    </div>
  );
}

export default App;
