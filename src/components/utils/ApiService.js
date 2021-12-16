
import axios from 'axios'

function apiCall (param) {
  return axios
    .get(`https://www.boredapi.com/api/activity${param}`)
    .then((response) => {
      if (response.statusText !== 'OK') {
        throw new TypeError('Couldnt connect to API')
      }
      return response
    })
    .catch(console.error)
}

const activity = (activityType) => {
  try {
    return apiCall(`?type=${activityType}`)
  } catch (error) {
    throw new TypeError(error)
  }
}

export default activity
