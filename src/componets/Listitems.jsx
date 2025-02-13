import React from "react";
import { FaEdit } from "react-icons/fa";

import { MdDelete } from "react-icons/md";

function Listitems({ Transation, remove,editTransation}) {
  return (

<div className='p-4 border border-gray-300 my-2 rounded-md  ' >

<div className={ Transation.amount > 0 ? " bg-green-400 text-white my-2 p-4 border border-gray-300 rounded-md relative  "
      :" bg-red-400 text-white my-2 p-4 border border-gray-300 rounded-md relative  "
    }>

      <h1 className=" text-xl font-bold my-1">{Transation.text}</h1>
      <p className=" text-xl font-bold my-1">{Transation.amount}</p>

      <span className="flex   space-x-2 absolute right-4 top-4 ">
        <FaEdit
          className="text-2xl hover:text-yellow-500  transition cursor-pointer"
        onClick={()=>editTransation(Transation)}
        />
        <MdDelete className="text-2xl  hover:text-red-500  transition cursor-pointer " onClick={() => remove(Transation.id)} />
      </span>
    </div>

</div>


  );
}

export default Listitems;
