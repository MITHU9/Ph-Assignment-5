const donation = document.getElementById("donation-btn");
const history = document.getElementById("history-btn");
const donationHistory = document.getElementById("donation-history");
const donationPage = document.getElementById("donation-page");
const blog = document.getElementById("blog");
const donateNoakhali = document.getElementById("donatenoakhali-btn");
const donateFeni = document.getElementById("donatefeni-btn");
const forQuota = document.getElementById("quota-btn");
const modal = document.getElementById("my_modal");
const balance = document.getElementById("account");
const forPalestine = document.getElementById("palestine-btn");

donation.addEventListener("click", () => {
  donationPage.classList.remove("hidden");
  donation.classList.add("bg-primary");
  donationHistory.classList.add("hidden");
  history.classList.remove("bg-primary");
});

history.addEventListener("click", () => {
  donationPage.classList.add("hidden");
  donation.classList.remove("bg-primary");
  donationHistory.classList.remove("hidden");
  history.classList.add("bg-primary");
});

blog.addEventListener("click", () => {
  window.location.href = "blog.html";
});

donateNoakhali.addEventListener("click", () => {
  const amount = donationAmount("noakhali-input");
  const noakhaliBalance = totalDonate("noakhali-account");
  const accountBalance = parseFloat(balance.innerText);

  if (amount || amount <= 0) {
    if (accountBalance >= 0 && amount > 0 && amount <= accountBalance) {
      modal.showModal();
      balance.innerText = accountBalance - amount;
      document.getElementById("noakhali-account").innerText =
        amount + noakhaliBalance;
      document.getElementById("noakhali-input").value = "";
      donationCard(
        amount,
        "Taka is Donated for Flood Relief at Noakhali, Bangladesh"
      );
    } else {
      alert("Invalid input or insufficient balance");
    }
  }
});
donateFeni.addEventListener("click", () => {
  const amount = donationAmount("feni-input");
  const feniBalance = totalDonate("feni-account");
  const accountBalance = parseFloat(balance.innerText);
  if (amount || amount <= 0) {
    if (accountBalance >= 0 && amount > 0 && amount <= accountBalance) {
      modal.showModal();
      balance.innerText = accountBalance - amount;
      document.getElementById("feni-account").innerText = amount + feniBalance;
      document.getElementById("feni-input").value = "";
      donationCard(
        amount,
        "Taka is Donated for Flood Relief in Feni, Bangladesh"
      );
    } else {
      alert("Invalid input or insufficient balance");
    }
  }
});
forQuota.addEventListener("click", () => {
  const amount = donationAmount("quota-input");
  const quotaBalance = totalDonate("quota-account");
  const accountBalance = parseFloat(balance.innerText);
  if (amount || amount <= 0) {
    if (accountBalance >= 0 && amount > 0 && amount <= accountBalance) {
      modal.showModal();
      balance.innerText = accountBalance - amount;
      document.getElementById("quota-account").innerText =
        amount + quotaBalance;
      document.getElementById("quota-input").value = "";
      donationCard(
        amount,
        "Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh"
      );
    } else {
      alert("Invalid input or insufficient balance");
    }
  }
});

forPalestine.addEventListener("click", () => {
  const amount = donationAmount("palestine-input");
  const palestineBalance = totalDonate("palestine-account");
  const accountBalance = parseFloat(balance.innerText);

  if (amount || amount <= 0) {
    if (accountBalance >= 0 && amount > 0 && amount <= accountBalance) {
      modal.showModal();
      balance.innerText = accountBalance - amount;
      document.getElementById("palestine-account").innerText =
        amount + palestineBalance;
      document.getElementById("palestine-input").value = "";
      donationCard(
        amount,
        "Taka is Donated for Relief from current situation in Palestine"
      );
    } else {
      alert("Invalid input or insufficient balance");
    }
  }
});
