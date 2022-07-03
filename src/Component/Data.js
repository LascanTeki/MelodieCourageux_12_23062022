import '../Style/Data.css';

function data(prop) {

  let logo = prop.logo

  if (prop.unit === "Calories") {
    return (
      <div className='data'>
        <img src={logo} alt="icon" className="icon" /><div className='number'>{prop.number}Kcal<div className='unit'>{prop.unit}</div></div>
      </div>
    );
  }
  else{
  return (
    <div className='data'>
      <img src={logo} alt="icon" className="icon" /><div className='number'>{prop.number}g<div className='unit'>{prop.unit}</div></div>
    </div>
  );
}
}

export default data;