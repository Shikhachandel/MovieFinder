import { useEffect, useState } from 'react'

function useDebounce(value) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounce(value)
        }, 500)

        return () => clearTimeout(timer)
    }, [value])

    return debounce;
}

export default useDebounce;