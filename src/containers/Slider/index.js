import { v4 as uuidv4 } from 'uuid';
import React,{ useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData(); // acceder les données via le contexte DataContext.
  const [index, setIndex] = useState(0); // Gèrer l'index de l'élément actuellement affiché dans le slider.

  const byDateDesc = data?.focus.sort((evtA, evtB) => // Trier les événements dans l'ordre décroissant de leur date
    new Date(evtA.date) < new Date(evtB.date) ? 1 : -1
  );

  const nextCard = () => { // Fonction pour avancer le slider avec 5s d'intervalle.
    setTimeout(
      () => setIndex((index + 1) % (byDateDesc ? byDateDesc.length : 1)),
      5000
    );
  };

  useEffect(() => {
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <React.Fragment key={event.title}>
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" /> {/* Afficher image */}
            <div className="SlideCard__descriptionContainer"> {/* Afficher differents infos de l'image */}
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
            {byDateDesc.map((_, radioIdx) => {
              const key = uuidv4();
              return (
                <input
                key={key}
                type="radio"
                name="radio-button"
                checked={index === radioIdx}
                onChange={() => setIndex(radioIdx)} // Mise à jour de l'index du slider à radioIdx quand l'utilisateur clique sur le bouton radio
                />
              );
            })}
            </div>
          </div>
          </React.Fragment>
      ))}
    </div>
  );
};

export default Slider;
