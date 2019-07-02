export const API_BASE_URL = 'http://localhost:8005/api';
export const HEADERS_DEFAULT = {
    'Content-Type': 'application/json'
}

export const HEADERS_WITH_AUTH = ()=>({
    'Content-Type': 'application/json',
    AUTHORIZATION : localStorage.getItem('token')
})


// new without using Auth0

// export const API_BASE_URL = 'http://localhost:8000/api';
// export const HEADERS_DEFAULT = {
//     'Content-Type': 'application/json'
// }

// export const HEADERS_WITH_AUTH = ()=>({
//     'Content-Type': 'application/json',
//     AUTHORIZATION : localStorage.getItem('token')
// })