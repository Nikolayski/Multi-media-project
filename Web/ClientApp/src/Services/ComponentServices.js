

export const getAll = (collectionPath) => {
    return fetch(`https://localhost:44387/api/${collectionPath}`)
        .then(res => res.json())
        .catch(err => console.log(err.message))
}

export const getOption = (eventValue, collectionPath) => {
    return fetch(`/api/${collectionPath}/get/` + eventValue)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

export const getMyCollection = (userId, collectionPath) => {
    return fetch(`https://localhost:44387/api/${collectionPath}/` + userId)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

export const getDetails = (id, collectionPath) => {
    return fetch(`https://localhost:44387/api/${collectionPath}/` + id)
        .then(res => res.json())
        .catch(err => console.log(err.message));
}

export const create = (state, collectionPath) => {
    return fetch(`https://localhost:44387/api/${collectionPath}/post/`, {
        method: 'POST',
        body: JSON.stringify(state),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.text())
        .catch(err => console.log(err.message));
}

export const rateUp = (id) => {
    return fetch('https://localhost:44387/api/cars/rup/' + id)
        .then(response => response.json())
        .catch(err => console.log(err.message))
}

export const rateDown = (id) => {
    return fetch('https://localhost:44387/api/cars/rdown/' + id)
        .then(response => response.json())
        .catch(err => console.log(err.message))
}

export const remove = (id, collectionPath) => {
    return fetch(`https://localhost:44387/api/${collectionPath}/remove/` + id, {
        method: 'DELETE',
    })
        .then(res => res.text())
        .catch(err => console.log(err.message))
}
