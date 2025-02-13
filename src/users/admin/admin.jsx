import React, { useState, useEffect } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

function Admin() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true); 

    const getUser = () => {
        setLoading(true); 
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((res) => {
                setUser(res.slice(0, 8)); 
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Xatolik yuz berdi:", error);
                setLoading(false); 
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="max-w-[1420px] mx-auto p-6 mt-20">
            {loading ? (
                <div className="flex justify-center items-center min-h-[300px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                    <span className="ml-3 text-xl text-gray-700">Yuklanmoqda...</span>
                </div>
            ) : (
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-400 p-2">Number</th>
                            <th className="border border-gray-400 p-2">Rasmi</th>
                            <th className="border border-gray-400 p-2">Nomi</th>
                            <th className="border border-gray-400 p-2">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index) => (
                            <tr key={item.id} className="border border-gray-300">
                                <td className="border border-gray-400 p-2">{index + 1}</td>
                                <td className="border border-gray-400 p-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/10542/10542486.png" alt={item.title} className="w-16 h-16 mx-auto" />
                                </td>
                                <td className="border border-gray-400 p-2">{item.title}</td>
                                <td className="border border-gray-400 p-2 text-center">
                                    <button className="text-[#6c2dba]">
                                        <MdOutlineModeEdit size={24} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Admin;
