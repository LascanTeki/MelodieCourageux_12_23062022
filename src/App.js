
import './App.css';

import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Title from './Component/Title'
import Duree from './Component/Duree'
import Data from './Component/Data'
import Activite from './Component/Activite'
import Intensite from './Component/Intensite'
import Score from './Component/Score'

import { Api } from './Component/API'
import Mock from './Component/Mock'

//imports the images for tha data
import cal from './Assets/calories-icon.png'
import carb from './Assets/carbs-icon.png'
import protein from './Assets/protein-icon.png'
import fat from './Assets/fat-icon.png'

import { useState, useEffect } from 'react';

/**
 * Main function building the page together with it's components
 * @returns html
 */
function App() {

  const [list, setName] = useState([]);


  //Fetches the informations from the API, using the coponent "API", and stores it in a Usestate, remove comment for API
  /*useEffect(() => {
    Api(18)
      .then(response => response)
      .then(data => setName(data));
  }, [])*/

  //mocked content, add comment for API
  useEffect(() => {
    setName(Mock())
  }, [])

  if (list[0] !== undefined) {

    let name = list[0]
    let duree = list[1]
    let activitee = list[2]
    let intensitee = list[3]

    let value

    //the score value name isn't the same on the 2 ids
    if (name.data.id === 18) {
      value = name.data.score * 100
    }
    else {
      value = name.data.todayScore * 100
    }

    let intensite = intensitee.data

    let calories = name.data.keyData.calorieCount
    let proteins = name.data.keyData.proteinCount
    let carbs = name.data.keyData.carbohydrateCount
    let fats = name.data.keyData.lipidCount


    return (
      <div className="App">

        < Header />
        <Sidebar />
        <Title name={name} />

        <Activite act={activitee} />

        <div className='low'>
          <Duree Duree={duree} />
          <Intensite inte={intensite} />
          <Score score={value} />
        </div>

        <div className='datas'>
          <Data logo={cal} number={calories} unit="Calories" />
          <Data logo={protein} number={proteins} unit="Proteines" />
          <Data logo={carb} number={carbs} unit="Glucides" />
          <Data logo={fat} number={fats} unit="Lipides" />
        </div>
      </div>
    );
  }
  return ("...")
}

export default App;
