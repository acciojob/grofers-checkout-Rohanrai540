// Select button
const button = document.getElementById("calc");

// Add click event
button.addEventListener("click", function () {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    // Calculate sum
    prices.forEach(price => {
        total += Number(price.innerText);
    });

    // Display result
    document.getElementById("ans").innerText = total;
});
