export interface IAction{
  type:string;
  payload:number;
}

interface ICustomer{
  name:string,
  id:number;
}
export interface IState{
  customers:[];
}

const defaultState:IState={
  customers:[],
}

const addCustomer='ADD_CUSTOMER'
const removeCustomer="REMOVE_CUSTOMER"

export const customerReducer=(state=defaultState,action:IAction)=>{
  switch (action.type){
    case addCustomer:
      return{
        ...state,
        customers:[...state.customers, action.payload],
        }
    case removeCustomer:
      return{
        ...state,
        customers:[...state.customers.filter((customer:ICustomer)=>customer.id!==action.payload)]
      }
    default:
      return state
  }

}

export const addCustomerAction=(payload:ICustomer)=>({
  type:addCustomer,payload
})
export const removeCustomerAction=(payload:number)=>({
  type:removeCustomer, payload
})