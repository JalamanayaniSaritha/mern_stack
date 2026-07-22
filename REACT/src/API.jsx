import { useState, useEffect } from "react";
import axios from "axios";

function API() {
    const API = "https://jsonplaceholder.typicode.com/users";

    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editId, setEditId] = useState(null); // Update state

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        try {
            const response = await axios.get(API);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function adduser() {
        if (name === "" || email === "") {
            return;
        }

        try {
            const response = await axios.post(API, {
                name,
                email,
            });

            setUser([...user, response.data]);

            setName("");
            setEmail("");

            alert("User added successfully");
        } catch (error) {
            console.log(error);
        }
    }

    // Edit user
    function editUser(userData) {
        setEditId(userData.id);
        setName(userData.name);
        setEmail(userData.email);
    }

    // Update user
    async function updateUser() {
        if (name === "" || email === "") {
            return;
        }

        try {
            const response = await axios.put(`${API}/${editId}`, {
                id: editId,
                name,
                email,
            });

            setUser(
                user.map((u) =>
                    u.id === editId ? response.data : u
                )
            );

            setEditId(null);
            setName("");
            setEmail("");

            alert("User updated successfully");
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteuser(id) {
        try {
            await axios.delete(`${API}/${id}`);

            setUser(user.filter((u) => u.id !== id));

            alert("User deleted");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <h1>React CRUD Operations</h1>

                <label>
                    <b>Name:</b>
                </label>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>
                    <b>Email:</b>
                </label>

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <button onClick={editId ? updateUser : adduser}>
                    {editId ? "Update" : "Add"}
                </button>

                <br />
                <br />

                {user.map((u) => (
                    <div
                        key={u.id}
                        style={{
                            margin: "20px",
                            border: "2px solid brown",
                            padding: "10px",
                        }}
                    >
                        <h2>{u.name}</h2>
                        <p>{u.email}</p>

                        <button onClick={() => editUser(u)}>
                            Edit
                        </button>

                        <button
                            onClick={() => deleteuser(u.id)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default API;