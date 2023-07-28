import { useState } from "react";
// import Avatar from "./Avatar";


function App() {
  const [todos]= useState(['todo1','todo2']);
  return (

  


    <div className="App">

      {todos.map((v,idx)=><li key={idx}>{v}</li>)}





















      {/* <Avatar>
         <Avatar
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
            width="100px"
            height="100px"
         />
         <br/><br/>
          <Avatar
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1544922318.1690567844&semt=ais"
            width="100px"
            height="100px"
         />
         <br/><br/>
          <Avatar
            src="data:image/jpeg;base64,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"
            width="100px"
            height="100px"
           
         />
          <span>child tag</span> 
         </Avatar>
     */}
      
    </div>
  );
}

export default App;
