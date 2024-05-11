let CurrOrganization = "all";
let CurrArea = "all";
let CurrGovernorate = "all";
let img = "https://bootdey.com/img/Content/avatar/avatar1.png";
let posts = [
  {
    name: "John Doe",
    description:"Description:Providing essentials to underprivileged communities",
    area: "All",
    governorate: "All",
    Donations: 51,
    text: "",
    image: "https://bootdey.com/img/Content/avatar/avatar1.png"
  },
  {
    name: "Mostafa Mohammed",
    description:"Description: Fostering equality through community engagement",
    area: "Fifth Settlement",
    governorate: "Alexandria",
    Donations: 12,
    text: "d",
    image: "https://bootdey.com/img/Content/avatar/avatar6.png"
  },
  {
    name: "Mariam Abdallah",
    description:"Description: Providing humanitarian aid  to vulnerable populations.",
    area: "Dokki",
    governorate: "Giza",
    Donations: 95,
    text: "d",
    image: "https://bootdey.com/img/Content/avatar/avatar3.png"
  },
  {
    name: "Ahmed ElSayed",
    description:"Description: Providing medical care and treatment to those in need.",
    area: "6th Octobor",
    governorate: "Giza",
    Donations: 45,
    text: "d",
    image: "https://bootdey.com/img/Content/avatar/avatar2.png"
  },
  {
    name: "Marina Ehab",
    description:"Description: Providing education and training to youth and young adults.",
    area: "Heliopolis",
    governorate: "Cairo",
    Donations: 28,
    text: "d",
    image: "https://bootdey.com/img/Content/avatar/avatar3.png"
  },
  {
    name: "Alya Gaber",
    description:"Description: Offering  support to individuals experiencing homelessness.",
    area: "Heliopolis",
    governorate: "Cairo",
    Donations: 77,
    text: "d",
    image: "https://bootdey.com/img/Content/avatar/avatar3.png"
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
    const PostContainer = document.getElementById("CasesContainer");
    PostContainer.innerHTML = "";
    posts.forEach((post) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card", "search-result-item"); // Add search-result-item class

      itemCard.innerHTML = `<img src="${post.image}" alt="Doctor" width="200" height="20" />
    
          <h2 style="color:#0c0f1d;font-size:24px;text-align:center">${
            post.name
          }</h2><br>
          <h2 style="color:#0c0f1d; font-size:24px; text-align:center;">
    DONATIONS PER MONTH: <span style="color:blue;">${post.Donations}</span>
</h2><br>

          
      <a href="./DetailsDonor.html?itemText=${encodeURIComponent(
        post.text
      )}&itemImage=${encodeURIComponent(img)}" style="text-decoration: none;">
      <button class="details-button" id="details-button" style="background-color: #222024;">More Details</button>
</a>
          `;

      PostContainer.appendChild(itemCard);
    });
}

function filterPosts() {
    performFilter(); // Call the performFilter function instead of filterPosts2
}

});
