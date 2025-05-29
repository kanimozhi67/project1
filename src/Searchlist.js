import React from 'react';


const Searchlist = ({searchbox,setSearchbox}) => {


  return (
   <div className='searchform'>
     <form >
   <label htmlFor='searchbox'>SEARCH BOX &nbsp; </label> 
<input 
     type='text'
     id='searchbox'
     autoFocus
     placeholder='search user data' 
      value= {searchbox}
     onChange= {(e) => setSearchbox(e.target.value)}

     ></input>
     
</form>
   </div >
  )
}
export default Searchlist;