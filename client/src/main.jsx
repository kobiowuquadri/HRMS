import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter } from 'react-router-dom'
// import { store } from './redux/store.js'
// import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     {/* <Provider store={store}> */}
        <App/>
     {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
)
