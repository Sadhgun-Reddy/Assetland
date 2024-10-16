import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const AuthListener = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ email:email, displayName:displayName, uid:uid }));
        navigate("/transactions")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  
};

export default AuthListener;
