import { useLocation } from "react-router-dom";

export function useIdiom() {
  const { pathname } = useLocation();
  return pathname.startsWith("/en") ? "en" : "pt";
}
