
import './App.css';

import Header from './Component/Header'
import Sidebar from './Component/Sidebar'
import Title from './Component/Title'
import Duree from './Component/Duree'
import Data from './Component/Data'
import Activite from './Component/Activite'
import Intensite from './Component/Intensite'
import Score from './Component/Score'

import { api } from './Component/API'

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


  //Fetches the informations from the API, using the coponent "API", and stores it in a Usestate
  useEffect(() => {
    api(12)
      .then(response => response)
      .then(data => setName(data));
  }, [])

  if (list[0] !== undefined) {

    let name = list[0]
    let dur = list[1]
    let act = list[2]
    let inte = list[3]

    //the score value name isn't the same on the 2 ids
    let value
    if (name.data.id===18) {
      value = name.data.score * 100
    }
    else{
      value = name.data.todayScore * 100
    }

    let title = name

    let intensite = inte.data

    let Cal = name.data.keyData.calorieCount
    let Protein = name.data.keyData.proteinCount
    let Carb = name.data.keyData.carbohydrateCount
    let Fat = name.data.keyData.lipidCount


    return (
      <div className="App">

        < Header />
        <Sidebar />
        <Title name={title} />

        <Activite act={act} />

        <div className='low'>
          <Duree Duree={dur} />
          <Intensite inte={intensite} />
          <Score score={value} />
        </div>

        <div className='datas'>
          <Data logo={cal} number={Cal} unit="Calories" />
          <Data logo={protein} number={Protein} unit="Proteines" />
          <Data logo={carb} number={Carb} unit="Glucides" />
          <Data logo={fat} number={Fat} unit="Lipides" />
        </div>
      </div>
    );
  }
  return ("...")
}

export default App;
