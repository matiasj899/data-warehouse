import React from 'react';

const AllUsers=({user,props})=>{
    console.log(props)
    function handleClick(e){
console.log(e.target.value)
console.log(user._id)
    }

    function deleteUser(e){
      console.log(user._id)
      props.history.push(`/Usuarios/${user._id}`)
    }
    return(
        <li className="list">
      <label>
        <input type="checkbox" onChange={handleClick}></input>
      </label>
      <div className="name-email-cn">
        <h2>{user.nombre}</h2>
      </div>
      <div className="name-email-cn">
        <h2>{user.apellido}</h2>
        
      </div>
      <div className="name-email-cn">
        <h2>{user.email}</h2>
        
      </div>
      <div className="actions-cn">
        <ul>
          <li onClick={deleteUser}>Delete</li>
          <li>Update</li>
        </ul>
        </div>
      </li>
    )
}

export default AllUsers