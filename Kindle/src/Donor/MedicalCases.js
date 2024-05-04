let CurrSpecialty = "all";
let CurrOrganization = "all";
let CurrGovernorate = "all";
let CurrArea = "all";
let Cases = [
  {
    name: "Emergency Surgery for Child",
    Description:
      "Description:A 5-year-old child requires urgent surgery due to appendicitis.",
    area: "heliopolis",
    governorate: "all",
    specialty: "dentist",
    organization: "ain",
    text: "A 5-year-old child named Sarah requires urgent surgery due to appendicitis. Sarah's health is at risk without immediate intervention. Donations are crucial to cover the surgical expenses and post-operative care needed for Sarah's recovery. Your support will ensure Sarah receives the necessary medical attention to overcome this life-threatening condition.",
  },
  {
    name: "Elderly Patient in Need of Dialysis",
    Description:
      "Description:Elderly patient diagnosed with kidney failure requires treatment.",
    area: "fifth",
    governorate: "cairo",
    specialty: "surgeon",
    organization: "damascus",
    text: "John Smith, an elderly patient diagnosed with kidney failure, relies on regular dialysis treatment to sustain his health. Donations will support John's ongoing dialysis sessions and provide essential medical supplies. Your contribution will make a significant difference in ensuring John's continued access to life-saving dialysis treatment.",
  },
  {
    name: "Pediatric Cancer Treatment",
    Description:
      "Description:A 10-year-old child with cancer requires treatment.",
    area: "dokki",
    governorate: "giza",
    specialty: "pediatrics",
    organization: "radiology",
    text: "Emily, a young patient diagnosed with leukemia, is in need of chemotherapy and supportive care. Donations will assist in covering the medical expenses associated with Emily's treatment and provide support to her family during this challenging time. Your generosity will help provide Emily with the necessary resources to fight cancer and improve her chances of recovery.",
  },
  {
    name: "Emergency Medical Aid",
    Description:
      "Description: A refugee camp in the middle of the desert needs medical aid.",
    area: "octobor",
    governorate: "giza",
    specialty: "hematologist",
    organization: "medical",
    text: "Urgent medical aid is required for refugees in a camp facing an outbreak of infectious diseases. Donations will provide essential medical supplies, vaccines, and healthcare services to prevent the spread of disease and save lives. Your support will make a significant impact on the health and well-being of vulnerable populations in the refugee camp.",
  },
  {
    name: "Maternal Health Initiative",
    Description:
      "Description: A pregnant woman in a remote area needs medical care.",
    area: "downtown",
    governorate: "cairo",
    subject: "hematologist",
    organization: "damascus",
    text: "A community-based initiative is dedicated to improving maternal health by offering prenatal care, safe childbirth services, and postnatal support to pregnant women in rural areas. Donations will help ensure access to essential maternal healthcare services, reducing maternal mortality rates and promoting healthy pregnancies and childbirth outcomes. Your contribution will empower women and families with access to quality healthcare services.",
  },
  //copied
  {
    name: "Surgery for Accident Victim",
    Description: "Description: An accident victim needs orthopedic surgery.",
    area: "dokki",
    governorate: "cairo",
    subject: "hematologist",
    organization: "damascus",
    text: "Michael Anderson, a young adult involved in a serious accident, sustained multiple fractures and requires orthopedic surgery for recovery. Donations will cover the surgical costs and rehabilitation expenses necessary for Michael's recovery journey. Your support will aid in restoring Michael's mobility and quality of life following this traumatic event.",
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
  let img = "../assets/img/items/pov1.jpg";
  function displayItems() {
    const PostContainer = document.getElementById("CasesContainer");

    PostContainer.innerHTML = "";

    Cases.forEach((post) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");

      itemCard.innerHTML = ` <img src="../assets/img/items/pov1.jpg" alt="Doctor" />
      <h2 style="color:#0c0f1d;font-size:28px;text-align:center">${
        post.name
      }</h2>
        <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
          post.Description
        }</h2><br>
       
      <a href="./PopUp2.html?itemText=${encodeURIComponent(
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
        itemElement.innerHTML = `<img src="../assets/img/items/pov1.jpg" alt="Doctor" />
        <h2 style="color:#0c0f1d;font-size:28px;text-align:center">${
          post.name
        }</h2>
        <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
          post.Description
        }</h2><br>
        
        <a href="./PopUp2.html?itemText=${encodeURIComponent(
          post.text
        )}" style="text-decoration: none;">
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
