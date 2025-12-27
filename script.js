const button = document.querySelector("button");
const ans = document.getElementById("ans");

button.addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    // Split by whitespace or new lines
    const parts = price.innerText.trim().split(/\s+/);

    // Take the last entered value
    const value = Number(parts[parts.length - 1]);

    total += value;
  });

  ans.innerText = total;
});

