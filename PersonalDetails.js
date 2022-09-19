import React from 'react';
import "./SecondPage.css";

const PersonalDetails = () => {
  return (
    <>
    <div className="Personal">
      <p>Personal Details</p>
      <hr />
    <form action="https://gorest.co.in/">
            <label for="Employee Full Name">Employee Full Name*</label>
            <br />
            <br />
            <input type="text" className='padding' required autoComplete="off" placeholder="First Name" />
            <input type="text" className='padding'  required autoComplete="off" placeholder="Middle Name" />
            <input type="text" className='padding'  required autoComplete="off" placeholder="Last Name" />
            <br />
            <br />
            <hr />
            <label for="Employee Id">Employee Id</label>
            <label for="other" className='other'>Other Id</label>
            <br />
            <br />
            <input type="number" className='padding' required autoComplete="off" placeholder="0011" />
            
            <input type="number"  className='other_item' required autoComplete='off'/>
            <br />
            <br />
            <label for="Employee Id">Driver's License Number</label>
            <label for="other" className='licence'>License Expiry Date</label>
            <br />
            <br />
            <input type="text" className='padding' required autoComplete="off"  />
            
            <input type="date" className='other_item' required autoComplete='off'/>
            <br />
            <br />
            <hr />
            <label for="Employee Id">Nationality</label>
            <label for="other" className='Marital'>Marital Status</label>
            <br />
            <br />
            <select name="" id="" className='national'>
              <option value="India" >India</option>
              <option value="India" >China</option>
              <option value="India" >USA</option>
              <option value="India"  >Canada</option>
            </select>
            
            <select name="" id="" className='status'>
              <option value="Single" >Single</option>
              <option value="Married" >Married</option>
              <option value="Divorse" >Divorse</option>
              
            </select>
            <br />
            <br />
            <label for="Employee Id">Date of Birth</label>
            <label for="other" className='other'>Gender</label>
            <br />
            <br />
            <input type="date" className="padding"
            required autoComplete="off"  />
            
            <input type="radio" className='genders' required autoComplete='off'/>
            <label for="male">Male</label>
            <input type="radio" className='other_item' required autoComplete='off'/>
            <label for="female">Female</label>
            <br />
            <br />
          </form>
          </div>
    </>
  )
}

export default PersonalDetails