import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter";

const App = () => {
    const [username, setUsername] = useState("");
    const [hasLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 4000);
    }, [hasLoaded]);

    if (hasLoaded) {
        return (
            <>
                <Greeter phrase={"Hola"} name={"Genesis"} />
                <Greeter phrase={"Bonjour"} name={"Gen"} />
                <Greeter phrase={"Hello"} name={"Genny"} />

                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <p>You are logged in as {username}</p>
            </>
        )
    } else {
        return (
            <>
                <div class="spinner-border m-5 text-danger" role="status"></div>

                <h2>Website loading....</h2>

                <button onClick={() => setLoaded(true)} class="btn btn-warning">Click me to load website :) </button>
            </>
        )
    }
}

export default App;