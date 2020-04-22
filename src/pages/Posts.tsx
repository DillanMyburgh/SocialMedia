import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import './Home.css'
import IndvPost from "../components/IndvPost";
import data from "../Data/postData";

const postData = data.map((post) => {
  return (
    <IndvPost
      key={post.id}
      title={post.title}
      subtitle={post.subtitle}
      image={post.image}
    />
  );
});

const Posts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='header' translucent={true}>
        <IonToolbar>
          <IonTitle>Haircut 101</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Haircut 101</IonTitle>
          </IonToolbar>
        </IonHeader>
        {postData}
      </IonContent>
    </IonPage>
  );
};

export default Posts;
