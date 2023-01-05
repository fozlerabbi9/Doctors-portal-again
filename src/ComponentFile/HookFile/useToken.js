import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    // console.log(token)
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
                    console.log(data)
                    const accessToken = data.accessToken;
                    console.log(accessToken)
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);


                })
        }



        // console.log(name)
        // console.log(email)

    }, [user])
    return [token]
}
export default useToken;