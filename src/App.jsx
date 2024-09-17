import React, { useState } from 'react'
import axios from "axios"
import "./App.css"

const App = () => {

   const [data,setData] = useState({
        bookName:"",          
        bookPrice:"",
        isbnNumber:"",
        authorName:"",
        publishedAt:"",
        publication:""

       })

       const handleChange = (e)=>{
             setData({
              ...data,
              [e.target.name]:e.target.value
             })
       }
     

       const handleSubmit = async(e)=>{
        e.preventDefault()
        const res= await axios.post("https://nodejs-z9rh.onrender.com/book",data)
       }
  
  return (
    
    <form onSubmit={handleSubmit}> 
   
    

  <div className="mb-3 fw-bold">
    <label for="bookName" className="form-label ">BookName</label>
    <input type="text" name="bookName" className="form-control" id="bookName" onChange={handleChange} />
    
  </div>
  <div className="mb-3 fw-bold">
    <label for="bookPrice" className="form-label">BookPrice</label>
    <input type="text" name="bookPrice" className="form-control" id="bookPrice" onChange={handleChange}/>
  </div>

  <div className="mb-3 fw-bold">
    <label for="authorName" className="form-label">AuthorName</label>
    <input type="text" name="authorName" className="form-control" id="authorName" onChange={handleChange}/>
  </div>

  <div className="mb-3 fw-bold">
    <label for="isbnNumber" className="form-label">ISBN Number</label>
    <input type="text" name="isbnNumber" className="form-control" id="isbnNumber" onChange={handleChange}/>
  </div>

  <div className="mb-3 fw-bold">
    <label for="publishedAt" className="form-label">Published At</label>
    <input type="text" name="publishedAt" className="form-control" id="publishedAt" onChange={handleChange}/>
  </div>

  <div className="mb-3 fw-bold">
    <label for="publication" className="form-label">Publication</label>
    <input type="text" name="publication" className="form-control" id="publication" onChange={handleChange}/>
  </div>
  
 
  <div className=' d-flex justify-content-center '><button  type="submit" className="btn btn-primary">Submit</button></div>
  
</form>
  )
}

export default App