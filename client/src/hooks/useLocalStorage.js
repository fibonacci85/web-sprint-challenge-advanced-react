// import { useState } from 'react';

// const useLocalStorage = (key, initialValue) => {

//     // const [storedValue, setStoredValue] = useState(() => {
//     //     const item = window.localStorage.getItem(key)
//     //     return item ? JSON.parse(item) : initialValue
//     // })

//     // const setValue = (value) => {
//     //     setStoredValue(value)
//     //     window.localStorage.setItem(key, JSON.stringify(value))
//     // }

//     // return [storedValue, setValue]

//     const [storedValue, setStoredValue] = useState(()=>{
//         if (localStorage.getItem(key)) {
//             return JSON.parse(localStorage.getItem(key));
//         }

//         localStorage.setItem(key, JSON.stringify(initialValue));
//         return initialValue;
//     });

//     const setValue = value => {
//         setStoredValue(value);
//         localStorage.setItem(key, JSON.stringify(value));
//     }

//     return [storedValue, setValue];
// }


// export default useLocalStorage;