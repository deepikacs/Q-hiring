export const API_BASE_URL = 'http://localhost:8080/api';
export const HEADERS_DEFAULT = {
    'Content-Type': 'application/json'
}

export const HEADERS_WITH_AUTH = ()=>({
    'Content-Type': 'application/json',
    AUTHORIZATION : localStorage.getItem('token')
})