import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";
import CreateUser from "./create-user/CreateUser";
import UserDetails from "./user-details/UserDetails";
import UserDelete from './user-delete/UserDelete'

const baseUrl = 'http://localhost:3030/jsonstore'

export default function UserSection () {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setshowUserDetailsById] = useState(null)
    const [showUserDeleteById, setshowUserDeleteById] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect (() => {
        (async function getUsers(){
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const usersData = Object.values(result)
                setUsers(usersData);
                
            } catch (error) {
                console.log(error.message)
            } finally{
                setIsLoading(false);
            }
        })();
    }, []);
 
    const addUserClickHandler  = () => {
        setShowAddUser(true);
    }

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    const addUserSaveHandler = async (e) => {
        // prevent refresh
        e.preventDefault();

        // start spinner
        setIsLoading(true);

        // get user date
        const formData = new FormData(e.currentTarget)
        const userData =  {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        
        }
            

        //  make post request
        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        const createdUser =  await response.json();

        // update local state

        setUsers(oldUsers => [createdUser, ...oldUsers])

        // close modal

        setShowAddUser(false);

        // Stop Spinner
        setIsLoading(false);
    }

    const userDetailsClickHandler = (userId) => {
        setshowUserDetailsById(userId)
        console.log(userId)
    }

    const userDeleteClickHandler = async (userId) => {
        setshowUserDeleteById(userId)
    }

    const userDeleteHandler = async (userId) => {
        
        // Delete request to server
        await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE',
        });

        // delete from local state
        setUsers(oldUsers => oldUsers.filter(user => user._id !== userId));
        
        // close modal
        setshowUserDeleteById(null);

    }


  return (
        <section className="card users-container">

            <Search />

            <UserList 
                users={users}
                isLoading={isLoading}
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
                
            />

            {showAddUser && <CreateUser 
                            onClose={addUserCloseHandler}
                            onSave={addUserSaveHandler}
                            />
            }

            {showUserDetailsById && (
                <UserDetails 
                    user ={users.find(user => user._id === showUserDetailsById)}
                    onClose={() => setshowUserDetailsById(null)}
                />
            )}

            {showUserDeleteById && (
                <UserDelete
                    onclose={() => setshowUserDeleteById(null)}
                    onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                />
            
            )}

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />

        </section>
    );
}