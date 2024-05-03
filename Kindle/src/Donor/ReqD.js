document.addEventListener("DOMContentLoaded", function () {
  let currentCategory = "all";
  const items = [
    // Hospital Items
    {
      name: "First Aid Kit",
      quantity: 10,
      description: "Essential first aid supplies for emergencies.",
      image: "../assets/img/items/medkit.png",
      category: "Medical Supplies",
      medicalCategory: "medication",
    },
    {
      name: "Wheelchair",
      quantity: 5,
      description: "A wheelchair for patients with mobility needs.",
      image: "../assets/img/items/wheelchair.png",
      category: "Medical Supplies",
      medicalCategory: "equipment",
    },
    {
      name: "Stethoscope",
      quantity: 20,
      description:
        "A device for listening to the internal sounds of the body.",
      image: "../assets/img/items/Stethoscope.png",
      category: "Medical Supplies",
      medicalCategory: "devices",
    },
    {
      name: "Surgical Masks",
      quantity: 100,
      description: "Protective masks worn by healthcare professionals.",
      image: "../assets/img/items/Surgical Masks.png",
      category: "devices",
    },
    // Blood Donations
    {
      name: "Blood Pressure Monitor",
      quantity: 15,
      description: "Device used to measure blood pressure.",
      image: "../assets/img/items/Blood Pressure Monitor.png",
      category: "Blood Donations",
    },
    {
      name: "Blood Glucose Meter",
      quantity: 8,
      description: "Measure concentration of glucose in the blood.",
      image: "../assets/img/items/Blood Glucose Meter.png",
      category: "Blood Donations",
    },
    {
      name: "Blood Bag",
      quantity: 25,
      description: "Sterile bag used to collect and store blood.",
      image: "../assets/img/items/Blood Bag.png",
      category: "Blood Donations",
    },
    {
      name: "Blood Donation Kit",
      quantity: 50,
      description: "Kit containing supplies for blood donation.",
      image: "../assets/img/items/Blood Donation Kit.png",
      category: "Blood Donations",
    },
    // School Donations
    {
      name: "Books",
      quantity: 30,
      description: "Educational books for students.",
      image: "../assets/img/items/Books.png",
      category: "School Supplies",
      itemType: "books",
    },
    {
      name: "Stationery Set",
      quantity: 12,
      description:
        "Includes pens, pencils and other essentials for school.",
      image: "../assets/img/items/Stationery Set.png",
      category: "School Supplies",
      itemType: "stationary",
    },
    {
      name: "Backpack",
      quantity: 40,
      description: "A bag used to carry books and school supplies.",
      image: "../assets/img/items/Backpack.png",
      category: "School Supplies",
      itemType: "stationary",
    },
    // Food Donations
    {
      name: "Canned Food",
      quantity: 200,
      description: "Non-perishable food items in cans.",
      image: "../assets/img/items/Canned Food.png",
      category: "Food",
      foodType: "canned",
    },
    {
      name: "Rice",
      quantity: 100,
      description: "Staple food grain,a fundamental source of sustenance.",
      image: "../assets/img/items/Ricepng",
      category: "Food",
      foodType: "fresh",
    },
    {
      name: "Fresh Fruits",
      quantity: 50,
      description: "Assorted fresh fruits,a nutritious food for consumption.",
      image: "../assets/img/items/Fresh Fruits.png",
      category: "Food",
      foodType: "fruits",
    },
    // Clothing Donations
    {
      name: "Jackets",
      quantity: 30,
      description: "Warm jackets for cold weather.",
      image: "../assets/img/items/Blood Donation Kit.png",
      category: "Clothes",
      minAge: 5,
      maxAge: 70,
      gender: "all",
      season: "winter",
    },
    {
      name: "Shoes",
      quantity: 50,
      description: "Assorted shoes for all ages.",
      image: "shoes.jpg",
      category: "Clothes",
      minAge: 0,
      maxAge: 80,
      gender: "male",
      season: "winter",
    },
    {
      name: "T-shirts",
      quantity: 100,
      description: "Casual t-shirts in various colors.",
      image: "tshirts.jpg",
      category: "Clothes",
      minAge: 10,
      maxAge: 50,
      gender: "female",
      season: "summer",
    },
    {
      name: "Stuffed Animals",
      quantity: 80,
      description: "Soft and cuddly stuffed animals for children.",
      image: "stuffed_animals.jpg",
      category: "Toys",
      gender: "all",
      ageMin: 0,
      ageMax: 12,
      ToysCategory: "dolls",
    },
    {
      name: "Building Blocks",
      quantity: 60,
      description: "Educational building blocks for kids.",
      image: "building_blocks.jpg",
      category: "Toys",
      gender: "male",
      ageMin: 2,
      ageMax: 8,
      ToysCategory: "dolls",
    },

    {
      name: "Board Games",
      quantity: 50,
      description: "Fun and interactive board games for the whole family.",
      image: "board_games.jpg",
      category: "Toys",
      gender: "all",
      ageMin: 5,
      ageMax: 99,
      ToysCategory: "dolls",
    },
    {
      name: "Sports Equipment",
      quantity: 30,
      description: "Various sports equipment for outdoor activities.",
      image: "sports_equipment.jpg",
      category: "Toys",
      gender: "female",
      ageMin: 5,
      ageMax: 15,
      ToysCategory: "dolls",
    },
    {
      name: "Toy Cars",
      quantity: 70,
      description: "Assorted toy cars for children to play with.",
      image: "toy_cars.jpg",
      category: "Toys",
      gender: "male",
      ageMin: 2,
      ageMax: 12,
      ToysCategory: "stuffed toys",
    },
    {
      name: "Outdoor Playset",
      quantity: 20,
      description: "Complete outdoor playset for children's fun and exercise.",
      image: "outdoor_playset.jpg",
      category: "Toys",
      gender: "all",
      ageMin: 3,
      ageMax: 10,
      ToysCategory: "stuffed toys",
    },
  ];

  const filterOptions = {
    clothes: `
    <div id = "ageClothes"class="radio-container">
                    <h3 style="text-align: left;color: white;">Age :</h3>
                    <div class="radio-wrapper">
                        
                        <label class="radio-button">
                            <input value ="0-1000" name="age" type="radio" checked>
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">All</span>
                        </label>
                    </div>
                  
                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input  value ="0-5" name="age" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">0-5 years old</span>
                        </label>
                    </div>

                    
                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input value ="5-10"  name="age" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">5-10 years old</span>
                        </label>
                    </div>
                    
                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input  value ="10-17" name="age" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">10-17 years old</span>
                        </label>
                    </div>

                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input value ="18-1000" name="age" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">18 and above years old</span>
                        </label>
                    </div>
                    <!-- Add more radio buttons for subjects -->
            
                </div>

<div id = "genderClothes"class="radio-container">
                <h3 style="text-align: left;color: white;">Gender :</h3>
                <div class="radio-wrapper">
                    
                    <label class="radio-button">
                        <input value ="all" name="gender" type="radio" checked>
                        <span class="radio-checkmark"></span>
                        <span class="radio-label">All</span>
                    </label>
                </div>
              
                <div class="radio-wrapper">
                    <label class="radio-button">
                        <input  value ="male" name="gender" type="radio">
                        <span class="radio-checkmark"></span>
                        <span class="radio-label">Male</span>
                    </label>
                </div>

                
                <div class="radio-wrapper">
                    <label class="radio-button">
                        <input value ="female"  name="gender" type="radio">
                        <span class="radio-checkmark"></span>
                        <span class="radio-label">Female</span>
                    </label>
                </div>
                
        
    </div>
  <div id = "seasonClothes"class="radio-container">
                    <h3 style="text-align: left;color: white;">Season :</h3>
                    <div class="radio-wrapper">
                        
                        <label class="radio-button">
                            <input value ="all" name="season" type="radio" checked>
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">All</span>
                        </label>
                    </div>
                  
                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input  value ="winter" name="season" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Winter</span>
                        </label>
                    </div>

                    
                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input value ="autumn"  name="season" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Autumn</span>
                        </label>
                    </div>
                    
                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input  value ="spring" name="season" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Spring</span>
                        </label>
                    </div>

                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input value ="summer" name="season" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Summer</span>
                        </label>
                    </div>
                    <!-- Add more radio buttons for subjects -->
            
                </div>
       `,
    school: `
    <div id = "school"class="radio-container">
                    <h3 style="text-align: left;color: white;">School Item :</h3>
                    <div class="radio-wrapper">
                        
                        <label class="radio-button">
                            <input value ="all" name="school" type="radio" checked>
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">All</span>
                        </label>
                    </div>
                  
                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input  value ="books" name="school" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Book</span>
                        </label>
                    </div>

                    
                    <div class="radio-wrapper">
                        <label class="radio-button">
                            <input value ="stationary"  name="school" type="radio">
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Stationary</span>
                        </label>
                    </div>
                    

            
                </div>
  `,
    toys: `     <div id = "ageToys"class="radio-container">
    <h3 style="text-align: left;color: white;">Age :</h3>
    <div class="radio-wrapper">
        
        <label class="radio-button">
            <input value ="0-1000" name="age" type="radio" checked>
            <span class="radio-checkmark"></span>
            <span class="radio-label">All</span>
        </label>
    </div>
  
    <div class="radio-wrapper">
        <label class="radio-button">
            <input  value ="0-5" name="age" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">0-5 years old</span>
        </label>
    </div>

    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value ="5-10"  name="age" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">5-10 years old</span>
        </label>
    </div>
    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input  value ="10-18" name="age" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">10-18 years old</span>
        </label>
    </div>

</div>

<div id = "genderToys"class="radio-container">
<h3 style="text-align: left;color: white;">Gender :</h3>
<div class="radio-wrapper">
    
    <label class="radio-button">
        <input value ="all" name="gender" type="radio" checked>
        <span class="radio-checkmark"></span>
        <span class="radio-label">All</span>
    </label>
</div>

<div class="radio-wrapper">
    <label class="radio-button">
        <input  value ="male" name="gender" type="radio">
        <span class="radio-checkmark"></span>
        <span class="radio-label">Male</span>
    </label>
</div>


<div class="radio-wrapper">
    <label class="radio-button">
        <input value ="female"  name="gender" type="radio">
        <span class="radio-checkmark"></span>
        <span class="radio-label">Female</span>
    </label>
</div>


</div>

<div id = "categoryToys"class="radio-container">
<h3 style="text-align: left;color: white;">Toy type :</h3>
<div class="radio-wrapper">
    
    <label class="radio-button">
        <input value ="all" name="toys" type="radio" checked>
        <span class="radio-checkmark"></span>
        <span class="radio-label">All</span>
    </label>
</div>

<div class="radio-wrapper">
    <label class="radio-button">
        <input  value ="sport" name="toys" type="radio">
        <span class="radio-checkmark"></span>
        <span class="radio-label">Sports</span>
    </label>
</div>


<div class="radio-wrapper">
    <label class="radio-button">
        <input value ="board"  name="toys" type="radio">
        <span class="radio-checkmark"></span>
        <span class="radio-label">Board Games</span>
    </label>
</div>

<div class="radio-wrapper">
    <label class="radio-button">
        <input  value ="dolls" name="toys" type="radio">
        <span class="radio-checkmark"></span>
        <span class="radio-label">Dolls</span>
    </label>
</div>

<div class="radio-wrapper">
    <label class="radio-button">
        <input value ="outdoor" name="toys" type="radio">
        <span class="radio-checkmark"></span>
        <span class="radio-label">Outdoor</span>
    </label>
</div>
<div class="radio-wrapper">
    <label class="radio-button">
        <input value ="stuffed toys" name="toys" type="radio">
        <span class="radio-checkmark"></span>
        <span class="radio-label">stuffed toys</span>
    </label>
</div>
<!-- Add more radio buttons for subjects -->

</div>
`,
    food: `<div id = "food"class="radio-container">
    <h3 style="text-align: left;color: white;">Food type :</h3>
    <div class="radio-wrapper">
        
        <label class="radio-button">
            <input value ="all" name="food" type="radio" checked>
            <span class="radio-checkmark"></span>
            <span class="radio-label">All</span>
        </label>
    </div>
    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input  value ="fruits" name="food" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Fruits and Vegetables</span>
        </label>
    </div>
    
    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value ="canned"  name="food" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Canned Food</span>
        </label>
    </div>
    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input  value ="baked" name="food" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Baked goods</span>
        </label>
    </div>
    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value ="fresh" name="food" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Fresh Meals</span>
        </label>
    </div>
    <!-- Add more radio buttons for subjects -->
    
    </div>
  `,
    medical: `
    <div id = "medical"class="radio-container">
    <h3 style="text-align: left;color: white;">Medical Supplies :</h3>
    <div class="radio-wrapper">
        
        <label class="radio-button">
            <input value ="all" name="medical" type="radio" checked>
            <span class="radio-checkmark"></span>
            <span class="radio-label">All</span>
        </label>
    </div>
    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input  value ="devices" name="medical" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Medical Devices</span>
        </label>
    </div>
    
    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value ="equipment"  name="medical" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Medical Equipment</span>
        </label>
    </div>
    
    
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value ="medication" name="medical" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Medication</span>
        </label>
    </div>
    <!-- Add more radio buttons for subjects -->
    
    </div>
  `,
    blood: `
    <div id ="organizationBlood"class="radio-container">
    <h3 style="text-align: left;color: white;">Hospital :</h3>
    <div class="radio-wrapper">
        <label class="radio-button">
            <input id="All" name="organization" type="radio" checked>
            <span class="radio-checkmark"></span>
            <span class="radio-label">All</span>
        </label>
    </div>
  
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="ain" name="organization" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Ain Shams Specialized Hospital</span>
        </label>
    </div>

    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="damascus" name="organization" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Damascus Hospital </span>
        </label>
    </div>

    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="greek" name="organization" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Greek hospital</span>
        </label>
    </div>
  
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="medical" name="organization" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Cairo Medical Hospital</span>
        </label>
    </div>
    <!-- Add more radio buttons for areas -->

</div>

<div id = "areaBlood"class="radio-container">
    <h3 style="text-align: left;color: white;">Area :</h3>
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="all" name="area" type="radio" checked>
            <span class="radio-checkmark"></span>
            <span class="radio-label">All</span>
        </label>
    </div>
  
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="fifth" name="area" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Fifth Settlement</span>
        </label>
    </div>

    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="heliopolis" name="area" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Heliopolis</span>
        </label>
    </div>

    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="octobor" name="area" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">6th Octobor</span>
        </label>
    </div>
  
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="dokki" name="area" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Dokki</span>
        </label>
    </div>
    <!-- Add more radio buttons for areas -->

</div>

<div id="governorateBlood"class="radio-container">
    <h3 style="text-align: left;color: white;">Governorate :</h3>
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="all" name="governorate" type="radio" checked>
            <span class="radio-checkmark"></span>
            <span class="radio-label">All</span>
        </label>
    </div>
  
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="cairo" name="governorate" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Cairo</span>
        </label>
    </div>

    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="alexandria" name="governorate" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Alexandria</span>
        </label>
    </div>

    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="aswan" name="governorate" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Aswan</span>
        </label>
    </div>
  
    <div class="radio-wrapper">
        <label class="radio-button">
            <input value="giza" name="governorate" type="radio">
            <span class="radio-checkmark"></span>
            <span class="radio-label">Giza</span>
        </label>
    </div>
    <!-- Add more radio buttons for areas -->

</div>
  `,
    all: ``,
  };

  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      const selectedCategory = event.target.textContent.toLowerCase();
      if (selectedCategory === "all") {
        const resultsContainer = document.getElementById("filterInputs");
        resultsContainer.innerHTML = "";
        currentCategory = "all";
        displayItems();
      } else {
        const selectedCategories = selectedCategory.split(" ");
        currentCategory = selectedCategories[0];
        filterInputs(selectedCategories[0]);
        filterItemsByCategory(selectedCategory);
      }
    });
  });

  function filterItemsByCategory2(category) {
    const results = items.filter((item) =>
      item.category.toLowerCase().includes(category)
    );
    return results;
  }
  function filterItemsByCategory(category) {
    const results = filterItemsByCategory2(category);
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
    let currentList;
    console.log(currentCategory);
    if (currentCategory === "all") {
      currentList = items;
    } else {
      currentList = filterItemsByCategory2(currentCategory);
    }
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const results = currentList.filter(
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
   <a ><img src="${item.image}" alt="${item.name}" /><br>
            <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${item.name}</h2><br>
            <p style="color:color:#0c0f1d;font-size:26px ">Description: ${item.description}</p>
            <button class="details-button" id="details-Button" style="background-color: #222024;">More Details</button>
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
  function displayItems() {
    const itemContainer = document.getElementById("itemContainer");

    itemContainer.innerHTML = "";

    items.forEach((item) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");

      itemCard.innerHTML = `
      <a ><img src="${item.image}" alt="${item.name}" /><br>
            <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${item.name}</h2><br>
            <p style="color:color:#0c0f1d;font-size:26px ">Description: ${item.description}</p>
            <button class="details-button" id="details-button" style="background-color: #222024;">More Details</button>
             </a>
             
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
    let FilterItems = filterItemsByCategory2(currentCategory);
    console.log(seasonClothes, genderClothes, minAgeClothes, maxAgeClothes);
    const minAge = minAgeClothes;
    const maxAge = maxAgeClothes;
    const gender = genderClothes;
    const season = seasonClothes;
    console.log(season, gender, minAge, maxAge);
    const filteredItems = FilterItems.filter((item) => {
      console.log(
        item.name,
        item.season,
        item.gender,
        item.minAge,
        item.maxAge
      );
      const fitsAgeRange = item.minAge >= minAge && item.maxAge <= maxAge;
      const fitsGender =
        gender === "all" || item.gender === gender || item.gender === "all";
      const fitsSeason =
        season === "all" || item.season === season || item.season === "all";
      return fitsAgeRange && fitsGender && fitsSeason;
    });
    displayResults(filteredItems);
  }
  function filterSchoolSupplies() {
    let FilterItems = filterItemsByCategory2(currentCategory);
    const itemType = SchoolItem;
    console.log(itemType);
    let results = FilterItems.filter((item) => {
      console.log(item.itemType, itemType);
      const fitsCategory = item.itemType === itemType || itemType === "all";
      return fitsCategory;
    });
    displayResults(results);
  }

  function filterFoodRequests() {
    let FilterItems = filterItemsByCategory2(currentCategory);
    const foodCategory = categoryFood;

    const filteredRequests = FilterItems.filter((request) => {
      return (
        foodCategory === "all" ||
        request.foodType === foodCategory ||
        request.foodType === "all"
      );
    });

    displayResults(filteredRequests);
  }
  function filterMedicalRequests() {
    let FilterItems = filterItemsByCategory2(currentCategory);
    const medicalCategory = categoryMedical;
    console.log(medicalCategory);
    if (medicalCategory === "all") {
      console.log(medicalCategory);
      console.log(FilterItems);
      displayResults(FilterItems);
    } else {
      const filteredRequests = FilterItems.filter((request) => {
        return medicalCategory === request.medicalCategory;
      });
      displayResults(filteredRequests);
    }
  }
  function filterBloodRequests() {
    let FilterItems = filterItemsByCategory2(currentCategory);
    const selectedHospital = organizationBlood;
    const selectedGovernorate = governorateBlood;
    const selectedArea = areaBlood;

    const filteredRequests = FilterItems.filter((request) => {
      return (
        (selectedHospital === "all" || request.hospital === selectedHospital) &&
        (selectedGovernorate === "all" ||
          request.governorate === selectedGovernorate) &&
        (selectedArea === "all" || request.area === selectedArea)
      );
    });

    displayResults(filteredRequests);
  }
  function filterToys() {
    let FilterItems = filterItemsByCategory2(currentCategory);
    const minAgeInput = MinAgeToys;
    const maxAgeInput = MaxAgeToys;

    const minAge = minAgeInput ? parseInt(minAgeInput) : 0;
    const maxAge = maxAgeInput ? parseInt(maxAgeInput) : 1000;

    const gender = genderToys;
    const category = categoryToys;
    console.log(minAge, maxAge, gender, category);
    let filteredRequests = FilterItems.filter((request) => {
      const fitsAgeRange = minAge <= request.ageMin && maxAge >= request.ageMax;
      const fitsGender =
        gender === "all" ||
        request.gender === gender ||
        request.gender === "all";
      const fitsCategory =
        category === "all" ||
        request.ToysCategory === category ||
        request.ToysCategory === "all";
      if (fitsAgeRange && fitsGender && fitsCategory) {
        console.log(
          request.name,
          request.ageMin,
          request.ageMax,
          request.gender,
          request.ToysCategory
        );
      }
      return fitsAgeRange && fitsGender && fitsCategory;
    });

    displayResults(filteredRequests);
  }
  displayItems();

  function centerPopup() {
    var popup = document.querySelector('.popup-container');
    var popupWidth = popup.offsetWidth;
    var popupHeight = popup.offsetHeight;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
  
    var topPos = (screenHeight - popupHeight) / 2;
    var leftPos = (screenWidth - popupWidth) / 2;
  
    popup.style.top = topPos + 'px';
    popup.style.left = leftPos + 'px';
  }
  
  // Call the centerPopup function when the window is resized or scrolled
  window.addEventListener('resize', centerPopup);
  window.addEventListener('scroll', centerPopup);
  
  // Call the centerPopup function initially
  centerPopup();
  

  let minAgeClothes = 0;
  let maxAgeClothes = 1000;
  let genderClothes = "all";
  let seasonClothes = "all";
  document.body.addEventListener("change", function (event) {
    if (
      event.target.closest(".radio-container").id === "ageClothes" ||
      event.target.closest(".radio-container").id === "genderClothes" ||
      event.target.closest(".radio-container").id === "seasonClothes"
    ) {
      console.log(event.target.closest(".radio-container").id);
      minAgeClothes = document
        .querySelector('input[name="age"]:checked')
        .value.split("-")[0];
      maxAgeClothes = document
        .querySelector('input[name="age"]:checked')
        .value.split("-")[1];
      genderClothes = document.querySelector(
        'input[name="gender"]:checked'
      ).value;
      seasonClothes = document.querySelector(
        'input[name="season"]:checked'
      ).value;
      filterClothes();
    }
  });
  let SchoolItem = "all";
  document.body.addEventListener("change", function (event) {
    if (event.target.closest(".radio-container").id === "school") {
      SchoolItem = document.querySelector('input[name="school"]:checked').value;
      filterSchoolSupplies();
    }
  });
  let MinAgeToys = 0;
  let MaxAgeToys = 1000;
  let genderToys = "all";
  let categoryToys = "all";
  document.body.addEventListener("change", function (event) {
    if (
      event.target.closest(".radio-container").id === "ageToys" ||
      event.target.closest(".radio-container").id === "genderToys" ||
      event.target.closest(".radio-container").id === "categoryToys"
    ) {
      MinAgeToys = document
        .querySelector('input[name="age"]:checked')
        .value.split("-")[0];
      MaxAgeToys = document
        .querySelector('input[name="age"]:checked')
        .value.split("-")[1];
      genderToys = document.querySelector('input[name="gender"]:checked').value;
      categoryToys = document.querySelector('input[name="toys"]:checked').value;
      filterToys();
    }
  });
  let categoryFood = "all";
  document.body.addEventListener("change", function (event) {
    if (event.target.closest(".radio-container").id === "food") {
      categoryFood = document.querySelector('input[name="food"]:checked').value;
      filterFoodRequests();
    }
  });
  let categoryMedical = "all";
  document.body.addEventListener("change", function (event) {
    if (event.target.closest(".radio-container").id === "medical") {
      categoryMedical = document.querySelector(
        'input[name="medical"]:checked'
      ).value;
      filterMedicalRequests();
    }
  });
  let areaBlood = "all";
  let governorateBlood = "all";
  let organizationBlood = "all";
  document.body.addEventListener("change", function (event) {
    if (
      event.target.closest(".radio-container").id === "areaBlood" ||
      event.target.closest(".radio-container").id === "governorateBlood" ||
      event.target.closest(".radio-container").id === "organizationBlood"
    ) {
      areaBlood = document.querySelector('input[name="area"]:checked').value;
      organizationBlood = document.querySelector(
        'input[name="organization"]:checked'
      ).value;
      governorateBlood = document.querySelector(
        'input[name="governorate"]:checked'
      ).value;
      filterBloodRequests();
    }
  });

  const popupContainer = document.querySelector(".popup-container");
  const detailsButton = document.querySelectorAll(".details-button");
  const closeButton = document.querySelector(".close-button");

    detailsButton.forEach(button => {
        button.addEventListener('click', function() {
            // Provide feedback to the user
            popupContainer.style.display = "block";
        });
    });
    closeButton.addEventListener("click", function() {
    popupContainer.style.display = "none";
    });

  // document.body.addEventListener("click",function(event) {
  //   if(event.target.id == "detailsButton"){
  //     alert('You clicked the button!');
  //   }
  //   else if(event.target.id == "resultDetailsButton"){
  //     alert('You clicked the results button');
  //   }
  // });
  
});
