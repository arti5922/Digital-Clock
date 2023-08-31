


     import React ,{useState}from 'react';
     import "./App.css";
      const Clock = ()=>{
        let a = new Date().toLocaleTimeString();
        const[ctime,pTime]=useState();
        function Tullu(){
          pTime(a);
        }
      setInterval(Tullu,1000);

        return(<>
            <div className="main_div">
            <h1>{ctime}</h1>
               
            </div>
        </>)
      }

      

      export default Clock;