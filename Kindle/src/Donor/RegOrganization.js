let CurrOrganization = "all";
let CurrArea = "all";
let CurrGovernorate = "all";
let img = "../assets/img/items/pov1.jpg";
let posts = [
  {
    name: "one",
    area: "all",
    governorate: "all",
    Organization: "all",
    text: "d",
  },
  {
    name: "two",
    area: "fifth",
    governorate: "cairo",
    Organization: "ain",
    text: "d",
  },
  {
    name: "three",
    area: "zayed",
    governorate: "giza",
    Organization: "damascus",
    text: "d",
  },
  {
    name: "four",
    area: "octobor",
    governorate: "giza",
    Organization: "radiology",
    text: "d",
  },
  {
    name: "five",
    area: "downtown",
    governorate: "cairo",
    Organization: "medical",
    text: "d",
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
    const PostContainer = document.getElementById("CasesContainer");
    PostContainer.innerHTML = "";
    posts.forEach((post) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");

      itemCard.innerHTML = ` <img src="../assets/img/items/pov1.jpg" alt="Doctor" />
    
          <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
            (post.Organization, post.governorate, post.name)
          }</h2><br>
      <a href="./PopUp4.html?itemText=${encodeURIComponent(
        post.text
      )}&itemImage=${encodeURIComponent(img)}" style="text-decoration: none;">
      <button class="details-button" id="details-button" style="background-color: #222024;">More Details</button>
</a>
          `;

      PostContainer.appendChild(itemCard);
    });
  }

  function displayResults(results) {
    const resultsContainer = document.getElementById("CasesContainer");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
      resultsContainer.textContent = "No items found.";
    } else {
      results.forEach((post) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item-card");
        itemElement.innerHTML = ` <img src="../assets/img/items/pov1.jpg" alt="Doctor" />
          <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
            (post.Organization, post.governorate, post.name)
          }</h2><br>
        
         
        <a href="./PopUp4.html?itemText=${encodeURIComponent(
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
        (CurrOrganization === "all" ||
          post.Organization === CurrOrganization ||
          post.Organization === "all") &&
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
  document
    .getElementById("organization")
    .addEventListener("change", function () {
      CurrOrganization = document.querySelector(
        'input[name="organization"]:checked'
      ).value;
      console.log(CurrOrganization);
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
