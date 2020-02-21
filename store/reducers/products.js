import PRODUCTS from '../../data/sample-data'

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === '1')
}

export default (state = initialState, action) => {
  return state
}