import React, { useState, useEffect } from "react";
import EditUser from "./EditUser";

const AllUsers = ({ user, props, allCheckbox }) => {
  let array = [];
  function handleClick() {
    setCheckbox(!checkbox);
    if (checkbox === false) {
      setActive("list active");
    } else {
      setActive("list");
    }
  }

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
  const [editModal, setEditModal] = useState(false);
  
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
  function deleteEachUser() {
    array.push(user._id);
    console.log(deleteArray);
  }

  function updateUser() {
    setEditModal(true);
  }
  return (
    <>
      <li className={active} onMouseEnter={hover} onMouseLeave={endHover}>
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
                <button onClick={updateUser} className="update-icon"></button>
              </div>
            </div>
          </ul>
        </div>
      </li>
      {editModal ? (
        <EditUser
          editModal={editModal}
          setEditModal={setEditModal}
          userId={user._id}
        ></EditUser>
      ) : null}
    </>
  );
};

export default AllUsers;
