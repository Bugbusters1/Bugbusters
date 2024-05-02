let CurrSpecialty = "all";
let CurrOrganization = "all";
let CurrGovernorate = "all";
let CurrArea = "all";
let Cases = [
  {
    name: "one",
    area: "heliopolis",
    governorate: "all",
    specialty: "dentist",
    organization: "ain",
  },
  {
    name: "two",
    area: "fifth",
    governorate: "cairo",
    specialty: "surgeon",
    organization: "damascus",
  },
  {
    name: "three",
    area: "dokki",
    governorate: "giza",
    specialty: "pediatrics",
    organization: "radiology",
  },
  {
    name: "four",
    area: "octobor",
    governorate: "giza",
    specialty: "hematologist",
    organization: "medical",
  },
  {
    name: "five",
    area: "downtown",
    governorate: "cairo",
    subject: "hematologist",
    organization: "damascus",
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
    let currSentList;
    currSentList = filterMedical2();
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const results = currSentList.filter((item) => {
      console.log(item.name);
      return item.name.toLowerCase().includes(searchTerm);
    });
    displayResults(results);
  }
  function displayItems() {
    const PostContainer = document.getElementById("CasesContainer");

    PostContainer.innerHTML = "";

    Cases.forEach((post) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");

      itemCard.innerHTML = `
              <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.name}</h2><br>
              <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.subject}</h2><br>
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
        <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.specialty}</h2><br>
        <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.area}</h2><br>
        <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.governorate}</h2><br>
        <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.organization}</h2><br>
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
  function filterMedical2() {
    let filteredCases = Cases.filter((post) => {
      return (
        (CurrSpecialty === "all" ||
          post.specialty === CurrSpecialty ||
          post.specialty === "all") &&
        (CurrArea === "all" || post.area === CurrArea || post.area === "all") &&
        (CurrGovernorate === "all" ||
          post.governorate === CurrGovernorate ||
          post.governorate === "all") &&
        (CurrOrganization === "all" ||
          post.organization === CurrOrganization ||
          post.organization === "all")
      );
    });
    return filteredCases;
  }
  function filterMedical() {
    displayResults(filterMedical2());
  }
  document.getElementById("specialty").addEventListener("change", function () {
    CurrSpecialty = document.querySelector(
      'input[name="specialty"]:checked'
    ).value;
    filterMedical();
  });
  document
    .getElementById("organization")
    .addEventListener("change", function () {
      CurrOrganization = document.querySelector(
        'input[name="organization"]:checked'
      ).value;
      filterMedical();
    });
  document.getElementById("area").addEventListener("change", function () {
    CurrArea = document.querySelector('input[name="area"]:checked').value;
    filterMedical();
  });
  document
    .getElementById("governorate")
    .addEventListener("change", function () {
      CurrGovernorate = document.querySelector(
        'input[name="governorate"]:checked'
      ).value;
      filterMedical();
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
