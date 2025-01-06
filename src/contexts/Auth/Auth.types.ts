export interface AuthContextType {
    user: {
        id: number;
        name: string;
        email: string;
        avatar?: string;
      } | null;
    token: string;
    setUser: (user: any) => void;
    setToken: (token: string) => void;
    profileCache: any;
    setProfileCache: (cache: any) => void;
}