export const getData = (url) => 
    fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error))
