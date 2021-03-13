import { combineReducers } from 'redux'
import category from './category'
import logged from './login'
import product from './product'

const rootReducer = combineReducers ({
    category,
    product,
    logged

})
export default rootReducer