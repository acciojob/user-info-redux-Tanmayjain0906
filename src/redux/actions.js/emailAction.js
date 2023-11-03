import { EMAILINPUT } from "./actionsType";

export const email_input = (data) => {
    return {
        type: EMAILINPUT,
        payload: data
    }
}