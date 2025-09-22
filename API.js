// const URL = "https://jsonplaceholder.typicode.com/posts";
// let facts = document.querySelector("#facts");
// let allBreeds = [];

// const fetchAllBreeds = async () => {
//   let res = await fetch(URL);
//   let response = await res.json();
//   allBreeds = response.data;
// };

// const showRandomBreed = () => {
//   if (allBreeds.length > 0) {
//     let randomIndex = Math.floor(Math.random() * allBreeds.length);
//     let breed = allBreeds[randomIndex];
//     facts.textContent = `${breed.attributes.name}: ${breed.attributes.description}`;
//   }
// };

// fetchAllBreeds();

// let btn = document.createElement("button");
// btn.innerText = "click me";
// btn.classList.add("btn");
// document.body.after(btn);

// btn.addEventListener("click", showRandomBreed);

// let sendData = async () => {
//   try {
//     let response = await fetch(URL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: "hamdan", password: "12345" }),
//     });

//     let result = await response.json();
//     console.log("Server Response:", result);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };
// sendData();

// const recieveData = async () => {
//   try {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: "Amara", password: "12345" }),
//     });
//     let result1 = await res.json();
//     console.log("server response ", result1);
//   } catch (error) {
//     console.log(error);
//   }
// };
// recieveData();

// const myFunc = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         postId: 101,
//         comment: "This article was very helpful!",
//         user: "Hamdan",
//       }),
//     });
//     let result = await response.json();
//     console.log("Response:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
// myFunc();
