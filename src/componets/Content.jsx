
import React, {useEffect, useState } from "react";

function Content({ addTransaction ,edit,updataTransation}) {
  const [text, settext] = useState();
  const [amount, setamount] = useState();



  const handle = (e) => {
    e.preventDefault();
if(edit.isedit){
  updataTransation({id: edit.transation.id  ,text, amount})
}else{
  addTransaction(text,+amount)
}
   
    setamount("")
    settext("")
  };


  useEffect(()=>{
    settext(edit.transation.text)
    setamount(edit.transation.amount)
  },[edit])

  return (
    <form onSubmit={(e) => handle(e)}>
      <input
      onChange={e=>settext(e.target.value)}
      value={text}
        type="text"
        placeholder="Enter Transaction "
        className="w-full border border gray-500 rounded-md my-2 p-4 "
        required
      />

      <input
   onChange={e=>setamount(e.target.value)}
   value={amount}
type="number"
        placeholder="Enter Amount"
        className="w-full border border gray-500 rounded-md my-2 p-4 "
        required
      />

      <button className="w-full py-3 mt-4 bg-blue-500 font-bold text-white  boreder rounded-md  hover:bg-blue-600 transition ">
     
        Save Transation
      </button>
    </form>
  );
}

export default Content;
