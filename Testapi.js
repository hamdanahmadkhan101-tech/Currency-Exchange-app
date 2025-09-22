const base_URL =
  "https://v6.exchangerate-api.com/v6/b579094113a36333e498ddf9/latest/";

let dropdown = document.querySelectorAll("select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (const select of dropdown) {
  for (const currencyCode in countryList) {
    let newOpt = document.createElement("option");
    newOpt.innerText = currencyCode;
    newOpt.value = currencyCode;
    if (select.name === "from" && currencyCode === "USD") {
      newOpt.selected = "selected";
    } else if (select.name === "to" && currencyCode === "PKR") {
      newOpt.selected = "selected";
    }
    select.append(newOpt);
  }
  select.addEventListener("change", (event) => {
    updateFlag(event.target);
  });
}

const updateFlag = (element) => {
  let currencyCode = element.value;
  let countryCode = countryList[currencyCode];
  let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newsrc;
};

const updateExchange = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1 || isNaN(amtVal)) {
    amtVal = "1";
    amount.value = "1";
  }

  try {
    const URL = `${base_URL}${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.conversion_rates[toCurr.value];
    let finalAmt = (rate * parseFloat(amtVal)).toFixed(2);
    msg.textContent = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
  } catch (error) {
    console.error("Error:", error);
    msg.textContent = "Error fetching exchange rate";
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchange();
});

window.addEventListener("load", () => {
  updateExchange();
});
