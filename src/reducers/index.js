import { combineReducers } from "redux";

import programs from './programs'
import cartPrograms from './cartPrograms'
import orders from './orders'
import messages from './messages'
import admins from './admins'

export default combineReducers({
    programs, cartPrograms, orders, messages, admins
})