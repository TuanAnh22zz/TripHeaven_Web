// frontend/src/hooks/useRegisterForm.ts

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import authService, { RegisterData } from '../services/auth.service';
import { trimAllFields } from '../utils/validator';
import { isValidEmail, isValidPassword, isValidUsername } from '../utils/validator';

export const useRegisterForm = () => {
    const navigate = useNavigate();

    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    // State để lưu trữ dữ liệu người dùng nhập
    const [formData, setFormData] = useState<RegisterData>({
        username:  '',
        email: '',
        password: '',
    }) 

    // State để lưu các thông báo lỗi cho từng trường
    const [error, setError] = useState<string | null>(null) 

    // State cho trạng thái loading
    const [isLoading, setIsLoading] = useState(false) 

    // Hàm cập nhật state khi người dùng gõ
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target 
        setFormData(prev => ({ ...prev, [name]: value })) 

        // Nếu có lỗi, xóa nó đi khi người dùng bắt đầu sửa.
        if (error) {
            setError(null) 
        }
    } 

    // Hàm kiểm tra dữ liệu form trước khi gửi
    const validateForm = (data: RegisterData): string | null => {
        if (!isValidUsername(data.username)) {
            return 'Username có độ dài từ 3-20 ký tự.' 
        }
        if (!isValidEmail(data.email)) {
            return 'Email không đúng định dạng.' 
        }
        if (!isValidPassword(data.password)) {
            return 'Mật khẩu phải mạnh (ít nhất 8 ký tự, gồm chữ hoa, thường, số, ký tự đặc biệt).' 
        }
        // Nếu không có lỗi nào, trả về null.
        return null 
    } 

    // Hàm xử lý khi submit form
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault() 
        setError(null) 

        const trimmedData = trimAllFields(formData) as RegisterData 

        // ===> THAY ĐỔI 4: CÁCH XỬ LÝ VALIDATION <===
        // Gọi hàm validate và lấy về message lỗi (nếu có).
        const validationError = validateForm(trimmedData) 

        // Nếu có lỗi validation
        if (validationError) {
            // Set message lỗi đó vào state và dừng lại.
            setError(validationError) 
            return  // Dừng, không gửi API
        }

        // Nếu không có lỗi validation, tiếp tục gửi API.
        setIsLoading(true) 
        try {
            await authService.register(trimmedData) 
            setIsSuccessModalOpen(true) 
            navigate('/account') 
        } catch (err: any) {
            // Xử lý lỗi từ server
            const errorMessage = err.response?.data?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại.' 
            setError(errorMessage)
        } finally {
            setIsLoading(false)
        }

    }

    const handleCloseModal = () => {
        // Đóng modal
        setIsSuccessModalOpen(false) 
        // Chuyển hướng người dùng đến trang đăng nhập
        navigate('/account')  // hoặc '/login'
    };

    return {
        formData,
        error,
        isLoading,
        isSuccessModalOpen,
        handleChange,
        handleSubmit,
        handleCloseModal
    };
};