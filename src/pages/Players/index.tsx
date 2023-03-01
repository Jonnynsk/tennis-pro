import { Card } from "../../components/Card";

import medvedev from "../../assets/players/medvedev.jpg";
import djokovic from "../../assets/players/djokovic.jpg";
import tsitsipas from "../../assets/players/tsitsipas.jpg";
import russia from "../../assets/flags/russia.png";
import greece from "../../assets/flags/greece.png";
import serbia from "../../assets/flags/serbia.png";

import s from "./styles/players.module.scss";

const players = [
  {
    id: 1,
    photo: medvedev,
    firstName: "Daniil",
    lastName: "Medvedev",
    age: "27",
    birthday: "11.02.1996",
    country: russia,
  },
  {
    id: 2,
    photo: djokovic,
    firstName: "Novak",
    lastName: "Djokovic ",
    age: "35",
    birthday: "22.05.1987",
    country: serbia,
  },
  {
    id: 3,
    photo: tsitsipas,
    firstName: "Stefanos",
    lastName: "Tsitsipas",
    age: "24",
    birthday: "12.08.1998",
    country: greece,
  },
];

export const Players = () => {
  return (
    <div className={s.players}>
      {players.map((player) => {
        return (
          <Card
            key={player.id}
            age={player.age}
            firstName={player.firstName}
            lastName={player.lastName}
            birthday={player.birthday}
            country={player.country}
            photo={player.photo}
          />
        );
      })}
    </div>
  );
};
