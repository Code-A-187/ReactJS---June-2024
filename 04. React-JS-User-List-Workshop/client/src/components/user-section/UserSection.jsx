import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import UserList from "./user-list/UserList";
import { useEffect, useState } from "react";
import CreateUser from "./create-user/CreateUser";

const baseUrl = 'http://localhost:3030/jsonstore'

export default function UserSection () {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect (() => {
        (async function getUsers(){
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const usersData = Object.values(result)
                
                setUsers(usersData);
                
            } catch (error) {
                console.log(error.message)
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
    }

  return (
        <section className="card users-container">

            <Search />

            <UserList users={users} />

            {showAddUser && <CreateUser 
                            onClose={addUserCloseHandler}
                            onSave={addUserSaveHandler}/>}

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />

        </section>
    );
}