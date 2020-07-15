import {GET_POST_SUCCESS,GET_USER_SUCCESS} from "../Action/postActions";

const initialState = {
    post: {},
    user:{},
};

export const postReducer = (state = initialState, action) => {
  switch(action.type){
      case GET_POST_SUCCESS:
          return{...state, post: action.post};
      case GET_USER_SUCCESS:
          return{...state, user: action.user};
      default:
          return state;
  }
};