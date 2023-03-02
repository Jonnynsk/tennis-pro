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
    age: "02.11.1996",
    birthday: "11.02.1996",
    country: russia,
    currentRank: 7,
    singlesCurrentRank: "7",
    singlesHighestRank: "1",
    doublesCurrentRank: "-",
    doublesHighestRank: "3",
  },
  {
    id: 2,
    photo: djokovic,
    firstName: "Novak",
    lastName: "Djokovic ",
    age: "05.22.1987",
    birthday: "22.05.1987",
    country: serbia,
    singlesCurrentRank: "1",
    singlesHighestRank: "1",
    doublesCurrentRank: "-",
    doublesHighestRank: "1",
  },
  {
    id: 3,
    photo: tsitsipas,
    firstName: "Stefanos",
    lastName: "Tsitsipas",
    age: "08.12.1998",
    birthday: "12.08.1998",
    country: greece,
    singlesCurrentRank: "3",
    singlesHighestRank: "3",
    doublesCurrentRank: "124",
    doublesHighestRank: "6",
  },
];

export const Players = () => {
  return (
    <div className={s.players}>
      {players.map((player) => {
        return (
          <Card
            key={player.id}
            firstName={player.firstName}
            lastName={player.lastName}
            age={player.age}
            birthday={player.birthday}
            country={player.country}
            photo={player.photo}
            singlesCurrentRank={player.singlesCurrentRank}
            singlesHighestRank={player.singlesHighestRank}
            doublesCurrentRank={player.doublesCurrentRank}
            doublesHighestRank={player.doublesHighestRank}
          />
        );
      })}
    </div>
  );
};
