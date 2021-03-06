
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chatbox  from "./Chatbox";
import FriendList from "./FriendList";
import Menu from "./Menu";
import Profile from "./ProfilePage/Profile";
import Post from "./ProfilePage/Post";
import Image from "./ProfilePage/Image";
import Video from "./ProfilePage/Video";
import GamePage from "./GamePage";
import HotStickersList from "./Sticker-Category/HotStickersList";
import Sticker0001 from "./Details-Stickers/Sticker0001";
import Sticker1001 from "./Details-Stickers/Sticker1001";
import NewStickersList from "./Sticker-Category/NewStickersList";


// Create Component
function Router()  {
    return(
        <BrowserRouter>
        <Switch>
          
            <Route path="/friend-list">
              <FriendList />
            </Route>

            <Route path="/menu">
              <Menu />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/Post">
              <Post />
            </Route>

            <Route path="/Image">
              <Image />
            </Route>

            <Route path="/Video">
              <Video />
            </Route>

            <Route path="/game-page">
              <GamePage />
            </Route>

            <Route path="/Chatbox">
              <Chatbox />
            </Route>

            <Route path="/HotStickersList">
              <HotStickersList />
            </Route>

            <Route path="/NewStickersList">
              <NewStickersList />
            </Route>

            <Route path="/Sticker0001">
              <Sticker0001 />
            </Route>

            <Route path="/Sticker1001">
              <Sticker1001 />
            </Route>

            <Route path="/">
              <Chatbox />
            </Route>

        </Switch>
        </BrowserRouter>

    )
};

export default Router; //Run Router

