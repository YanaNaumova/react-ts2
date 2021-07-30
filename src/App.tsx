import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";

interface ICustomer{
  name:string,
  id:number;
}
interface ICash{
  cash:{
    cash:number;
  }
}
interface ICustomer{
  customers: {
    customers: []
  }
}

function App() {
  const dispatch = useDispatch()
  const cash = useSelector((state:ICash) => state.cash.cash)

  const customers=useSelector((state:ICustomer)=> state.customers.customers)

  const addCash = (cash:number) => {
    dispatch({type: "ADD_CASH", payload:cash})
  }
  const getCash = (cash:number) => {
    dispatch({type: "GET_CASH", payload:cash})
  }


const addCustomer=(name:string)=>{
    const customer={
      name,
      id:Date.now(),
    }
    dispatch(addCustomerAction(customer))
}

const removeCustomer=(customer:ICustomer)=>{
dispatch(removeCustomerAction(customer.id))
}


  return (
    <div className="App">
      <div style={{fontSize: "3rem"}}>{cash}</div>
      <div style={{display: "flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}> Снять со счета</button>
        <button onClick={() => addCustomer(String(prompt()))}>Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
      </div>
      {customers.length>0?
        <div>
          {customers.map((e:ICustomer,index:number)=>
            <div key={index} onClick={()=>removeCustomer(e)} style={{fontSize:"2rem", border:'1px solid black', padding:"10px",marginTop:5}}>{e.name}</div>
          )}
        </div>
        :
        <div style={{fontSize:'2rem', marginTop:20}}>
      Клиенты отсутствуют
        </div>
      }
    </div>
  );
}

export default App;
