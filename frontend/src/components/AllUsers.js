import React, { useState, useEffect } from "react";

const AllUsers = ({ user, props, allCheckbox }) => {
  let array = [];
  useEffect(() => {
    handleClick();
  }, [allCheckbox]);

  const [active, setActive] = useState("list");
  const [hidden, setHidden] = useState("hiddenDiv");
  const [dot, setDot] = useState("dot-icon");
  const [count, setCount] = useState([]);
  const [checkbox, setCheckbox] = useState(true);
  const [checkboxType, setCheckboxType] = useState("checkbox");
  const [deleteArray, setdeleteArray] = useState(array);
  function handleClick() {
    setCheckbox(!checkbox);
    if (checkbox === false) {
      setActive("list active");
    } else {
      setActive("list");
    }
  }

  function deleteUser(e) {
    array.push(user._id);
    const jsonArray = JSON.stringify(array);
    props.history.push(`/Usuarios/${jsonArray}`);
  }

  function hover() {
    setHidden("");
    setDot("dot-icon hidden");
  }
  function endHover() {
    setHidden("hiddenDiv");
    setDot("dot-icon");
  }
  function deleteEachUser(){
    array.push(user._id)
    console.log(deleteArray)
  }
  
  
  return (
    <>
      <li className={active} onMouseEnter={hover} onMouseLeave={endHover}>
        <label>
          <input
            type={checkboxType}
            onChange={handleClick}
            onClick={deleteEachUser}
            checked={allCheckbox ? allCheckbox : checkbox}
            value={user._id}
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
              <div className={dot}></div>
              <div className={hidden}>
                <button onClick={deleteUser} className="trash-icon"></button>
                <button className="update-icon"></button>
              </div>
            </div>
          </ul>
        </div>
      </li>
    </>
  );
};

export default AllUsers;
