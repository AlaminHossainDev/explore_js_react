import { useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);
    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2>User :</h2>
        </div>
    )
}