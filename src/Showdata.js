import React from 'react';
import Edit from './Edit';

const Showdata = ({data,handleChange,handleDelete}) => {
 
       // if(data.id<6){
          return (
            <>
              <tr key={data.id}>
                <td> {data.id} </td>
                <td> {data.name} </td>
                <td> {data.mobileNum} </td>
                <td> {data.mailId} </td>
                <td> {data.homeAddress} </td>

                <td>
                  <Edit data={data} handleChange={handleChange} />

                  <button onClick={() => handleDelete(data.id)}>DELETE</button>
                </td>
              </tr>
            </>
          );
 
}

export default Showdata;