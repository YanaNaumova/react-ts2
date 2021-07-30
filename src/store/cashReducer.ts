export interface IState{
  cash:number;
}
interface IAction{
  type:string;
  payload:number;
}

const defaultState:IState={
  cash:0,
}

export const cashReducer=(state=defaultState,action:IAction)=>{
  switch (action.type){
    case "ADD_CASH":
      return{
        ...state,cash:state.cash+action.payload
      }
    case "GET_CASH":
      return{
        ...state,cash:state.cash-action.payload
      }
    default:
      return state
  }

}