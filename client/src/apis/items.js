export function getItems() {
    return fetch('http://localhost:3001/api/items/get-item')
        .then(res => res.json())
        .then(data => data)
}