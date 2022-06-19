import React from 'react';
import s from './card.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../store/store";
import {ProductCardType, setIsSelected, setTouched} from "../store/appReducer";

export const Card = () => {

  const productCards = useSelector<AppStateType, Array<ProductCardType>>(state => state.card.productCards)
  const dispatch = useDispatch()

  const touchedHandler = (id: number) => {
    dispatch(setTouched(id, true))
  }
  const selectHandler = (id: number) => {
    dispatch(setIsSelected(id))
  }

  let productCardsJsx = productCards.map(el => {

    let finalCardContainerClass: string = s.cardContainer;
    if (el.touched) {
      finalCardContainerClass = `${s.cardContainer} ${s.touched}`;
    }
    if (el.isSelected) {
      finalCardContainerClass = `${s.cardContainer} ${s.selected}`;
    }

    let finalCardClass: string = el.isAvailable?s.card:`${s.card} ${s.disabled}`;

    return (
      <div className={finalCardContainerClass} key={el.id} onMouseLeave={() => el.isAvailable&&touchedHandler(el.id)}>
        <div className={finalCardClass} onClick={() => el.isAvailable&&selectHandler(el.id)}>
          <span className={s.cardPreTitle}>Сказочное заморское яство</span>
          <span className={s.cardTitle}>Нямушка</span>
          <span className={s.cardTaste}>с {el.taste}</span>
          <span className={s.cardBonus}><b>{el.bonusCondition}</b> порций
            <br/> <b>{el.bonusNumber}</b>{' ' + el.bonusText}
            <br/>{el.extraBonus}
          </span>
          <div className={s.cardWeight}><b>{el.weight}</b>КГ</div>
        </div>
        {el.isAvailable
          ? <span className={s.underCard}>Чего сидишь? Порадуй котэ, {' '}
            <span onClick={() => el.isAvailable&&selectHandler(el.id)}>
              <u>купи</u><b>.</b></span>
            </span>
          : <span className={s.underCard}>Печалька, с {el.taste} закончился.</span>}

      </div>
    )
  })


  return (
    <div className={s.cardsContainer}>
      {productCardsJsx}
    </div>
  );
};
