const checkResponse = (response) => {
    if (response.status !== 200) {
        console.log(`Error with the request! ${response.status}`);
        // ends function execution
        return;
    }
    return response.json();
};

export default function getData () {
    return fetch("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy")
        .then(checkResponse)
        .catch((err) => {
            throw new Error(`fetch geData failed ${err}`)
        });
};


