import {addManyCustomersAction, ICustomers} from "../store/customerReducer";

export interface IDispatch{
  customers: {
    customers: [
      id:number,
      name:string,
     ]
  }
}
export interface IJson{
  type:string;
  payload:ICustomers;
}

export const fetchCustomers=()=>{
  return (dispatch:(json:IJson)=>IDispatch)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addManyCustomersAction(json)))
  }
}