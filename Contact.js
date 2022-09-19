import React from 'react';
import SideBanner from './SideBanner';

const Contact = () => {
  return (
    <>
    <SideBanner/>


    {/* contact details */}

    <div className="Personal">
      <p>Contact Details</p>
      <hr />
         <form action="https://gorest.co.in/" method='POST'>
            <label for="Employee Full Name">Address</label>
            <hr />
            <br />
            <label for="Employee Id">Street 1</label>
            <label for="other" className='other'>Street 2</label>
            <label for="other" className='other2'>City</label>
            <br />
            <br />
            <input type="text" className='padding' required autoComplete="off"  />
            <input type="text"  className='other_item' required autoComplete='off'/>
            <input type="text"  className='other_item' required autoComplete='off'/>
            <br />
            <br />
            <label for="Employee Id">State/Province</label>
            <label for="other" className='other'>Zip/Postal Code</label>
            <label for="other" className='other3'>Country</label>
            <br />
            <br />
            <input type="text" className='padding' required autoComplete="off"  />
            <input type="text"  className='other_item' required autoComplete='off'/>
            <select className='padding2' >
            <option value="#">--select--</option>
              <option value="#">India</option>
              <option value="#">Norway</option>
              <option value="#">China</option>
              <option value="#">Austrila</option>
              <option value="#">Japan</option>
            </select>
            <br />
            <br />
            <label for="Employee Full Name">Telephone</label>
            <hr />
            <br />
            <label for="Employee Id">Home</label>
            <label for="other" className='other2'>Mobile</label>
            <label for="other" className='other2'>Work</label>
            <br />
            <br />
            <input type="text" className='padding' required autoComplete="off"  />
            <input type="text"  className='other_item' required autoComplete='off'/>
            <input type="text"  className='other_item' required autoComplete='off'/>
            <br />
            <br />
            <label for="Employee Full Name">Email</label>
            <hr />
            <br />
            <label for="Employee Id">Work Email</label>
            <label for="other" className='other'>Other Email</label>
            
            <br />
            <br />
            <input type="text" className='padding' required autoComplete="off"  />
            <input type="text"  className='other_item' required autoComplete='off'/>
            
          </form>
          </div>
    
    </>
  )
}

export default Contact;