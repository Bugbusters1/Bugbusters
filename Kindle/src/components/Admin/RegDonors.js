let CurrOrganization = "all";
let CurrArea = "all";
let CurrGovernorate = "all";
let img = "../../assets/img/items/pov1.jpg";
let posts = [
  {
    name: "John Doe",
    description:"Description: Not just usual Metro. But something bigger. Not just usual widgets, but real widgets. Not just yet another admin template, but next generation admin template",
    area: "Nozha",
    governorate: "all",
    Organization: "all",
    text: "",
  },
  {
    name: "Mostafa Mohammed",
    description:"Description: You will never know exactly how something will go until you try it. You can think three hundred times and still have no precise result.",
    area: "fifth",
    governorate: "cairo",
    Organization: "all",
    text: "d",
  },
  {
    name: "Ahmed Elsayed",
    description:"Description: The Great Prince of the Grand Duchy of Lithuania he had stopped the invasion to Europe of Timur (Tamerlan) from Asia heading a big Army of Belarusians, Lithuanians.",
    area: "octobor",
    governorate: "giza",
    Organization: "all",
    text: "d",
  },
  {
    name: "Healing Hands Medical Outreach",
    description:"Description: Providing medical care and treatment to those in need.",
    area: "octobor",
    governorate: "giza",
    Organization: "all",
    text: "d",
  },
  {
    name: "Mariam Mohammed",
    description:"Description: Yes you can! Further more, you should! It let's you create really beautiful images either for elements or for the entire background.",
    area: "dokki",
    governorate: "giza",
    Organization: "all",
    text: "d",
  },
 /* {
    name: "Sheltering Hope Foundation",
    description:"Description: Offering  support to individuals experiencing homelessness.",
    area: "downtown",
    governorate: "cairo",
    Organization: "medical",
    text: "d",
  },*/
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
        const CasesContainer = document.getElementById("CasesContainer");
        CasesContainer.innerHTML = "";

        posts.forEach((post) => {
            const itemCard = document.createElement("div");
            itemCard.classList.add("item-card");

            itemCard.innerHTML = `
                <img src="../../assets/img/items/og.png" alt="Doctor" />
                <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${post.name}</h2><br>
                <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${post.description}</h2>
                <a href="./Details.html?itemText=${encodeURIComponent(post.text)}&itemImage=${encodeURIComponent(img)}" style="text-decoration: none;">
                    <button class="details-button" id="details-button" style="background-color: #222024;">More Details</button>
                </a>`;

            CasesContainer.appendChild(itemCard);
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
        itemElement.innerHTML = ` <img src="../../assets/img/items/og.png" alt="Doctor" />
        <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
          ( post.name)
        }</h2><br>
        <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
          ( post.description)
        }</h2>
        
         
        <a href="./details.html?itemText=${encodeURIComponent(
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
