
import { useState, useEffect } from "react";
import { Resume } from "@/Types/types";

export default function useLocalStorage( key:string = "Resume",initialValue: {}) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}