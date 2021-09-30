export interface User {
  firstName: string;
  lastName: string;
  age?: 30;
  address?: {
    street?: string;
    city?: string;
    state?: string;
  };
  isActive?: boolean;
  registered?: any;
}
