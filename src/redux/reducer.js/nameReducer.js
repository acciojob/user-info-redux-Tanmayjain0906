import { NAMEINPUT } from "../actions.js/actionsType";


const initialData = "";

const nameReducer = (state=initialData, action) =>
{
    switch(action.type)
    {
        case NAMEINPUT: return action.payload;
        default: return state;
    }
}

export default nameReducer;