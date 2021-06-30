import React, { useState, useEffect } from "react";

const AllUsers = ({ user, props, allCheckbox }) => {
  useEffect(() => {
    handleClick();
  }, [allCheckbox]);
  const [active, setActive] = useState("list");
  const [hidden,setHidden]=useState('hiddenDiv')
  const [count, setCount] = useState([]);
  const [checkbox, setCheckbox] = useState(true);
  function handleClick() {
    setCheckbox(!checkbox);
    if (checkbox === false) {
      setActive("list active");
    } else {
      setActive("list");
    }
  }

  function deleteUser(e) {
    props.history.push(`/Usuarios/${user._id}`);
  }
  function showHiddenDiv(){
    setHidden('')
  }
  return (
    <>
      <li className={active}>
        <label>
          <input
            type="checkbox"
            onChange={handleClick}
            checked={checkbox}
          ></input>
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
            <div>
              <button onClick={showHiddenDiv}>...</button>
              <div className={hidden}>
                <li onClick={deleteUser}>Delete</li>
                <li>Update</li>
              </div>
            </div>
          </ul>
        </div>
      </li>
      <h2>{count}</h2>
    </>
  );
};

export default AllUsers;
