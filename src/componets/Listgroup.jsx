import React from 'react'
import Listitems from './Listitems'

function Listgroup({Transation,remove,editTransation}) {
  return (
    
<div >
{
  Transation.map((Transation)=><Listitems key={Transation.id} Transation={Transation} remove={remove} editTransation={editTransation} /> )
}

</div>
  )
}

export default Listgroup
