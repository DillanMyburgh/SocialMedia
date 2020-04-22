import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import HomeContent from "../components/HomeContent";


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
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
        <HomeContent />
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

export default Home;
