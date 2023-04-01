// data coupling, share the same primitive data type

//Module A
function calculateRectangleArea(height, base) {
    return height * base;
}

//Module B
function calculateTriangleArea(height, base) {
    return (height * base) / 2;
}

// example usage
const height = 5;
const base = 10;
const rectangleArea = calculateRectangleArea(height, base);
const triangleArea = calculateTriangleArea(height, base);

//////////////////////////////////////////////////////////


//Fetching module
function fetchData() {
    return fetch('https://api.example.com/data')
        .then(response => response.json())
}

//Rendering module
function renderData(data) {
    data.forEach(item => {
        //render item on UI here
    })
}

//Usage
fetchData().then(data => renderData(data));

