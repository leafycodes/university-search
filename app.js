const btn = document.querySelector('button');
const btn2 = document.querySelector('#button2');
const clear = document.querySelector('#clear');
let ul = document.querySelector('ul');
const url = "http://universities.hipolabs.com/search?name=";
const url2 = "http://universities.hipolabs.com/search?country=";

btn.addEventListener('click', async (event) => {
    try {
        ul.innerHTML = "";
        checkClear();
        event.preventDefault();
        let nameInput = document.querySelector('#inputCollege').value;

        if (!nameInput) {
            ul.innerHTML = "<li>Please enter a college name</li>";
            checkClear();
            return;
        }

        document.querySelector('#inputCollege').value = "";

        let colArray = await getCollege(nameInput.trim());
        if (colArray.length === 0) {
            ul.innerHTML = "<li>No colleges found</li>";
            checkClear();
            return;
        }
        for (let col of colArray) {
            let li = document.createElement('li');
            li.innerText = `${col.name}, ${col['state-province'] || 'N/A'}`;
            ul.appendChild(li);
        }
        checkClear();
    } catch (err) {
        console.error("Error fetching colleges:", err);
        ul.innerHTML = `<li>Error loading data: ${err}</li>`;
        checkClear();
    }
});

btn2.addEventListener('click', async (event) => {
    try {
        ul.innerHTML = "";
        checkClear();
        event.preventDefault();
        let countryInput = document.querySelector('#inputCountry').value;

        if (!countryInput) {
            ul.innerHTML = "<li>Please enter a country name</li>";
            checkClear();
            return;
        }

        document.querySelector('#inputCountry').value = "";

        let colArray = await getCollegeCountry(countryInput.trim());
        if (colArray.length === 0) {
            ul.innerHTML = "<li>No colleges found</li>";
            checkClear();
            return;
        }
        for (let col of colArray) {
            let li = document.createElement('li');
            li.innerText = `${col.name}, ${col['state-province'] || 'N/A'}`;
            ul.appendChild(li);
        }
        checkClear();
    } catch (err) {
        console.error("Error fetching colleges by country:", err);
        ul.innerHTML = `<li>Error loading data: ${err}</li>`;
        checkClear();
    }
});

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        console.error("API Error:", err);
        throw err;
    }
}

async function getCollegeCountry(country) {
    try {
        let res = await axios.get(url2 + country);
        return res.data;
    } catch (err) {
        console.error("API Error:", err);
        throw err;
    }
}

clear.addEventListener('click', () => {
    ul.innerHTML = "";
    checkClear();
});

let checkClear = () => {
    if (ul.innerHTML === '') {
        clear.disabled = true;
    } else {
        clear.disabled = false;
    }
}

checkClear();