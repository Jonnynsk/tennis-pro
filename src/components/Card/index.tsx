import { FC } from "react";

import { getAge } from "../../helpers/getAge";

import s from "./styles/card.module.scss";

interface IProps {
  photo: string;
  firstName: string;
  lastName: string;
  birthday: string;
  age: string;
  country: string;
  singlesCurrentRank: string;
  singlesHighestRank: string;
  doublesCurrentRank: string;
  doublesHighestRank: string;
}

export const Card: FC<IProps> = ({
  photo = "",
  firstName = "",
  lastName = "",
  birthday = "",
  age = "",
  country = "",
  singlesCurrentRank = "",
  singlesHighestRank = "",
  doublesCurrentRank = "",
  doublesHighestRank = "",
}) => {
  return (
    <div className={s.card}>
      <div className={s.card__imageBlock}>
        <img src={photo} alt={lastName} className={s.card__image} />
      </div>
      <div className={s.card__top}>
        <img src={country} alt={country} className={s.card__flag} />
        <div className={s.card__name}>
          <p className={s.card__firstName}>{firstName}</p>
          <p className={s.card__lastName}>{lastName}</p>
        </div>
        <div className={s.card__age}>
          <p>Age: {getAge(age)}</p>
          <p>({birthday})</p>
        </div>
      </div>
      <div className={s.card__rank}>
        <div className={s.card__info}>
          <p>Singles</p>
          <p>Current rank: {singlesCurrentRank}</p>
          <p>Highest rank: {singlesHighestRank}</p>
        </div>
        <div className={s.card__info}>
          <p>Doubles</p>
          <p>Current rank: {doublesCurrentRank}</p>
          <p>Highest rank: {doublesHighestRank}</p>
        </div>
      </div>
    </div>
  );
};
