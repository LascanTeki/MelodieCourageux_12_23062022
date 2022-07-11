import '../Style/Data.css';

import PropTypes from 'prop-types';

function data(prop) {


  let logo = prop.logo

  // returns different unit for the number depending on the type of data being given
  
  if (prop.unit === "Calories") {
    return (
      <div className='data'>
        <img src={logo} alt="icon" className="icon" /><div className='number'>{prop.number}Kcal<div className='unit'>{prop.unit}</div></div>
      </div>
    );
  }
  else {
    return (
      <div className='data'>
        <img src={logo} alt="icon" className="icon" /><div className='number'>{prop.number}g<div className='unit'>{prop.unit}</div></div>
      </div>
    );
  }

}

data.propTypes = {
  logo: PropTypes.string,
  unit: PropTypes.string,
  number: PropTypes.number
};

export default data;