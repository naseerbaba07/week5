import React, { useEffect ,useState} from 'react'

function Use() {
     let [f,setF] =useState("🍏");
     useEffect(()=>{
        if(f==="🍏"){
            setF("🍎");
        } else {
            setF("🍏");
        }
     },[f])
  return (
   <>
   <h1> Fruit :{f}</h1>
   </>
  )
}

export default Use