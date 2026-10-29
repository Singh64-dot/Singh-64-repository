function myFunction() {
    let km = Number(document.getElementById("km").value);
    let miles = km * 0.621371;
    document.getElementById("singh").innerHTML = km + " km is equal to " + miles.toFixed(2) + " miles.";
}