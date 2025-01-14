import { useState, useEffect } from "react";

function useHashNavigation() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const parseHash = () => {
    const [page, param] = hash.replace(/^#/, "").split("=");
    return { page: page || "home", param };
  };

  return parseHash();
}

export default useHashNavigation;
