import { EMAILINPUT } from "../actions.js/actionsType";


const initialData = "";

const emailReducer = (state=initialData, action) =>
{
    switch(action.type)
    {
        case EMAILINPUT: return action.payload;
        default: return state;
    }
}

export default emailReducer;