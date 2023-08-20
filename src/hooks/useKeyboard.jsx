import {useRef, useEffect} from 'react'

// Keyboard event listener hook
// eventType = keyboard event to listen for

export default function useKeyboard(
    eventType,
    callback,
    element = window
    ) 
    {
        const callbackRef = useRef(callback)

        useEffect(() => {
            callbackRef.current = callback
        }, [callback])
    
        useEffect(() => {
            const handler = event => callbackRef.current(event)
            element.addEventListener(eventType, handler)
            return () => element.removeEventListener(eventType, handler)
        }, [eventType, element])
}
