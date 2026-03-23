export type UserProps = {
  id: number;
  userRole: string;
  userHederaAccount: string;
  companyId: number;
  companyRole: string;
  companyLogo: string;
  companyName: string;
  companyState: number;
<<<<<<< HEAD
=======
  organizationHederaAccount: string;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  name: string;
};

export interface UserContextProps {
  userInfoState?: UserProps;
  setUserInfo: (val: UserProps) => void;
  removeUserInfo: () => void;
  IsAuthenticated: (tkn?: any) => boolean;
  isTokenExpired: boolean;
  setIsTokenExpired: (val: boolean) => void;
}
