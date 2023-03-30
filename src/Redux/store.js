import { createStore } from "redux";
import rootNote from "./Reducer";

const store = createStore(rootNote);

export default store;
