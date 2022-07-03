import '../Style/Title.css';

function title(props) {

  let name = "Karl"

  return (
    <div className='title'>
      <div className='name'>Bonjour <span>{name}</span></div>
      <div className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
  );
}

export default title;