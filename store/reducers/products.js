import PRODUCTS from '../../data/sample-data'
import { DELETE_PRODUCT } from '../actions/products'

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(prod => prod.ownerId === '1')
}
//above user products filter is a temporary solution before implementing auth solution

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          product => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
            product => product.id !== action.pid
          ),
      }
  }
  return state
}