
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     // register
     const createNewUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     // observer current user
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               setLoading(false);
          });
          return () => {
               unSubscribe();
          }
     },[])

     //Sign out
     const userSignOut = () => {
          setLoading(true);
          return signOut(auth);
     }

     //log in
     const userSignIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     //update profile
     const userUpdateProfile = (updateData) => {
          return updateProfile(auth.currentUser, updateData)
     }
     const AuthInfo = {
          user,
          setUser,
          createNewUser,
          userSignOut,
          userSignIn,
          loading,
          userUpdateProfile
     }
     return (
          <AuthContext.Provider value={AuthInfo}>
               {children}
          </AuthContext.Provider>
     );
};

AuthProvider.propTypes = {
     
};

export default AuthProvider;