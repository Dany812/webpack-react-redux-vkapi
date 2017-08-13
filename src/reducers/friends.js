import {
  FRIENDS_SUCCES
} from '../constants/Friends'


const initialState = {
  friend: {} 
}

export default function user(state = initialState, action ) {

  switch(action.type) {
    case FRIENDS_SUCCES:
      return { ...state, friend: action.payload, error: '' }

    default:
      return state
  }

}