let CurrOrganization = "all";
let CurrArea = "all";
let CurrGovernorate = "all";
let posts = [
  {
    name: "one",
    area: "all",
    governorate: "all",
    Organization: "all",
  },
  {
    name: "two",
    area: "fifth",
    governorate: "cairo",
    Organization: "ain",
  },
  {
    name: "three",
    area: "zayed",
    governorate: "giza",
    Organization: "damascus",
  },
  {
    name: "four",
    area: "octobor",
    governorate: "giza",
    Organization: "radiology",
  },
  {
    name: "five",
    area: "downtown",
    governorate: "cairo",
    Organization: "medical",
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

    alert(posts);
    PostContainer.innerHTML = "";
    posts.forEach((post) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");

      itemCard.innerHTML = `
              <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.name}</h2><br>
              <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.Organization}</h2><br>
              <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.area}</h2><br>
              <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.governorate}</h2><br>
              
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
        itemElement.innerHTML = `
        <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.name}</h2><br>
        <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.Organization}</h2><br>
        <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.area}</h2><br>
        <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.governorate}</h2><br>

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
