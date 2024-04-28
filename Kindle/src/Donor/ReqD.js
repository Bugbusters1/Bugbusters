const items = [
  // Hospital Items
  {
    name: "First Aid Kit",
    quantity: 10,
    description: "Essential first aid supplies for emergencies.",
    image: "first_aid_kit.jpg",
    category: "Medical Supplies",
  },
  {
    name: "Wheelchair",
    quantity: 5,
    description: "A wheelchair for patients with mobility needs.",
    image: "wheelchair.jpg",
    category: "Medical Supplies",
  },
  {
    name: "Stethoscope",
    quantity: 20,
    description:
      "A medical device for listening to the internal sounds of the body.",
    image: "stethoscope.jpg",
    category: "Medical Supplies",
  },
  {
    name: "Surgical Masks",
    quantity: 100,
    description: "Protective masks worn by healthcare professionals.",
    image: "surgical_masks.jpg",
    category: "Personal Protective Equipment",
  },
  // Blood Donations
  {
    name: "Blood Pressure Monitor",
    quantity: 15,
    description: "Device used to measure blood pressure.",
    image: "blood_pressure_monitor.jpg",
    category: "Medical Equipment",
  },
  {
    name: "Blood Glucose Meter",
    quantity: 8,
    description: "Used to measure the concentration of glucose in the blood.",
    image: "glucose_meter.jpg",
    category: "Medical Equipment",
  },
  {
    name: "Blood Bag",
    quantity: 25,
    description: "Sterile bag used to collect and store blood.",
    image: "blood_bag.jpg",
    category: "Medical Supplies",
  },
  {
    name: "Blood Donation Kit",
    quantity: 50,
    description: "Kit containing supplies for blood donation.",
    image: "blood_donation_kit.jpg",
    category: "Blood Donations",
  },
  // School Donations
  {
    name: "Textbooks",
    quantity: 30,
    description: "Educational books for students.",
    image: "textbooks.jpg",
    category: "Education",
  },
  {
    name: "Stationery Set",
    quantity: 12,
    description:
      "Includes pens, pencils, erasers, and other essentials for school.",
    image: "stationery_set.jpg",
    category: "Education",
  },
  {
    name: "Backpack",
    quantity: 40,
    description: "A bag used to carry books and school supplies.",
    image: "backpack.jpg",
    category: "Education",
  },
  // Food Donations
  {
    name: "Canned Food",
    quantity: 200,
    description: "Non-perishable food items in cans.",
    image: "canned_food.jpg",
    category: "Food",
  },
  {
    name: "Rice",
    quantity: 100,
    description: "Staple food grain.",
    image: "rice.jpg",
    category: "Food",
  },
  {
    name: "Fresh Fruits",
    quantity: 50,
    description: "Assorted fresh fruits.",
    image: "fresh_fruits.jpg",
    category: "Food",
  },
  // Clothing Donations
  {
    name: "Jackets",
    quantity: 30,
    description: "Warm jackets for cold weather.",
    image: "jackets.jpg",
    category: "Clothes",
  },
  {
    name: "Shoes",
    quantity: 50,
    description: "Assorted shoes for all ages.",
    image: "shoes.jpg",
    category: "Clothes",
  },
  {
    name: "T-shirts",
    quantity: 100,
    description: "Casual t-shirts in various colors.",
    image: "tshirts.jpg",
    category: "Clothes",
  },
  // Toy Donations
  {
    name: "Stuffed Animals",
    quantity: 80,
    description: "Soft and cuddly stuffed animals for children.",
    image: "stuffed_animals.jpg",
    category: "Toys",
  },
  {
    name: "Building Blocks",
    quantity: 60,
    description: "Educational building blocks for kids.",
    image: "building_blocks.jpg",
    category: "Toys",
  },
  {
    name: "Dolls",
    quantity: 40,
    description: "Diverse collection of dolls for playtime.",
    image: "dolls.jpg",
    category: "School Supplies",
  },
];
const filterOptions = {
  clothes: `
    <label for="age">Age:</label>
    <div class="age-inputs">
        <input type="number" id="minAge" placeholder="Min Age">
        <input type="number" id="maxAge" placeholder="Max Age">
    </div>
    <label for="gender">Gender:</label>
    <select id="gender">
        <option value="all">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <label for="season">Season:</label>
    <select id="season">
        <option value="all">All</option>
        <option value="summer">Summer</option>
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
        <option value="autumn">Autumn</option>
    </select>
  `,
  school: `
    <label for="itemType">Item Type:</label>
    <select id="SchoolitemType">
        <option value="books">Books</option>
        <option value="stationary">Stationary</option>
    </select>
  `,
  toys: ` <label for="age">Age:</label>
  <input type="number" id="ageMin" placeholder="Min Age">
  <input type="number" id="ageMax" placeholder="Max Age">

  <label for="gender">Gender:</label>
  <select id="gender">
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
  </select>
  <label for="category">Category:</label>
  <select id="category">
      <option value="all">All</option>
      <option value="board games">Board Games</option>
      <option value="stuffed toys">Stuffed Toys</option>
      <option value="dolls">Dolls</option>
      <option value="sports">Sports</option>
      <option value="cars">Cars</option>
      <option value="outdoor">Outdoor</option>
  </select>`,
  food: `<label for="foodCategory">Food Category:</label>
  <select id="foodCategory">
      <option value="all">All</option>
      <option value="fruits_vegetables">Fruits and Vegetables</option>
      <option value="canned_foods">Canned Foods</option>
      <option value="fresh_meals">Fresh Meals</option>
      <option value="baked_goods">Baked Goods</option>
  </select>
  `,
  medical: `<label for="medicalCategory">Medical Category:</label>
  <select id="medicalCategory">
      <option value="all">All</option>
      <option value="medical_devices">Medical Devices</option>
      <option value="medical_equipment">Medical Equipment</option>
      <option value="medication">Medication</option>
  </select>
  `,
  blood: `<label for="bloodHospital">Hospital:</label>
  <select id="bloodHospital">
      <option value="all">All</option>
      <!-- Add options for hospitals -->
  </select>
  
  <label for="bloodGovernorate">Governorate:</label>
  <select id="bloodGovernorate">
      <option value="all">All</option>
      <!-- Add options for governorates -->
  </select>
  
  <label for="bloodArea">Area:</label>
  <select id="bloodArea">
      <option value="all">All</option>
      <!-- Add options for areas -->
  </select>
  `,
};

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const selectedCategory = event.target.textContent.toLowerCase();
    if (selectedCategory === "all") {
      displayItems();
    } else {
      const selectedCategories = selectedCategory.split(" ");
      filterInputs(selectedCategories[0]);
      filterItemsByCategory(selectedCategory);
    }
  });
});

function filterItemsByCategory(category) {
  const results = items.filter((item) =>
    item.category.toLowerCase().includes(category)
  );
  displayResults(results);
}

document.getElementById("searchInput").addEventListener("input", searchItems);
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchItems();
    }
  });
function searchItems() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const results = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
  );

  displayResults(results);
}

function displayResults(results) {
  const resultsContainer = document.getElementById("itemContainer");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.textContent = "No items found.";
  } else {
    results.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("item-card");
      itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h2>${item.name}</h2>
      <p>Quantity: ${item.quantity}</p>
      <p>Description: ${item.description}</p>
      <a class="btn btn-customized" href="#" role="button"> Donate </a>
  `;
      resultsContainer.appendChild(itemElement);
    });
  }
}
function displayItems() {
  const itemContainer = document.getElementById("itemContainer");

  itemContainer.innerHTML = "";

  items.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("item-card");

    itemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <h2>${item.name}</h2>
            <p>Quantity: ${item.quantity}</p>
            <p>Description: ${item.description}</p>
            <a class="btn btn-customized" href="#" role="button"> Donate </a>
        `;

    itemContainer.appendChild(itemCard);
  });
}
function filterInputs(category) {
  const filterInputsDiv = document.getElementById("filterInputs");
  filterInputsDiv.innerHTML = "";

  const categoryInputs = filterOptions[category.toLowerCase()];

  if (categoryInputs) {
    filterInputsDiv.innerHTML = categoryInputs;
  } else {
    console.error("Category not found!");
  }
}

function filterClothes() {
  const minAgeInput = document.getElementById("minAge").value;
  const maxAgeInput = document.getElementById("maxAge").value;

  const minAge = minAgeInput ? parseInt(minAgeInput) : 0;
  const maxAge = maxAgeInput ? parseInt(maxAgeInput) : Number.MAX_VALUE;

  const gender = document.getElementById("gender").value;
  const season = document.getElementById("season").value;

  const filteredItems = items.filter((item) => {
    const fitsAgeRange = item.minAge <= maxAge && item.maxAge >= minAge;

    const fitsGender = gender === "All" || item.gender === gender;
    const fitsSeason = season === "All" || item.season === season;

    return fitsAgeRange && fitsGender && fitsSeason;
  });
  displayItems(filteredItems);
}
function filterSchoolSupplies(category) {
  let results;
  if (category === "books") {
    results = items.filter((item) => item.category.toLowerCase() === "books");
  } else if (category === "stationary") {
    results = items.filter(
      (item) => item.category.toLowerCase() === "stationary"
    );
  } else {
    results = items;
  }
  displayResults(results);
}
function filterToys() {
  const minAgeInput = document.getElementById("ageMin").value;
  const maxAgeInput = document.getElementById("ageMax").value;

  const minAge = minAgeInput ? parseInt(minAgeInput) : 0;
  const maxAge = maxAgeInput ? parseInt(maxAgeInput) : Number.MAX_VALUE;

  const gender = document.getElementById("gender").value;
  const category = document.getElementById("category").value;

  let filteredRequests = toyRequests.filter((request) => {
    const fitsAgeRange = minAge <= request.ageMax && maxAge >= request.ageMin;
    const fitsGender = gender === "All" || request.gender === gender;
    const fitsCategory = category === "All" || request.category === category;

    return fitsAgeRange && fitsGender && fitsCategory;
  });

  displayResults(filteredRequests);
}
function filterFoodRequests() {
  const foodCategory = document.getElementById("foodCategory").value;

  const filteredRequests = foodRequests.filter((request) => {
    return foodCategory === "all" || request.category === foodCategory;
  });

  displayFoodRequests(filteredRequests);
}
function filterMedicalRequests() {
  const medicalCategory = document.getElementById("medicalCategory").value;

  const filteredRequests = medicalRequests.filter((request) => {
    return medicalCategory === "all" || request.category === medicalCategory;
  });

  displayMedicalRequests(filteredRequests);
}
function filterBloodRequests() {
  const selectedHospital = document.getElementById("bloodHospital").value;
  const selectedGovernorate = document.getElementById("bloodGovernorate").value;
  const selectedArea = document.getElementById("bloodArea").value;

  const filteredRequests = bloodRequests.filter((request) => {
    return (
      (selectedHospital === "all" || request.hospital === selectedHospital) &&
      (selectedGovernorate === "all" ||
        request.governorate === selectedGovernorate) &&
      (selectedArea === "all" || request.area === selectedArea)
    );
  });

  displayBloodRequests(filteredRequests);
}

displayItems();
document.getElementById("minAge").addEventListener("change", filterClothes);
document.getElementById("maxAge").addEventListener("change", filterClothes);
document.getElementById("gender").addEventListener("change", filterClothes);
document.getElementById("season").addEventListener("change", filterClothes);
document
  .getElementById("itemType")
  .addEventListener("change", filterSchoolSupplies);
document.getElementById("ageMin").addEventListener("input", filterToys);
document.getElementById("ageMax").addEventListener("input", filterToys);
document.getElementById("gender").addEventListener("change", filterToys);
document.getElementById("category").addEventListener("change", filterToys);
document
  .getElementById("foodCategory")
  .addEventListener("change", filterFoodRequests);
document
  .getElementById("medicalCategory")
  .addEventListener("change", filterMedicalRequests);
document
  .getElementById("bloodHospital")
  .addEventListener("change", filterBloodRequests);
document
  .getElementById("bloodGovernorate")
  .addEventListener("change", filterBloodRequests);
document
  .getElementById("bloodArea")
  .addEventListener("change", filterBloodRequests);
