import axiosAPI from "../../axiosAPI";

export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_ERROR = 'GET_POST_ERROR';

export const GET_USER_REQUEST = 'GET_USER_REQUEST ';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const SEND_POST_SUCCESS = 'SEND_POST_SUCCESS';
export const SEND_POST_ERROR = 'SEND_POST_ERROR';

export const PUT_POST_SUCCESS = 'PUT_POST_SUCCESS';
export const PUT_POST_ERROR = 'PUT_POST_ERROR';

export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'DELETE_POST_ERROR';

export const getPostRequest = () => ({type:GET_POST_REQUEST});
export const getPostSuccess = (post) => ({type:GET_POST_SUCCESS,post});
export const getPostError = () => ({type:GET_POST_ERROR});

export const getUserRequest = () => ({type:GET_USER_REQUEST});
export const getUserSuccess = (user) => ({type:GET_USER_SUCCESS,user});
export const getUserError = () => ({type:GET_USER_ERROR});

export const sendPostSuccess = () => ({type: SEND_POST_SUCCESS});
export const sendPostError = () => ({type: SEND_POST_ERROR});

export const putPostSuccess = () => ({type: PUT_POST_SUCCESS});
export const putPostError = () => ({type: PUT_POST_ERROR});

export const deletePostSuccess = () => ({type: DELETE_POST_SUCCESS});
export const deletePostError = () => ({type: DELETE_POST_ERROR});

export const fetchPost = () => {
    return async dispatch => {
        try{
            dispatch(getPostRequest());
            const res = await axiosAPI.get('/post/.json');
            dispatch(getPostSuccess(res.data));
        }catch(error){
            dispatch(getPostError(error));
        }
    }
};

export const fetchUser = () => {
    return async dispatch => {
        try{
            dispatch(getUserRequest());
            const res = await axiosAPI.get('/user/.json');
            dispatch(getUserSuccess(res.data));
        }catch(error){
            dispatch(getUserError(error));
        }
    }
};

export const sendPost = (post) => {
  return async dispatch => {
      try {
          dispatch(sendPostSuccess());
          await axiosAPI.post('/post/.json',post);
          dispatch(fetchPost())
      } catch (error) {
          dispatch(sendPostError(error))
      }
  }
};

export const changePost = (id,putPost) => {
  return async dispatch => {
      try{
          dispatch(putPostSuccess(id,putPost));
          await axiosAPI.put(`/post/${id}.json`,putPost);
          dispatch(fetchPost());
      }catch(error) {
          dispatch(putPostError(error))
      }
  }
};

export const deletePost = (id) => {
  return async dispatch => {
      try {
          dispatch(deletePostSuccess(id));
          await axiosAPI.delete(`/post/${id}.json`);
          dispatch(fetchPost())
      }catch(error){
          dispatch(deletePostError(error))
      }
  }
};
