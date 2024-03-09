import { getCookie } from "typescript-cookie";

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
