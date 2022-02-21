import { userReducer } from "./user.reducer";
import { authReducer } from "./auth.reducer";

export interface UserModuleState {
  search: fromSearch.State;  
  detail: fromUserDetail.State;
  detailBase: fromDetailBase.State;
}

export interface State extends fromRoot.State {
  userModule: UserModuleState;    
} 
export const reducers = {    
  auth: authReducer,
  user: userReducer,
};