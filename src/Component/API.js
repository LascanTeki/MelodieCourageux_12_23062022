
import PropTypes from 'prop-types';

/**
 * function that handles the fetch of the API
 * @param {number} id 
 */

export async function api(id) {

  let response = await fetch(`http://localhost:3000/user/${id}`)
  response = await response.json()
  let dure = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
  dure = await dure.json()
  let activ = await fetch(`http://localhost:3000/user/${id}/activity`)
  activ = await activ.json()
  let int = await fetch(`http://localhost:3000/user/${id}/performance`)
  int = await int.json()
  return ([response, dure, activ, int])
}

api.propTypes = {
  id: PropTypes.number,
};