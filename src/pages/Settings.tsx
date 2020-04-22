import React from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
} from "@ionic/react";


const Settings = () => {
  return (
    <IonPage>
      <IonHeader className='header' translucent={true}>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <h1>This is some settings</h1>
        <ul>
          <li>Display</li>
          <li>Sound</li>
          <li>External</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          explicabo corrupti voluptates laudantium est cumque maiores, sequi
          amet facere consequuntur? Ullam velit quos culpa vero nesciunt.
          Nesciunt quam blanditiis quaerat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit repudiandae possimus doloribus
          earum! Dicta nobis, dolorem unde illo atque ipsam aperiam libero
          incidunt perferendis itaque facere nemo, mollitia voluptatem nam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
          veniam reprehenderit non! Eveniet, nam! Ut neque explicabo ullam hic
          nulla quaerat molestias beatae dolor tenetur debitis, reiciendis aut
          aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Expedita tempore consequatur corrupti quam accusamus pariatur earum
          placeat illo repudiandae nemo nesciunt provident, rem vero architecto
          assumenda, praesentium, delectus ut minus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
          veniam reprehenderit non! Eveniet, nam! Ut neque explicabo ullam hic
          nulla quaerat molestias beatae dolor tenetur debitis, reiciendis aut
          aliquid. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Expedita tempore consequatur corrupti quam accusamus pariatur earum
          placeat illo repudiandae nemo nesciunt provident, rem vero architecto
          assumenda, praesentium, delectus ut minus?
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
