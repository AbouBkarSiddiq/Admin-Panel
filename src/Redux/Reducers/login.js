import { LOGIN_ADMIN } from '../Constants'
const logged = (state = false, action) => {
  switch (action.type) {
    case LOGIN_ADMIN:
      return !state;
    default:
      return state
  }
}
export default logged;