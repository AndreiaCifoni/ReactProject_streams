import streams from "../apis/streams";
// esse import é pra trocar a string the "type", assim nao tem erro de digitação entre action creator e reducers
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);
};
