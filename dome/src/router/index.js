//一级路由
import Login from '../routes/LoginPage'
import MainPage from '../routes/MainPage'
import Daily from '../routes/daily'
import Search from '../routes/search'
import PlayPage from '../routes/playPage'
//二级路由
import AccountPage from '../routes/account'
import DiscoverPage from '../routes/discover'
import FriendPage from '../routes/friend'
import MyPage from '../routes/my'
import VideoPage from '../routes/video'

//三级路由
import Individuality from '../routes/discover/individuality'
import Anchor from '../routes/discover/anchor'
export default  {
        routes: [{
            path:"/login",
            component:Login
        },{
            path:"/daily",
            component:Daily
        },{
            path:"/search",
            component:Search
        },{
            path:"/playPage",
            component:PlayPage
        },{
            path:"/MainPage",
            component:MainPage,
            children:[{
                path:"/MainPage/account",
                component:AccountPage,
            },{
                path:"/MainPage/discover",
                component:DiscoverPage,
                children:[{
                    path:"/MainPage/discover/individuality",
                    component:Individuality
                },{
                    path:"/MainPage/discover/anchor",
                    component:Anchor
                }]
            },{
                path:"/MainPage/friend",
                component: FriendPage,
            },{
                path:"/MainPage/my",
                component:MyPage,
            },{
                path:"/MainPage/video",
                component:VideoPage,
            }]
        },{
            path:"/",
            redirect:'/MainPage/discover/individuality'
        }]
    }
