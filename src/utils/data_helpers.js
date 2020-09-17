export const API_BASE = "https://opentdb.com/api.php?amount=50&category=27"

const checkResponse = (response) => {
    if (response.status !== 200) {
        console.log(`Error with the request! ${response.status}`);
        // ends function execution
        return;
    }
    return response.json();
};

export const getData = (url) => {
    return fetch(url)
        .then(checkResponse)
        .catch((err) => {
            throw new Error(`fetch getUserData failed ${err}`);
        });
};

