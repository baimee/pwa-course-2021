import './App.css';
import {Link} from 'react-router-dom';

function App({children}) {

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">

        </div>

        <div className="App-logo Button">

             <Link to = "/profile">
               <image>
               <img src ="buttonProfile.png"/>
               </image>
             </Link>

             <Link to = "/friend-list">
               <image>
               <img src ="buttonFriend.png"/>
               </image>
             </Link>

             <Link to = "/App">
               <image>
               <img src ="buttonMenu.png"/>
               </image>
             </Link>

             <Link to = "/HotStickersList">
               <image>
               <img src ="buttonShop.png"/>
               </image>
             </Link>

             <Link to = "/game-page">
               <image>
               <img src ="buttonGame.png"/>
               </image>
             </Link>

            <Link to ="/menu">
              <image>
              <img src ="down32.png" align ="right"/>
              </image>
            </Link>  
        </div>
      </div>

      <div className="App-content">
        {children}
      </div>
      </div>
    );
};

export default App;
