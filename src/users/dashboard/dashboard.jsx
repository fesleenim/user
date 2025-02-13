import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true); // ✅ Loading state
    const navigate = useNavigate();

    const getUser = () => {
        setLoading(true); // 🔄 Ma'lumot yuklanishidan oldin loading holati true bo‘lsin
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((res) => {
                setUser(res.slice(0, 8)); // 🔹 Faqat 8 ta ma'lumot olish
                setLoading(false); // ✅ Ma’lumot kelgandan keyin loading false bo‘lsin
            })
            .catch((error) => {
                console.error("Xatolik yuz berdi:", error);
                setLoading(false); // ❌ Xatolik bo‘lsa ham loading false bo‘lsin
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="max-w-[1420px] mx-auto p-6 mt-20 relative">
            {/* Admin tugmasi */}
            <button
                onClick={() => navigate("/admin")}
                type="button"
                className="text-white bg-[#6c2dba] hover:border hover:border-[#6c2dba] hover:text-[#6c2dba] hover:bg-transparent focus:outline-none font-normal rounded-2xl text-xl px-10 py-3 text-center  right-6 top-5 md:right-5"
            >
                Admin
            </button>

            {/* Loading indikator */}
            {loading ? (
                <div className="flex justify-center items-center min-h-[300px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                    <span className="ml-3 text-xl text-gray-700">Yuklanmoqda...</span>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                    {user.map((item) => (
                        <div key={item.id} className="p-4 border rounded-lg">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/10542/10542486.png"
                                alt={item.title}
                                className="w-full h-auto"
                            />
                            <strong className="text-black block mb-2">{item.title}</strong>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dashboard;
