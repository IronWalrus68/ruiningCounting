function rand(num = 10) {
    const newNum = Math.floor(Math.random() * num) + 1;
    console.log(newNum);
    return newNum;
}

function run(endNum = 10000) {
    for (let i = 1; i <= endNum; i++) {
        randStorage = rand(10000)
        iTimesRrand = i * randStorage;

        const tag = document.createElement("p");
        const text = document.createTextNode(`No.${i}, ${iTimesRrand}/${randStorage}`)
        tag.appendChild(text);
        const element = document.getElementById("numberHolder");
        element.appendChild(tag);

        console.log(`No.${i}, ${iTimesRrand}/${randStorage}`)
        console.log(iTimesRrand / randStorage == i)
    }
}
run()
