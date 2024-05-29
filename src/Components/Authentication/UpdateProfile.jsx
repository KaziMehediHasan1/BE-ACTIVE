import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiCheck } from 'react-icons/hi';
import { Toast } from 'flowbite-react';

const UpdateProfile = () => {
    const {updateUserProfile,user} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location);
	const navigate = useNavigate();
    const handleSubmit = e =>{
        e.preventDefault();
        const from = new FormData(e.currentTarget)
        const name = from.get('name');
        const photoURL = from.get('url');
        // console.log(name,photoURL);
        updateUserProfile(name, photoURL)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
            <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          <HiCheck className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Your update Successfully</div>
        <Toast.Toggle />
      </Toast>
            // toast.success('Your update Successfully')
        })
        .catch(error =>{
            console.error(error);
            <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Your update not success, please try again</div>
        <Toast.Toggle />
      </Toast>
    
        })
    }
    return (    
        <div className=' container mx-auto mt-20'>
            <h1 className="text-center text-2xl font-semibold">Update UserProfile</h1>
            <div className="flex items-center justify-center text-center mt-8  text-gray-800">
	        <form onSubmit={handleSubmit} noValidate="" action="" className="flex bg-green-300 flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-800">
		    <label htmlFor="label" className="self-start text-xs font-semibold">Username</label>
		    <input placeholder="Name" id="username" name="name" type="text" className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-sky-600 focus:ring-sky-600" />
		    <label htmlFor="label" className="self-start mt-3 text-xs font-semibold">PhotoURL</label>
		    <input placeholder="PhotoURL" name="url" id="photo" type="text" className="flex items-center h-12 px-4 mt-2 rounded text-gray-900 focus:outline-none focus:ring-2 focus:border-sky-600 focus:ring-sky-600" />
		    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-orange-400 text-gray-50">Update</button>
	    </form>
        </div>
    </div>
};

export default UpdateProfile;