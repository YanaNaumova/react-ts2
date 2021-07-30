
const defaultState:any={
  customers:[],
}

const addCustomer='ADD_CUSTOMER'
const removeCustomer="REMOVE_CUSTOMER"


export const customerReducer=(state=defaultState,action:any)=>{
  switch (action.type){
    case addCustomer:
      return{
        ...state,
        customers:[...state.customers, action.payload],
        }
    case removeCustomer:
      return{
        ...state,
        customers:[...state.customers.filter((customer:any)=>customer.id!==action.payload)]
      }
    default:
      return state
  }

}

export const addCustomerAction=(payload:any)=>({
  type:addCustomer,payload
})
export const removeCustomerAction=(payload:any)=>({
  type:removeCustomer, payload
})