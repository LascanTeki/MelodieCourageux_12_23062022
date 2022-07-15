
import PropTypes from 'prop-types';

/**
 * function that handles the fetch of the API
 * @param {number} id 
 */

export async function Api(id) {

  let response = await fetch(`http://localhost:3000/user/${id}`)
  response = await response.json()
  let duree = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
  duree = await duree.json()
  let activitee = await fetch(`http://localhost:3000/user/${id}/activity`)
  activitee = await activitee.json()
  let intensite = await fetch(`http://localhost:3000/user/${id}/performance`)
  intensite = await intensite.json()
  return ([response, duree, activitee, intensite])
}

Api.propTypes = {
  id: PropTypes.number,
};