import {
  LOGIN_REQUEST,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  LOGOUT
} from '../constants/User'

function UserData(dispatch){
  VK.Api.call('users.get', { fields: 'sex,uid,first_name,last_name,city,bdate,photo_200_orig,counters' }, function(res) {// eslint-disable-line no-undef
    let name 
    if(res.response){
      name = res.response[0];
      VK.Api.call('database.getCitiesById', {city_ids:res.response[0].city}, function(res) {// eslint-disable-line no-undef
        if(res.response){
        name.city = res.response[0].name; 
        if (name.sex==1){
            name.sex = 'Женский'
          }else {
            name.sex = 'Мужской'
          }
          dispatch({
            type: LOGIN_SUCCES,
            payload: name
          })    
        }
      }) 
    } else{
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка')
        })
      }
  })    
}

export function handleLogin() {

  return function(dispatch) {

    dispatch({
      type: LOGIN_REQUEST
    })
    VK.Auth.login((res) =>{ // eslint-disable-line no-undef 
      if (res.status === 'connected') {
        UserData(dispatch)
      }
    }, 4194314 )

  }

}

export function checkAuth() {

  return function(dispatch){

    UserData(dispatch) 

  }

}

export function logout() {

  return function(dispatch){
    VK.Auth.logout() // eslint-disable-line no-undef 
    let name = ''
     dispatch({
      type: LOGOUT,
      payload: name
    })

  }

}