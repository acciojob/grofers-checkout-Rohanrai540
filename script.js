const button = document.getElementById("calc");

button.addEventListener("click", function () {
    const prices = document.querySelectorAll(".prices");
    let total = 0;

    prices.forEach(price => {
        // Extract the LAST number typed (important for Cypress)
        const value = price.innerText.match(/\d+$/);
        total += value ? Number(value[0]) : 0;
    });

    document.getElementById("ans").innerText = total;
});

