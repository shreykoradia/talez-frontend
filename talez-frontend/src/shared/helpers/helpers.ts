import { getCookie, removeCookie } from "typescript-cookie";
import { jwtDecode } from "jwt-decode";

export const checkToken = () => {
  const token = getCookie("accessToken");
  return token;
};

export function generateAvatarInitials(username: string) {
  if (!username) return "🎭";

  const words = username.split(" ");

  const initials = words.map((word) => word.charAt(0));

  return initials.slice(0, 2).join("").toUpperCase();
}

export const isTokenExpired = () => {
  const token = checkToken();
  if (!token) return;
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp && decodedToken.exp < Date.now() / 1000) {
    removeCookie("accessToken");
  } else {
    return;
  }
};

export const logOut = () => {
  const token = checkToken();
  if (!token) return;
  removeCookie("accessToken");
};
