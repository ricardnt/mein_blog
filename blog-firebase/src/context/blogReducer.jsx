
export const initialState = {
  posts: [],
  loading: true,
  error: null
};

export const blogReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { 
        ...state, 
        loading: action.payload 
      };

    case 'SET_POSTS':
      return { 
        ...state, 
        posts: action.payload, 
        loading: false, 
        error: null 
      };

    case 'ADD_POST':
      return { 
        ...state, 
        posts: [action.payload, ...state.posts] 
      };

    case 'ADD_COMMENT':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.postId
            ? { ...post, comments: [...(post.comments || []), action.payload.comment] }
            : post
        )
      };

    case 'SET_ERROR':
      return { 
        ...state, 
        error: action.payload, 
        loading: false 
      };

    default:
      return state;
  }
};
