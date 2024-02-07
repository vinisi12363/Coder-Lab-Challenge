

const setLocalStorage = (key: string, value: object) => {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key,valueString);
}
const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    if(value){
        return JSON.parse(value);
    }
    return null;
}

const deleteLocalStorage = (key: string) => {
    localStorage.removeItem(key);
}

export const useLocalStorage = {
    setLocalStorage,
    getLocalStorage,
    deleteLocalStorage
}