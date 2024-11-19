import dataReducer from "./dataReducer";
import { legacy_createStore as createStore} from "redux";
const store = createStore(dataReducer);
export default store;