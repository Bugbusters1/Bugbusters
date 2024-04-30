let CurrSubject = "all";
let CurrArea = "all";
let CurrGovernorate = "all";
let posts = [
  {
    name: "1",
    area: "all",
    governorate: "all",
    subject: "all",
  },
  {
    name: "2",
    area: "fifth",
    governorate: "cairo",
    subject: "math",
  },
  {
    name: "3",
    area: "zayed",
    governorate: "giza",
    subject: "english",
  },
  {
    name: "4",
    area: "octobor",
    governorate: "giza",
    subject: "science",
  },
  {
    name: "5",
    area: "downtown",
    governorate: "cairo",
    subject: "history",
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
  function displayItems() {
    const PostContainer = document.getElementById("PostContainer");

    PostContainer.innerHTML = "";

    posts.forEach((post) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");

      itemCard.innerHTML = `
              <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.name}</h2><br>
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
          <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${post.name}</h2><br>
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
  function filterPosts() {
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
    displayResults(filteredPosts);
    console.log("Filtered Posts:");
    console.log(filteredPosts);
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
});
