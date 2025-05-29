import React,{ useState} from 'react';

const Edit = ({data, handleChange}) => {
    const [isEditing, setIsEditing] = useState(false);
  let postContent;
 
  if (isEditing) {
    
    postContent = (
      <>
        <input
          value={data.name}
          onChange={e => {
            handleChange({
              ...data,
              name:e.target.value
            });
          }} /> <br />
          <input
          value={data.mobileNum}
          onChange={e => {
            handleChange({
              ...data,
              mobileNum:e.target.value
            });
          }} /> <br />
          <input
          value={data.mailId}
          onChange={e => {
            handleChange({
              ...data,
              mailId:e.target.value
            });
          }} /> <br />
        <input
          value={data.homeAddress}
          onChange={e => {
            handleChange({
              ...data,
              homeAddress:e.target.value
            });
          }} /> <br />



        <button onClick={() => setIsEditing(false)}>
          SAVE
        </button>
      </>
    );
  } else {
    postContent = (
      <>
       
        <button onClick={() => setIsEditing(true)}>
          EDIT
        </button>
      </>
    );
  }
  return (
    <div>
        
{postContent}


    </div>
  )
}

export default Edit