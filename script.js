document.querySelector("button").addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    const text = price.textContent;
    const match = text.match(/(\d+)\s*$/); // LAST number only

    if (match) {
      total += Number(match[1]);
    }
  });

  document.getElementById("ans").textContent = total;
});


