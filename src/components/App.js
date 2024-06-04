"use client"
import { useState } from "react"

const App = () => {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [email,setEmail] = useState("")
  const [feedback,setFeedback] = useState("")
  return (
    <div className=" h-screen w-screen bg-netflix-demo flex justify-center items-center relative overflow-hidden">

      <div className="xl:w-[1400px] xl:h-[950px] xl:bg-black xl:bg-opacity-40 md:bg-black md:w-[850px] md:h-[860px] md:bg-opacity-40 lg:bg-black lg:w-[1050px] lg:h-[900px] lg:bg-opacity-40  bg-black bg-opacity-40 w-[650px] h-[800px] flex flex-col items-center justify-center">

        <div className="flex xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-sans justify-center">
          <h1 className="text-white font-extrabold">NET</h1><span className="text-[#FF0000] font-extrabold">FLİX</span>
        </div>
        <h3 className="text-white font-serif">Thank you for signing up to Netflix.Tell me more about yourself.</h3>

      <div className="xl:bg-black xl:bg-opacity-60 xl:w-[600px] xl:h-[800px] xl:pl-20 xl:mt-5 lg:bg-black lg:bg-opacity-60 lg:w-[550px] lg:h-[720px] lg:pl-20 lg:mt-5 md:bg-black md:bg-opacity-60 md:w-[500px] md:h-[680px] md:pl-20 md:mt-5 bg-black bg-opacity-60 w-[450px] h-[620px] mt-4 flex flex-col justify-center pl-20">

      <div className="mb-3">
        <label className="text-white" htmlFor="name">Name</label><br/>
        <input 
          className="xl:w-[450px] xl:h-[50px] xl:p-4 lg:w-[400px] lg:h-[40px] lg:p-4 md:w-[350px] md:h-[30px] md:p-4 w-[300px] h-[30px] pl-4 "
          type="text"
          placeholder="enter your name"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        /></div>
    
       <div className="mb-3">  
        <label className="text-white" htmlFor="age">Age</label><br/>
        <input 
          type="number"
          className="xl:w-[450px] xl:h-[50px] xl:p-4 lg:w-[400px] lg:h-[40px] lg:p-4 md:w-[350px] md:h-[30px] md:p-4 w-[300px] h-[30px] pl-4 "
          placeholder="age"
          name="age"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        /></div>

       <div className="mb-3">
        <label className="text-white" htmlFor="email">Email</label><br/>
        <input 
          type="text"
          className="xl:w-[450px] xl:h-[50px] xl:p-4 lg:w-[400px] lg:h-[40px] lg:p-4 md:w-[350px] md:h-[30px] md:p-4 w-[300px] h-[30px] pl-4 "
          placeholder="enter your Email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        /></div>

        <div className="mb-3">
        <label className="text-white " htmlFor="content">Content Type</label><br/>
        <select id="content" className="xl:w-[450px] xl:h-[50px] xl:p-4 lg:w-[400px] lg:h-[40px] lg:p-4 md:w-[350px] md:h-[30px] md:p-4 w-[300px] h-[30px] pl-4 ">
           <option>Series</option>
           <option>Movies</option>
        </select>
        </div>

        <div className="text-white mb-3">
            <label>Movie Type</label><br/>
            <input type="checkbox" id="first" defaultChecked />
            <label htmlFor="first">Comedy</label><br/>
            <input type="checkbox" id="second" />
            <label htmlFor="second">Action</label><br/>
            <input type="checkbox" id="third" defaultChecked />
            <label htmlFor="third">Romance</label>
        </div>

        <div className="text-white mb-3">
            <label>Gender</label><br/>
                <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="male">Male</label><br/>
                
                <input type="radio" id="female" name="gender" value="Female" defaultChecked />
            <label htmlFor="female">Female</label><br/>
                 
                <input type="radio" id="other" name="gender" value="Other" /> 
            <label htmlFor="other">Other</label>
        </div>

        <div className="">
           <label className="text-white" htmlFor="feedback">Feedback</label><br/>
          <textarea
            className="resize-none xl:w-[450px] xl:h-[100px] lg:w-[400px] lg:h-[80px] md:w-[350px] md:h-[60px] w-[320px] h-[50px] pl-4 pt-2"
            name="feedback"
            placeholder="Any comment"
            id="feedback"
            cols={50} rows={4} maxLength={150}
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
           />
        </div>

      <div className="flex justify-center xl:pr-10 lg:pr-10 md:pr-10 pr-10 ">
        <button className="bg-[#FF0000] w-24 h-10 flex justify-center items-center rounded-3xl text-white  ">Send</button>
      </div>

      </div>
      </div>
    
    </div>
  )
}
export default App