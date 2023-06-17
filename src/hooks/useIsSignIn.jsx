import { useLayoutEffect } from "react";
import { userApi } from "../apis/userApi";
import { useAtomValue, useSetAtom } from "jotai/react";
import { userAtom } from "../store/atoms";

export const useIsSignIn = () => {
  const userState = useAtomValue(userAtom);
  const setUserState = useSetAtom(userAtom);

  useLayoutEffect(() => {
    if (userState === false) {
      userApi
        .getIsSignIN()
        .then((res) => {
          setUserState(true);
        })
        .catch((err) => {
          setUserState(false);
        });
    }
  }, []);

  return userState;
};
