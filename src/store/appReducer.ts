const SET_TOUCHED = 'SET_TOUCHED'
const SET_IS_SELECTED = 'SET_IS_SELECTED'

export type ProductCardType = {
  id: number
  taste: string
  weight: string
  bonusCondition: string
  bonusText: string
  bonusNumber?: number
  extraBonus?: string
  touched: boolean
  isSelected: boolean
  isAvailable: boolean
}
type InitialStateType = {
  productCards: Array<ProductCardType>
}

let initialState: InitialStateType = {
  productCards: [
    {
      id: 1,
      taste: 'фуа-гра',
      weight: '0,5',
      bonusCondition: '10',
      bonusText: 'мышь в подарок',
      touched: false,
      isAvailable: true,
      isSelected: false
    },
    {
      id: 2,
      taste: 'рыбой',
      weight: '2',
      bonusCondition: '40',
      bonusText: 'мыши в подарок',
      bonusNumber: 2,
      touched: false,
      isAvailable: false,
      isSelected: false
    },
    {
      id: 3,
      taste: 'курой',
      weight: '5',
      bonusCondition: '100',
      bonusText: 'мышей в подарок',
      bonusNumber: 5,
      extraBonus: 'заказчик доволен',
      touched: false,
      isAvailable: true,
      isSelected: false
    },
  ]
}

type ActionsType = ReturnType<typeof setTouched> | ReturnType<typeof setIsSelected>

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_IS_SELECTED:
      return {
        ...state,
        productCards: state.productCards.map(el => el.id === action.id
          ? {...el, isSelected: !el.isSelected}
          : el)
      }
    case SET_TOUCHED:
      return {
        ...state,
        productCards: state.productCards.map(el => el.id === action.id
          ? {...el, touched: action.touched}
          : el)
      };
    default:
      return {...state}
  }
}

export const setTouched = (id: number, touched: boolean) => ({type: SET_TOUCHED, id, touched} as const)
export const setIsSelected = (id: number) => ({type: SET_IS_SELECTED, id} as const)
