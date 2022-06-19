import {appReducer} from "./appReducer";
import {combineReducers, legacy_createStore as createStore} from "redux";


export type AppStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({card: appReducer})
export const store = createStore(rootReducer)

// @ts-ignore
window.store=store
