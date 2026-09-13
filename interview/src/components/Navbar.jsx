import React from 'react'

const Navbar = () => {
  return (
    <div>


<div style={{marginLeft:"300px"}}>
  <div className=" grid grid-cols-3 rounded-2xl  " style={{textAlign:"center",margin:"10px", width:"800px" ,height:"50px", paddingTop:"10px"}}>
    <div style={{marginLeft:"5px"}}>
      <h2 className=" font-bold " style={{fontSize:"20px"}}>
        
      </h2>
    </div>

    
    
    <div className="flex justify-end">
      
    </div>
    </div>

  </div>
  <div>
  <div style={{margin:"2px"}}>
    <h1 style={{fontSize:"40px"}}> A Web design and <br></br> branding agency<br></br> in Manchester </h1>
  </div>
  <div style={{height:"400px"}}>
    <video
        src="https://www.youtube.com/results?search_query=brands+video"
        controls
        autoPlay
        width="1200"
        height="400px"
      >
      </video>
      </div>
      </div>
      <div className='grid grid-cols-[40%_60%]'>
      <li style={{fontSize:"30px"}}>Who are you ?</li>
      <span style={{fontSize:"30px", fontFamily:""}}>An Independent web design<br></br>and branding agency in Manchester set<br></br>
      up in 2010 who care,build relationships,<br></br>have induster experience,and win awards. </span>
      </div>
    
      <div className='flex justify-content-around' style={{width:"200px"}}>
         <button
      className="rounded"
      style={{backgroundColor: "green",color: "white",padding: "10px 10px", width:"200px"
      }}
    >
      About Shape
    </button>
         <button
      style={{
        padding: "10px 20px",
      }}
    >
      Meet the Team
    </button>
        
         </div>
      <div>
        
      </div>
   
</div>
  )
}

export default Navbar