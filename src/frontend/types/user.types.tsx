
export enum UserRoles {
    Admin = "Admin",
    Customer = "Customer",
    
}


export interface User {
 
  user_id: number;

  
  username: string;

  
  email: string;

  
  first_name?: string;

  
  last_name?: string;

  
  phone?: string;

  
  date_of_birth?: Date | string;

  
  gender?: string;

 
  address?: string;

  
  role: UserRoles;

  
  created_at?: string;
  updated_at?: string;

 
}