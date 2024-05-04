let CurrSubject = "all";
let CurrArea = "all";
let CurrGovernorate = "all";
let img = "../assets/img/items/pov2.jpg";
let posts = [
  {
    name: "Biology Teacher",
    description:
      "Description: Biology teacher with a passion for teaching and a strong background in the biology field.",
    area: "dokki",
    governorate: "cairo",
    subject: "science",
  },
  {
    name: "Mathematics Teacher",
    description:
      "Description: Dynamic mathematics teacher experienced in creating engaging lesson plans and fostering a positive learning environment. ",
    area: "fifth",
    governorate: "cairo",
    subject: "math",
  },
  {
    name: "English Literature Instructor",
    description:
      "Description: English literature instructor with a passion for teaching and a strong background in the English language.",
    area: "zayed",
    governorate: "giza",
    subject: "english",
  },
  {
    name: "Science Educator",
    description:
      "Description: Science educator with a passion for teaching and a strong background in the science field.",
    area: "octobor",
    governorate: "giza",
    subject: "science",
  },
  {
    name: "History Teacher",
    description:
      "Description: History teacher with a passion for teaching and a strong background in the history field.",
    area: "downtown",
    governorate: "cairo",
    subject: "history",
  },
  {
    name: "Physics Teacher",
    description:
      "Description: Physics teacher with a passion for teaching and a strong background in the physics field.",
    area: "downtown",
    governorate: "cairo",
    subject: "science",
  },
];

function toggleFilterSidebar() {
  var sidebar = document.getElementById("sidebar2");
  var maincontent = document.getElementById("maincontent");
  sidebar.classList.toggle("active");
  maincontent.classList.toggle("active");
}

function closeSidebar() {
  document.getElementById("sidebar2").classList.remove("active");
  document.getElementById("maincontent").classList.remove("active");
}
document.addEventListener("DOMContentLoaded", function () {
  displayItems();
  function searchItems() {
    let currentList;
    currentList = filterPosts2();
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const results = currentList.filter((item) => {
      console.log(item.name);
      return item.name.toLowerCase().includes(searchTerm);
    });
    displayResults(results);
  }

  function displayItems() {
    const PostContainer = document.getElementById("PostContainer");

    PostContainer.innerHTML = "";

    posts.forEach((post) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");

      itemCard.innerHTML = `
              <img src="../assets/img/items/pov2.jpg" alt="Doctor" />
              <h2 style="color:#0c0f1d;font-size:28px;text-align:center">${
                post.name
              }</h2>
              <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
                post.description
              }</h2><br>
              <a href="./PopUp2.html?itemText=${encodeURIComponent(
                post.text
              )}&itemImage=${encodeURIComponent(img)}">
              <button class="details-button" id="details-button" style="background-color: #222024;">More Details</button>
              </a>
          `;

      PostContainer.appendChild(itemCard);
    });
  }

  function displayResults(results) {
    const resultsContainer = document.getElementById("PostContainer");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
      resultsContainer.textContent = "No items found.";
    } else {
      results.forEach((post) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item-card");
        itemElement.innerHTML = `
        <img src="../assets/img/items/pov2.jpg" alt="Doctor" />
        <h2 style="color:#0c0f1d;font-size:28px;text-align:center">${
          post.name
        }</h2>
        <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
          post.description
        }</h2><br>
        <a href="./PopUp2.html?itemText=${encodeURIComponent(
          post.text
        )}&itemImage=${encodeURIComponent(img)}" style="text-decoration: none;">
<button class="details-button" id="details-button" style="background-color: #222024;">More Details</button>
</a>
      `;
        resultsContainer.appendChild(itemElement);
      });
      resultsContainer.style.display = "flex";
      resultsContainer.style.flexWrap = "wrap";
      resultsContainer.style.justifyContent = "space-between";
      resultsContainer.style.marginRight = "-10px";
      resultsContainer.style.marginBottom = "-10px";
    }
  }
  function filterPosts2() {
    let filteredPosts = posts.filter((post) => {
      return (
        (CurrSubject === "all" ||
          post.subject === CurrSubject ||
          post.subject === "all") &&
        (CurrArea === "all" || post.area === CurrArea || post.area === "all") &&
        (CurrGovernorate === "all" ||
          post.governorate === CurrGovernorate ||
          post.governorate === "all")
      );
    });
    return filteredPosts;
  }
  function filterPosts() {
    displayResults(filterPosts2());
  }
  document.getElementById("subject").addEventListener("change", function () {
    CurrSubject = document.querySelector('input[name="subject"]:checked').value;
    filterPosts();
  });
  document.getElementById("area").addEventListener("change", function () {
    CurrArea = document.querySelector('input[name="area"]:checked').value;
    filterPosts();
  });
  document
    .getElementById("governorate")
    .addEventListener("change", function () {
      CurrGovernorate = document.querySelector(
        'input[name="governorate"]:checked'
      ).value;
      filterPosts();
    });
  document.getElementById("searchInput").addEventListener("input", searchItems);
  document
    .getElementById("searchInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        searchItems();
      }
    });
});
