import {routerRedux} from 'dva/router';
import {getToken,setToken} from '../utils/user'
import {login} from '../services/index';
import cookie from 'js-cookie'
import {getRecommend} from '../services/index'
import playPage from '../routes/playPage';
import {getUrl,getDetail} from  './play'

export default {
    namespace:"index",
    state:{
        bannerList:[],
        list:[],
        columnList:[],
        recommend:[],
        searchlist:[],
        playlist:[],//歌曲信息
        playpagelist:[],//歌曲详情
        current:0, // 当前播放歌曲下标
        info:[], // 播放列表
        lyricList:[]
    },
    subscriptions :{
        setup({dispatch,history}){
            return history.listen(({pathname})=>{
             if(pathname!=='/login'){
                 if(!cookie.get('id')){
                    dispatch(routerRedux.replace({
                        pathname:'/login'
                    }))
                 }
             }   
            })
        }
    },
    effects:{//异步请求数据
        * bannerList({payload},{call,put}){
         let res =yield call(()=>{
            return fetch('http://123.206.55.50:14000/banner')
             .then(res=>res.json())
             .then(body=>body)
            })
            yield put({
                type:"changeName",
                payload:res.banners
            })
        },
        * list({payload},{call,put}){
         let res = yield call(()=>{
             return fetch('http://123.206.55.50:14000/personalized')
             .then(res=>res.json())
             .then(body=>body)
         })
         yield put({
            type:"changelist",
            payload:res.result
        })
        },
        * column({payload},{call,put}){
          let res = yield call(()=>{
              return fetch('http://123.206.55.50:14000/program/recommend')
              .then(res=>res.json())
              .then(body=>body)
          })
         yield put({
             type:"changeColumn",
             payload:res.programs
         })
        },
        * login({payload},{call,put}){
            let response = yield call(login,payload);
            //设置token
            cookie.set('id',response.data.account.id)
            console.log(response.data.account.id)
            //setToken(response.data.account.id)
            yield put({
                type:'upduteState',
                payload:response.data
            })
            yield put(routerRedux.replace({
                pathname:'/'
            }))
        },
        * recommend({payload},{call,put}){
            let response= yield call((getrecommend)=>{
                return fetch('http://123.206.55.50:14000/recommend/resource')
                .then(res=>res.json())
                .then(body=>body)
            });
            yield put({
                type:"getrecommend",
                payload:response.recommend
            })
        },
        * search({payload},{call,put}){
          console.log(payload)
          let res = yield call(()=>{
             return fetch('http://123.206.55.50:14000/search?keywords='+payload)
             .then(res=>res.json())
             .then(body=>body)
          })
          yield put({
             type:'changeSearch',
             payload:res.result.songs
         })
        },
        * paly({payload},{call,put}){
            let res = yield call(()=>{
                return fetch('http://123.206.55.50:14000/song/url?id='+payload)
               .then(res=>res.json())
               .then(body=>body)
            })
         yield put({
            type:'changepaly',
            payload:res.data[0].url
        })
        },
        * palyList({payload},{call,put}){
          let res = yield call(()=>{
            return fetch('http://123.206.55.50:14000/song/detail?ids='+payload+','+payload)
            .then(res=>res.json())
            .then(body=>body)
         })
          yield put({
           type:'changepalylist',
           payload:res.songs[0].al
          })
        },
       * getLyric({payload},{call,put}){
        let res = yield call(()=>{
           return fetch('http://123.206.55.50:14000/lyric?id='+payload)
           .then(res=>res.json())
           .then(body=>body)
         })
         yield put({
           type:'changeLyric',
           payload:res.lrc.lyric
       })
      },
    },
//        * getUrls({payload},{call,put}){
//         // console.log(payload)
//             let responses = yield call(getUrl,payload)
//             let details = yield call(getDetail,payload)
//             console.log(responses)
//             console.log(details)
//             responses = responses.data.data;
//             details = details.data.songs;
//             let info=[];
//             details.forEach(item=>{
//                 info.push({
//                     detail:item,
//                     playlist:responses.filter(value=>value.id===item.id)[0]
//                 })
//             })
            
//         //     let res = yield call(()=>{
//         //     return fetch('http://123.206.55.50:14000/search?keywords='+payload)
//         //     .then(res=>res.json())
//         //     .then(body=>body)
//         //    })
//         //    console.log(res)
//         // yield put({
//         //     type:'changeUrls',
//         //     payload:res
//         // })
//         },
       
// },


    reducers: {
        changeName(state,{payload}){
            return {...state,bannerList:payload}
        },
        changelist(state,{payload}){
            return {...state,list:payload}
        },
        changeColumn(state,{payload}){
            return {...state,columnList:payload}
        },
        upduteState(state,action){
            return {...state,...action.payload}
        },
        getrecommend(state,{payload}){
            return {...state,recommend:payload}
        },
        changeSearch(state,{payload}){
            return {...state,searchlist:payload}
        },
        changepaly(state,{payload}){
            return {...state,playlist:payload}
        },
        changepalylist(state,{payload}){
            return {...state,playpagelist:payload}
        },
        changeUrls(state,{payload}){
            return {...state,info:payload}
        },
        changeLyric(state,{payload}){
            return {...state,lyricList:payload}
        }
    }
}