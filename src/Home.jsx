import React, { useState } from 'react'
import Navbar from './componets/Navbar'
import Form from './componets/form'
import Dashboard from './componets/Dashboard'

import Listgroup from './componets/Listgroup';


const Home = () => {



  const [ Transation, setTransation]=useState([


  ])

  const [edit, setedit]=useState({
    transation:{},
    isedit:false
  })

  console.log(edit)



  // remove 

  const remove = (id)=>{
    setTransation(
      Transation.filter((Transation)=> Transation.id !==id)
    )

  }



  //addTransation

  const addTransaction =(text,amount)=>{
setTransation([{id:crypto.randomUUID(),text,amount},...Transation])

  }



  // editTransation 

const editTransation = (transation)=>{
setedit({

  transation:transation,
  isedit:true
})
}


//updataTransation

const updataTransation=(updataTransation)=>{
setTransation(Transation.map((transation)=>transation.id===updataTransation.id ? updataTransation : transation))

setedit({
  transation:{},
  isedit:false

})

}




  return (
    <div className=' w-full  h-[100vh] flex items-center justify-start flex-col gap-8 bg-white'>
      <Navbar/>
    
<div className='p-6 w-[100%] md:p-10 w-[90%]'>
  
<Form  addTransaction={addTransaction} edit={edit} updataTransation={updataTransation} />
<Dashboard Transation={Transation}  />

<Listgroup  Transation={Transation} remove={remove} editTransation={editTransation}  />
</div>



    </div>
  )
}

export default Home
