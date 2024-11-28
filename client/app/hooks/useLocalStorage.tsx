"use client";

function useLocalStorage() {
    const isBrowser = typeof window !== "undefined";

    const setItem = (key: string, value: string) => {
        if (isBrowser) {
            localStorage.setItem(key, value);
        }
    };

    const getItem = (key: string) => {
        if (isBrowser) {
            return localStorage.getItem(key);
        }
        return null; // Default return value if not in the browser
    };

    const removeItem = (key: string) => {
        if (isBrowser) {
            localStorage.removeItem(key);
        }
    };

    return { setItem, getItem, removeItem };
}

export default useLocalStorage;
    