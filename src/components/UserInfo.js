import React from "react";
import { name_input } from "../redux/actions.js/nameAction";
import { email_input } from "../redux/actions.js/emailAction";
import { useSelector, useDispatch } from "react-redux";

const UserInfo = () => {

    const name = useSelector(state => state.nameReducer);
    const email = useSelector(state => state.emailReducer);
    const dispatch = useDispatch();


    function handleInputName(event) {
        dispatch(name_input(event.target.value));
    }
    function handleInputEmail(event)
    {
        dispatch(email_input(event.target.value));
    }

    return (
        <div>
            <div>
                <label for="name">Name: </label>
                <input type="text" id="name" onChange={handleInputName} />
                <br />
                <label for="email">Email: </label>
                <input type="email" id="email" onChange={handleInputEmail} />
            </div>


            <div>
                <p>Current Values in store: </p>
                <p>Name - {name}</p>
                <p>Email - {email}</p>
            </div>
        </div>
    )
}

export default UserInfo;