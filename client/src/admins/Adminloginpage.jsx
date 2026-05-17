import { useEffect, useState } from "react";
export const Adminloginpage = () =>{
    const API = import.meta.env.VITE_API_URL;
   const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${API}/mht/admin`);
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching:", error);
            }
        };

        fetchData();
    }, [API]);
    return (
        <>
        <section>
            <h1>Admin Login Page React Page</h1>
            <div>{JSON.stringify(data, null, 2)}</div>

        </section>
        </>
    );
};