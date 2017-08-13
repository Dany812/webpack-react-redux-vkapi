import {
  FRIENDS_SUCCES
} from '../constants/Friends'


export function friendLoad() {

  return function(dispatch) {
  let friend = []
  VK.Api.call('friends.get', {order: 'random',count: 5, fields: 'sex,photo_100,photo_50,online' }, function(res) {// eslint-disable-line no-undef
        if(res.response){
        friend = res.response
        for (let i in friend ){
          if (friend[i].sex==1){
            friend[i].sex = 'Женский'
          }else {
            friend[i].sex = 'Мужской'
          }
        }
        for (let i in friend ){
          if (friend[i].online==1){
            friend[i].online = 'Online'
          }else {
            friend[i].online = 'Offline'
          }
        }
          dispatch({type: FRIENDS_SUCCES,payload: friend})   
        }
      }) 
    

  }

}