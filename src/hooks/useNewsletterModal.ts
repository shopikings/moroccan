import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useNewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return { isOpen, handleClose };
};
