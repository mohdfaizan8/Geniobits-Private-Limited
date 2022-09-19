import React from 'react';
import "./SecondPage.css";

import SideBanner from './SideBanner'

const Job = () => {
  return (
    <>
    <SideBanner/>
    {/* --side items */}
    <div className="Job_personal">
      <p>Job Details</p>
      <hr />
    <form action="https://gorest.co.in/">
            <br />
            <label for="Employee Id">Joined Date</label>
            <label for="other" className='other2'>Job Title</label>
            <label for="other" className='other'>Job Specification</label>
            <br />
            <br />
            <input type="date" className='joindate' required autoComplete="off"  />
            <select className='padding2' >
            <option value="#">--select--</option>
              <option value="#">Frontend Developer</option>
              <option value="#">Web Developer</option>
              <option value="#">DevOps Developer</option>
              <option value="#">React Developer</option>
              <option value="#">HTML Developer</option>
            </select>
            <input type="text"  className='other_item' required autoComplete='off'/>
            <br />
            <br />
            <label for="Employee Id">Job Category</label>
            <label for="other" className='other2'>Sub Unit</label>
            <label for="other" className='other3'>Location</label>
            <br />
            <br />
            <select className='jobcat' >
            <option value="#">--select--</option>
              <option value="#">Full Time</option>
              <option value="#">Intership</option>
              <option value="#">Contract</option>
             
            </select>
            <select className='padding2' >
            <option value="#">--select--</option>
              <option value="#">I don't know what?</option>
            </select>
            <select className='padding2' >
            <option value="#">--select--</option>
              <option value="#">Delhi</option>
              <option value="#">Mumbai</option>
              <option value="#">Pune</option>
              <option value="#">Noida</option>
              <option value="#">Banglore</option>
            </select>
            <br />
            <br />
            <label for="Employee Full Name">Employment Status</label>
            <br />
            <br />
            <select className='jobcat' >
            <option value="#">--select--</option>
              <option value="#">Permanent</option>
              <option value="#">Intern</option>
              <option value="#">!</option>
            </select>
            <br />
            <hr />
            <label for="Employee Full Name">Include Employment Contract Details</label>
            <label class="switch">
             <input type="checkbox"/>
             <span class="slider round"></span>
              </label>
            <hr />
            <br />
            <button className='save1'>Save</button>
            <br />
            <hr />
            <label for="Employee Id">Employee Termination / Activiation</label>
            <button className='term'>Terminate Employment</button>
            
            
          </form>
          </div>
    </>
  )
}

export default Job;