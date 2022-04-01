import {useEffect, useState} from 'react'

const PREFIX = 'productivity-app-react-'

const useLocalStorage = (key, initialValue) => {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if(!jsonValue) return initialValue
        if(jsonValue !== null && jsonValue !== undefined) return JSON.parse(jsonValue)
        if(typeof initialValue === 'function') {
            return initialValue();
        } 
        else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}

export default useLocalStorage