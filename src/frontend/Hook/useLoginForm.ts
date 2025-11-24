import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import { AuthContext, useAuth } from "../context/AuthContext";
export const useLoginForm = () => {
    const navigate = useNavigate();

    const { login: contextLogin } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [error, setError]  = useState<string | null>(null)
    const[isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (error) {
            setError(null);
        }

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true)

        try {
            await contextLogin({ 
                username: formData.email, 
                password: formData.password 
            });
            navigate('/profile');
        } catch (err: any){
            const errorMessage = err.response?.data?.message || "Đã có lỗi xảy ra. Vui lòng thử lại.";
            setError(errorMessage)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        formData,
        error,
        isLoading,
        handleChange,
        handleSubmit
    }
}