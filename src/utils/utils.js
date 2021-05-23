import {reactLocalStorage} from 'reactjs-localstorage';

export function get_JWT_token(apiUrl){
    fetch(apiUrl, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: '',
    })
    .then(response => response.json())
    .then(data => {
        reactLocalStorage.set('JWT-token',data.token);
    })
    .catch((error) => {
        return 0;
    });
}