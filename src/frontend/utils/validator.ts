

export const trimAllFields = (formData: Record<string, any>): Record<string, any> => {

    const trimmedData: Record<string, any> = {};

    
    for (const key in formData) {
       
        const value = formData[key];

        if (typeof value === 'string') {
           
            trimmedData[key] = value.trim();
        } else {
           
            trimmedData[key] = value;
        }
    }
    return trimmedData;
};


export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGEX_STRONG_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const isValidUsername = (username: string): boolean => {
    if (!username) {
        return false;
    }
  
    const trimmedUsername = username.trim();
    return trimmedUsername.length >= 3 && trimmedUsername.length <= 20;
};

export const isValidEmail = (email: string): boolean => {
    return REGEX_EMAIL.test(email);
};

export const isValidPassword = (password: string): boolean => {
    return REGEX_STRONG_PASSWORD.test(password);
};