import '../Style/Title.css';

import PropTypes from 'prop-types';
/**
 Component for generating the welcoming message.
 * @component
 * @param {*} props 
 */
function title(props) {

    let name = props.name.data.userInfos.firstName

    return (
      <div className='title'>
        <div className='name'>Bonjour <span>{name}</span></div>
        <div className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
      </div>
    );
  ;
}

title.propTypes = {
  name: PropTypes.object,
};

export default title;