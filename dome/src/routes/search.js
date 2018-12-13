// import React from 'react';
// import {connect} from 'dva'

// import Style from './search.css'

// // @connect(({discover})=>{
// //    dispatch=>{
// //     return {
// //         playAll:payload=>{
// //             dispatch({
// //                 type:'play/getUrls',
// //                 payload
// //             })
// //         }
// //     }
// // }
// // })

// class Search extends React.PureComponent {

//     goPage(id){
//         this.props.history.push('/playPage',id)
//     }
//     //搜索功能
//     search(){
//         let search=this.refs.search.value;
//         if(search){
//             this.props.changeSearch(search)
//         }
//     }
//     //播放全部
//     playAll(){
//         console.log(this.props.search[0])
//         this.props.playAll(this.props.search.map(itm=>itm.id));
//         this.props.history.push(`/playPage/$(this.props.search[0].id)`)
//     }
//     render() {
//         const {search} = this.props
//         return (
//             <div>
//                 <input type="text" ref="search"/>
//                 <button onClick={this.search.bind(this)}>搜索</button>
//                 <button onClick={this.playAll.bind(this)}> 播放全部</button>
//                 <ul>
//                     {
//                      search.map((itm,ind)=>{
//                            return <li key={itm.id} onClick={()=>{this.goPage(itm.id)}}>
//                                <em key={itm.id} >{itm.name}</em>
//                                <span>{`${itm.artists[0].name}-${itm.album.name}`}</span>
//                            </li>
//                            console.log(itm.id)
//                        })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }

// const mapToProps = (state)=>{
//     return {search:state.index.searchlist}
// }

// const SearchList =dispatch=>{
//     return {
//         changeSearch:type=>{
//             dispatch({
//                 type:'index/search',
//                 payload:type
//             })
//         },
//         playAll:type=>{
//             dispatch({
//                 type:'play/getUrls',
//                 payload:type
//             })
//         }
//     }
// }

//export default connect(mapToProps,SearchList)(Search);


import React from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import styles from './search.css';

@connect(({discover})=>{
  let {songs, songCount} = discover;
  return {
    songs,
    songCount
  }
}, dispatch=>{
  return {
    search: payload=>{
      dispatch({
        type: 'discover/search',
        payload
      })
    },
    playAll: payload=>{
      dispatch({
        type: 'play/getUrls',
        payload
      })
    }
  }
})
class Search extends React.PureComponent{
  componentDidMount(){
    // this.props.getRecommendResource();
  }

  // 搜索功能
  search(){
    let search = this.refs.search.value;
    if (search){
      this.props.search(search);
    }
  }

  goPlay(id){
    this.props.history.push('/playPage',id)
  }

  // 播放全部
  playAll(){
    this.props.playAll(this.props.songs.map(item=>item.id));
    this.props.history.push(`/playPage/${this.props.songs[0].id}`);
  }

  render(){
    let {songs} = this.props;
    return <div>
          <div className='cloud_music_header'>
              <span className='cloud_music_icon'></span>
              <input placeholder="搜索音乐,视频,歌词,电台" ref="search" className='cloud_music_search'></input>
              <button onClick={this.search.bind(this)} className='music_search_click'>搜索</button>
              <button onClick={this.playAll.bind(this)} className='music_play_click'>播放全部</button>
          </div>
      <ul>{
        songs.map((item, index)=>{
          return <div onClick={()=>{this.goPlay(item.id)}} key={index}>
            <li className={styles.item}>
              <p className='music_song_first_name'>
                <span className='music_list_heart'></span>
                <span className='music_list_download'></span>
                {item.name}
              </p>
              <p className='music_song_name'>{`${item.artists[0].name}-${item.album.name}`}</p>
            </li>
          </div>
        })
      }</ul>
    </div>
  }
}

export default Search;