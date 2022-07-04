
import './App.css';
import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Title from './Component/Title'
import Duree from './Component/Duree'
import Data from './Component/Data'
import Activite from './Component/Activite'
import Intensite from './Component/Intensite'
import Score from './Component/Score'
import cal from './Assets/calories-icon.png'
import carb from './Assets/carbs-icon.png'
import protein from './Assets/protein-icon.png'
import fat from './Assets/fat-icon.png'


import { useState, useEffect } from 'react';


function App() {

  const [name, setName] = useState({
    data: {

      id: 12,
      userInfos: {
        firstName: '...',
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 0,
        proteinCount: 0,
        carbohydrateCount: 0,
        lipidCount: 0
      },
    }
  });

  const [inte, setinte] = useState({
    data: {"userId":12,"kind":{"1":"cardio","2":"energy","3":"endurance","4":"strength","5":"speed","6":"intensity"},"data":[{"value":80,"kind":1},{"value":120,"kind":2},{"value":140,"kind":3},{"value":50,"kind":4},{"value":200,"kind":5},{"value":90,"kind":6}]}
  });

  useEffect(() => {
    api();
    Int()
  })

  const api = async () => {

    await fetch('http://localhost:3000/user/12')
      .then(response => response.json())
      .then(data => setName(data))
      
  }

  let value = name.data.todayScore * 100

  const Int = async () => {

    await fetch('http://localhost:3000/user/12/performance')
      .then(response => response.json())
      .then(data => setinte(data))
      
  }

  let intensite = inte.data

  return (
    <div className="App">

      < Header />
      <Sidebar />
      <Title name={name.data.userInfos.firstName} />
      <Duree />
      <div className='datas'>
        <Data logo={cal} number={name.data.keyData.calorieCount} unit="Calories" />
        <Data logo={protein} number={name.data.keyData.proteinCount} unit="Proteines" />
        <Data logo={carb} number={name.data.keyData.carbohydrateCount} unit="Glucides" />
        <Data logo={fat} number={name.data.keyData.lipidCount} unit="Lipides" />
      </div>
      <Activite />
      <Intensite inte={intensite} />
      <Score score={value} />
    </div>
  );
}

export default App;
