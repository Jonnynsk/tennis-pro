import { FC } from "react";

import s from "./styles/card.module.scss";

interface IProps {
  photo: string;
  firstName: string;
  lastName: string;
  age: string;
  birthday: string;
  country: string;
}

export const Card: FC<IProps> = ({
  photo = "",
  firstName = "",
  lastName = "",
  age = "",
  birthday = "",
  country = "",
}) => {
  return (
    <div className={s.card}>
      <div className={s.card__image}>
        <img src={photo} alt={lastName} className={s.card__image} />
      </div>
      <div className={s.card__top}>
        <img src={country} alt={country} className={s.card__flag} />
        <div className={s.card__name}>
          <div className={s.card__firstName}>{firstName}</div>
          <div className={s.card__lastName}>{lastName}</div>
        </div>
        <div className={s.card__age}>
          <p>Age: {age}</p>
          <p>({birthday})</p>
        </div>
      </div>
    </div>
  );
};
