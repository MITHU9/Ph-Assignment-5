function donationAmount(id) {
  const noakhaliValue = document.getElementById(id).value;
  let amount = parseInt(noakhaliValue);
  const validAmount = Number(amount);

  if (isNaN(validAmount) || noakhaliValue !== validAmount.toString()) {
    alert("Invalid input! Input Should be a number");
    return;
  } else {
    return validAmount;
  }
}

function totalDonate(id) {
  const noakhaliBalance = document.getElementById(id);
  let accountBalance = parseFloat(noakhaliBalance.innerText);
  return accountBalance;
}

function donationCard(amount, text) {
  const donationHistoryContainer = document.getElementById("history");
  const currentTime = new Date();
  const donationDate = currentTime.toString();
  const newDonation = document.createElement("div");
  newDonation.innerHTML = `
           <div class="border rounded-lg p-6">
            <h1 class="text-2xl font-bold">
              ${amount} ${text}
            </h1>
            <p class="text-gray-600 font-semibold">
              Date: ${donationDate} 
            </p>
            </div>
         `;

  donationHistoryContainer.appendChild(newDonation);
}
