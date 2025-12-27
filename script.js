const button = document.querySelector("button");
const ans = document.getElementById("ans");

button.addEventListener("click", () => {
  const prices = document.querySelectorAll(".prices");
  let total = 0;

  prices.forEach(price => {
    // Get all numbers from text (handles 3020 → ["3020", "20"])
    const nums = price.textContent.match(/\d+/g);

    if (nums && nums.length > 0) {
      // Take the LAST typed number
      total += Number(nums[nums.length - 1]);
    }
  });

  ans.textContent = total;
});

