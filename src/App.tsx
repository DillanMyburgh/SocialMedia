import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonLabel,
  IonIcon,
  IonTabButton,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import Home from './pages/Home';
import Settings from "./pages/Settings";
import Posts from "./pages/Posts";
import { Route, Redirect } from "react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";


const App = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path='/settings' component={Settings} exact />
          <Route path='/posts' component={Posts} exact />
          <Redirect from='/' to='/home' />
        </IonRouterOutlet>

        <IonTabBar color='secondary' slot="bottom" selectedTab="home">
          <IonTabButton tab="home" href='/home'>
            <IonIcon name="home-outline" />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href='/settings'>
            <IonIcon name="settings-outline" />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="posts" href='/posts'>
            <IonIcon name="disc-outline" />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}

export default App