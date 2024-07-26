import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth} from '../context/AuthContext';
import { db } from '../Services/FireBase';
import { createImageUrl } from '../Services/movieServices';
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const {user} = UserAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      })
    }
  }, [user?.email]); 
  
  console.log(movies);

  return 
    <div>
      Profile
    </div>
  
};

export default Profile;
