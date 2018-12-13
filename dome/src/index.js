import dva from 'dva';
import './common.scss';

import '../node_modules/antd/dist/antd.css';
import createHisHory from 'history/createBrowserHistory'
// import ''


let fastCilck = require('fastclick');
fastCilck.attach(document.body)
// 1. Initialize
const app = dva({
    history:createHisHory()
});


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/index').default)
app.model(require('./models/anchor').default)
app.model(require('./models/play').default)
app.model(require('./models/discover').default)
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
