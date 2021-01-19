import { createStore, combineReducers } from "redux"
import aboutReducer from "./AboutReducer"
import newsReducer from "./NewsReducer"

const saveState = (state: any) => {
    try {
		const serialisedState = JSON.stringify(state);
		
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
    }
};

const loadState = () => {
    try {
        const serialisedState = window.localStorage.getItem('app_state');

		if (!serialisedState) return undefined;

        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

let reducers = combineReducers({
	newsPage: newsReducer,
	aboutPage: aboutReducer
})

const oldState = loadState();
let store = createStore(reducers, oldState)

store.subscribe(() => {
    saveState(store.getState());
});

export default store