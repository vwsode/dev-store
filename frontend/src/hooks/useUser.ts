import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store.ts";
import { registerUser } from "../store/slices/userSlice.ts";
import { User } from "../types/types";

const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.user);

  const register = (user: User) => {
    dispatch(registerUser(user));
  };

  return {
    register,
    loading: auth.loading,
    error: auth.error,
    user: auth.user,
  };
};

export default useUser;
