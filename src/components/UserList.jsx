import { useState, useEffect } from "react";

const UserList = () => {

    const [state, setState] = useState();
    const [error, setError] = useState();


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            if (res.ok){
                return res.json()
            } else {
                setError('Не удалось получить данные от сервера')
            }
        })
        .then(data=>setState(data))
        .catch(err=>setError(err.message))
    }, []);

    let users;
    
    if (state) {
        users = state.map((user)=>{
            return <li key={user.id} className="user">
                        <div>Имя: {user.name}</div>
                        <div>Никнейм: {user.username}</div>
                        <div>Почта: {user.email}</div>
                        <div>Телефон: {user.phone}</div>
                        <div>Сайт: {user.website}</div>
                    </li>
        })
    }


    return ( 
        <ul className="list">
            {error ? <h2>{error}</h2> : users}
        </ul>
     );
}
 
export default UserList;