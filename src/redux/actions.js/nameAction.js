import { NAMEINPUT } from "./actionsType";

export const name_input = (data) => {
    return {
        type: NAMEINPUT,
        payload: data
    }
}