import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../LoadingFile/Loading';

const AllUsers = () => {
    // const [users, setAllUsers] = useState([]);
    const { data, isLoading } = useQuery("users", () =>
        fetch("http://localhost:5000/users").then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data)

    return (
        <div>
            alll users {data?.length}
            {
                data?.map(d => <li key={d._id} >{d.email}</li> )
            }
        </div>
    );
};

export default AllUsers;