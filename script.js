const button = document.querySelector("button");

button.addEventListener("click", function () {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        // Get all numbers and take the LAST one typed
        const numbers = price.innerText.match(/\d+/g);
        total += numbers ? Number(numbers[numbers.length - 1]) : 0;
    });

    document.getElementById("ans").innerText = total;
});


