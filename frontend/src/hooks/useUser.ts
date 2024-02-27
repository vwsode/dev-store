import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store.ts';
import { registerUser, loginUser } from '../store/slices/userSlice.ts';
import { User } from '../types/types';

const useUser = () => {
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.user);

    const register = async (user: User) => {
        await dispatch(registerUser(user));
    };

    const login = async (username: string, password: string) => {
        await dispatch(
            loginUser({
                username,
                password,
            }),
        );
    };

    return {
        register,
        login,
        loading: auth.loading,
        error: auth.error,
        user: auth.user,
    };
};

export default useUser;
