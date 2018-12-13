export default {
    namespace:'anchor',
    state:{
        list:[]
    },
    effects:{
        * list({payload},{call,put}){
          let res = yield call(()=>{
              return fetch('http://123.206.55.50:14000/personalized/djprogram')
              .then(res=>res.json())
              .then(body=>body)
          })
          console.log(res)
          yield put({
              type:'changelist',
              payload:res.result
          })
        }
    },
    reducers: {
        changelist(state,{payload}){
            return {...state,list:payload}
        }
    }
}