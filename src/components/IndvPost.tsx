import React from 'react'
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react'

interface IndvPostProps {
    title: string,
    subtitle?: string,
    image?: string
}

const IndvPost: React.FC<IndvPostProps> = props => {
    return(
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
                <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <img src={props.image} alt='Unavailable' />
            </IonCardContent>
        </IonCard>
    )
}

export default IndvPost