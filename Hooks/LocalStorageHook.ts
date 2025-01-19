
// import { useEffect, useState, useCallback } from "react";

// export default function useLocalStorage<T>(key: string, defaultValue: T) {
//   // Initialize state with a function to avoid unnecessary computations
//   const [value, setValue] = useState<T>(() => {
//     if (typeof window === "undefined") {
//       return defaultValue;
//     }
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? (JSON.parse(item) as T) : defaultValue;
//     } catch (error) {
//       console.warn(`Error reading localStorage key "${key}":`, error);
//       return defaultValue;
//     }
//   });

//   // Memoize the setValue function to avoid unnecessary re-renders
//   const setStoredValue = useCallback((newValue: T | ((val: T) => T)) => {
//     try {
//       const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
//       setValue(valueToStore);
//       if (typeof window !== "undefined") {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//       }
//     } catch (error) {
//       console.warn(`Error setting localStorage key "${key}":`, error);
//     }
//   }, [key, value]);

//   useEffect(() => {
//     const handleStorageChange = (e: StorageEvent) => {
//       if (e.key === key && e.newValue !== JSON.stringify(value)) {
//         setValue(e.newValue ? JSON.parse(e.newValue) : defaultValue);
//       }
//     };

//     if (typeof window !== "undefined") {
//       window.addEventListener("storage", handleStorageChange);
//       return () => {
//         window.removeEventListener("storage", handleStorageChange);
//       };
//     }
//   }, [key, defaultValue, value]);

//   return [value, setStoredValue] as const;
// }



// import { useEffect, useState, useCallback } from "react";

// export default function useLocalStorage<T>(key: string, defaultValue: T) {
//   const [value, setValue] = useState<T>(defaultValue);
//   const [isClient, setIsClient] = useState(false); // Track client-side rendering

//   useEffect(() => {
//     setIsClient(true); // Set client-side flag to true after component mounts
//   }, []);

//   useEffect(() => {
//     if (isClient) {
//       try {
//         const item = window.localStorage.getItem(key);
//         setValue(item ? (JSON.parse(item) as T) : defaultValue);
//       } catch (error) {
//         console.warn(`Error reading localStorage key "${key}":`, error);
//         setValue(defaultValue);
//       }
//     }
//   }, [isClient, key, defaultValue]);

//   const setStoredValue = useCallback((newValue: T | ((val: T) => T)) => {
//     try {
//       const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
//       setValue(valueToStore);
//       if (typeof window !== "undefined") {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//         window.dispatchEvent(new Event("localstorage-update")); // Dispatch custom event
//       }
//     } catch (error) {
//       console.warn(`Error setting localStorage key "${key}":`, error);
//     }
//   }, [key, value]);

//   useEffect(() => {
//     const handleStorageChange = (e: StorageEvent) => {
//       if (e.key === key && e.newValue !== JSON.stringify(value)) {
//         setValue(e.newValue ? JSON.parse(e.newValue) : defaultValue);
//       }
//     };

//     const handleCustomStorageUpdate = () => {
//       const storedValue = window.localStorage.getItem(key);
//       setValue(storedValue ? JSON.parse(storedValue) : defaultValue);
//     };

//     if (isClient) {
//       window.addEventListener("storage", handleStorageChange);
//       window.addEventListener("localstorage-update", handleCustomStorageUpdate); // Listen for custom event

//       return () => {
//         window.removeEventListener("storage", handleStorageChange);
//         window.removeEventListener("localstorage-update", handleCustomStorageUpdate); // Clean up custom event listener
//       };
//     }
//   }, [isClient, key, defaultValue, value]);

//   return [value, setStoredValue] as const;
// }

// import { useEffect, useState, useCallback, useRef } from "react";

// export default function useLocalStorage<T>(key: string, defaultValue: T) {
//   const [value, setValue] = useState<T>(defaultValue);
//   const [isClient, setIsClient] = useState(false);
//   const valueRef = useRef<T>(defaultValue);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (isClient) {
//       try {
//         const item = window.localStorage.getItem(key);
//         const parsedItem = item ? (JSON.parse(item) as T) : defaultValue;
//         setValue(parsedItem);
//         valueRef.current = parsedItem;
//       } catch (error) {
//         console.warn(`Error reading localStorage key "${key}":`, error);
//         setValue(defaultValue);
//         valueRef.current = defaultValue;
//       }
//     }
//   }, [isClient, key, defaultValue]);

//   const setStoredValue = useCallback((newValue: T | ((val: T) => T)) => {
//     try {
//       const valueToStore = newValue instanceof Function ? newValue(valueRef.current) : newValue;
//       setValue(valueToStore);
//       valueRef.current = valueToStore;
//       if (typeof window !== "undefined") {
//         window.localStorage.setItem(key, JSON.stringify(valueToStore));
//         window.dispatchEvent(new Event("localstorage-update"));
//       }
//     } catch (error) {
//       console.warn(`Error setting localStorage key "${key}":`, error);
//     }
//   }, [key]);

//   useEffect(() => {
//     const handleStorageChange = (e: StorageEvent) => {
//       if (e.key === key && e.newValue !== JSON.stringify(valueRef.current)) {
//         const newValue = e.newValue ? JSON.parse(e.newValue) : defaultValue;
//         setValue(newValue);
//         valueRef.current = newValue;
//       }
//     };

//     const handleCustomStorageUpdate = () => {
//       const storedValue = window.localStorage.getItem(key);
//       const newValue = storedValue ? JSON.parse(storedValue) : defaultValue;
//       if (JSON.stringify(newValue) !== JSON.stringify(valueRef.current)) {
//         setValue(newValue);
//         valueRef.current = newValue;
//       }
//     };

//     if (isClient) {
//       window.addEventListener("storage", handleStorageChange);
//       window.addEventListener("localstorage-update", handleCustomStorageUpdate);

//       return () => {
//         window.removeEventListener("storage", handleStorageChange);
//         window.removeEventListener("localstorage-update", handleCustomStorageUpdate);
//       };
//     }
//   }, [isClient, key, defaultValue]);

//   return [value, setStoredValue] as const;
// }

import { useState, useEffect } from "react";

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  // Initialize state with a function to avoid unnecessary computation
  const [state, setState] = useState<T>(() => defaultValue);
  const [isClient, setIsClient] = useState(false);

  // Once mounted, set isClient to true and try to get stored value
  useEffect(() => {
    setIsClient(true);
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setState(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  // Only update localStorage when state changes and we're on the client
  useEffect(() => {
    if (isClient) {
      try {
        window.localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    }
  }, [key, state, isClient]);

  return [state, setState] as const;
}