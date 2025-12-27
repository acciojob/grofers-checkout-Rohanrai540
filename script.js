// Select all price elements
const prices = document.querySelectorAll(".prices");

let total = 0;

// Calculate total price dynamically
prices.forEach(price => {
  total += Number(price.innerText);
});

// Create new row
const totalRow = document.createElement("tr");

// Create single cell
const totalCell = document.createElement("td");
totalCell.setAttribute("colspan", "2");
totalCell.innerText = `Total Price: ${total}`;

// Append cell to row
totalRow.appendChild(totalCell);

// Append row to table
document.querySelector("#grocery-table").appendChild(totalRow);


