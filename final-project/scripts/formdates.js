let today = new Date();
let tomorrow = addOneDay(today);

document.getElementById("from").value = tomorrow.toISOString().substring(0, 16);
tomorrow.setHours(today.getHours() + 3);
document.getElementById("to").value = tomorrow.toISOString().substring(0, 16);


function addOneDay(date = new Date()) {
    date.setDate(date.getDate() + 1);

    return date;
}