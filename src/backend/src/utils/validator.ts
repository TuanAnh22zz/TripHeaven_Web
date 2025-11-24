
export const REGEX = {
    
    USERNAME: /^.{3,20}$/,

    /**
     * Yêu cầu cho Mật khẩu mạnh (GIỮ NGUYÊN):
     * - (?=.*[a-z]): Phải chứa ít nhất một chữ cái viết thường.
     * - (?=.*[A-Z]): Phải chứa ít nhất một chữ cái viết HOA.
     * - (?=.*\d): Phải chứa ít nhất một chữ số.
     * - (?=.*[@$!%*?&]): Phải chứa ít nhất một ký tự đặc biệt.
     * - [A-Za-z\d@$!%*?&]{8,}: Tổng độ dài phải từ 8 ký tự trở lên.
     */
    STRONG_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};