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

    let finalClass: string = s.cardContainer;
    if (el.touched) {
      finalClass = `${s.cardContainer} ${s.touched}`;
    }
    if (el.isSelected) {
      finalClass = `${s.cardContainer} ${s.selected}`;
    }

    return (
      <div className={finalClass} key={el.id} onMouseLeave={() => touchedHandler(el.id)}>
        <div className={s.card} onClick={() => selectHandler(el.id)}>
          <span className={s.cardPreTitle}>Сказочное заморское яство</span>
          <span className={s.cardTitle}>Нямушка</span>
          <span className={s.cardTaste}>с {el.taste}</span>
          <span className={s.cardBonus}><b>{el.bonusCondition}</b> порций
            <br/> <b>{el.bonusNumber}</b>{' ' + el.bonusText}
            <br/>{el.extraBonus}
          </span>
          <div className={s.cardWeight}><b>{el.weight}</b>КГ</div>
        </div>
        <span className={s.underCard}>Чего сидишь? Порадуй котэ, {' '}
          <span onClick={() => selectHandler(el.id)}>
            <u>купи</u><b>.</b></span>
        </span>
      </div>
    )
  })


  return (
    <div className={s.cardsContainer}>
      {productCardsJsx}
    </div>
  );
};
