import { createContext, useReducer, useEffect, useContext } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs, addDoc, updateDoc, doc, arrayUnion, query, orderBy } from 'firebase/firestore';
import { blogReducer, initialState } from './blogReducer';

export const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        dispatch({ type: 'SET_POSTS', payload: postsData });
      } catch (error) {
        console.error("Error obteniendo posts:", error);
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    };

    fetchPosts();
  }, []);

  const addPost = async (title, content) => {
    try {
      const newPostData = {
        title,
        content,
        createdAt: new Date().toISOString(), // Usamos ISO string para la fecha
        comments: [] // Estructura sugerida: comentarios como array dentro del post
      };
      
      const docRef = await addDoc(collection(db, 'posts'), newPostData);
      
      dispatch({ 
        type: 'ADD_POST', 
        payload: { id: docRef.id, ...newPostData } 
      });
      
    } catch (error) {
      console.error("Error agregando post:", error);
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const addComment = async (postId, commentContent) => {
    try {
      const newComment = {
        content: commentContent,
        createdAt: new Date().toISOString()
      };

      const postRef = doc(db, 'posts', postId);
      
      await updateDoc(postRef, {
        comments: arrayUnion(newComment)
      });

      dispatch({
        type: 'ADD_COMMENT',
        payload: { postId, comment: newComment }
      });

    } catch (error) {
      console.error("Error agregando comentario:", error);
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  return (
    <BlogContext.Provider value={{ state, addPost, addComment }}>
      {children}
    </BlogContext.Provider>
  );
};