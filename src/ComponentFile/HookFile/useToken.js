import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        // console.log("user insite useToken", user?.user)
        const name = user?.user?.displayName;
        const email = user?.user?.email;
        const currentUser = { email: email };

        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data)
                })
        }



        // console.log(name)
        // console.log(email)

    }, [user])
    return [token]
}
export default useToken;