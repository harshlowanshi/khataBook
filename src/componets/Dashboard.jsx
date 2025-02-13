import React from 'react'

function Dashboard({Transation}) {

    const income = Transation.filter((Transation)=>Transation.amount >0).reduce((a,c)=> a + c.amount,0)
 
    const expance  = Transation.filter((expance)=>expance.amount < 0).reduce((a,c)=> a + c.amount,0)

    const total = Transation.reduce((a,c)=> a + c.amount,0)


  return (
  
<div className=' my-4 grid grid-cols-1 md:grid-cols-3 gap-3 '>

<div className=" p-6  rounded-md bg-green-500">
   <h1 className=' font-bold text-xl text-white'>Total Income</h1> 
   <h3 className='text-white font-bold '>{income}</h3>
   </div>

<div className=" p-6 rounded-md   bg-red-500">
  <h1 className=' font-bold text-xl text-white'>Total Expense</h1> 
  <h3 className='text-white font-bold '>{expance}</h3>
  </div>



<div className=" p-6  rounded-md bg-yellow-500">
  <h1 className=' font-bold text-xl text-white'>Total Balance</h1> 
  <h3 className='text-white font-bold '>{total}</h3>
  </div>
  
</div>

  )
}

export default Dashboard
