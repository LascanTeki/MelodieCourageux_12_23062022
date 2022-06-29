import '../Style/Data.css';

function data(prop) {

    let logo = prop.logo

  return (
    <div className='data'>
      <img src={logo} alt="icon" className="icon"/><div className='number'>{prop.number}<div className='unit'>{prop.unit}</div></div>
    </div>
  );
}

export default data;