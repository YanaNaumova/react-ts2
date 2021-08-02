export interface IAction{
  type:string;
  payload:number;
}

export interface ICustomer{
  name:string,
  id:number;
}
export interface ICustomers{
customers:{
  name:string,
  id:number;
}
}
export interface IState{
  customers:[];
}

const defaultState:IState={
  customers:[],
}

const addCustomer='ADD_CUSTOMER'
const removeCustomer="REMOVE_CUSTOMER"
const add_many_customers='ADD_MANY_CUSTOMERS'

export const customerReducer=(state=defaultState,action:any)=>{
  switch (action.type){
    case add_many_customers:
      return {
        ...state,
        customers:[...state.customers, ...action.payload],
      }
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

export const addManyCustomersAction=(payload:ICustomers)=>({
  type:add_many_customers,payload
})