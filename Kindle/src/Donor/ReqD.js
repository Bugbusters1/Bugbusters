document.addEventListener("DOMContentLoaded", function () {
  let currentCategory = "all";
  let currentText;
  const items = [
    // Hospital Items
    {
      name: "First Aid Kit",
      quantity: 10,
      description: "Essential first aid supplies for emergencies.",
      image: "../assets/img/items/medkit.png",
      category: "Medical Supplies",
      medicalCategory: "medication",
      text: ` 
     Device Type:
        - Bandages (adhesive strips)
        - Gauze pads
        - Adhesive tape
        - Antiseptic wipes
        - Scissors
        - Tweezers
        - Disposable gloves
        - CPR mask
        - Thermometer
        - Pain relievers (e.g., ibuprofen, acetaminophen)
        - Antihistamines
        - Hand sanitizer
       
       Use:
        - Bandages for covering wounds and stopping bleeding
        - Gauze pads for dressing larger wounds
        - Adhesive tape for securing bandages and dressings
        - Antiseptic wipes for cleaning wounds
        - Scissors and tweezers for wound care and splinter removal
        - Disposable gloves for infection control
        - CPR mask for performing CPR
        - Thermometer for checking body temperature
        - Pain relievers for reducing pain and fever
        - Antihistamines for allergic reactions
        - Hand sanitizer for hand hygiene

      Quantity needed: 70
      `
    },
    {
      name: "Wheelchair",
      quantity: 5,
      description: "A wheelchair for patients with mobility needs.",
      image: "../assets/img/items/wheelchair.png",
      category: "Medical Supplies",
      medicalCategory: "equipment",
      text: `
       Device Type: 
        - Manual Wheelchair: A wheelchair propelled by the user or an attendant through the use of hand rims attached to the rear wheels.
        - Power Wheelchair: A wheelchair powered by batteries and electric motors, allowing for independent movement by the user.
        - Transport Wheelchair: A lightweight and compact wheelchair designed for short-term use or transport, often with smaller rear wheels and without large hand rims .
      
        Use:
        - Mobility Aid: Wheelchairs provide mobility assistance to individuals who have difficulty walking or standing for extended periods due to various conditions such as paralysis, spinal cord injuries, neuromuscular disorders, or temporary injuries.
        - Independence: Wheelchairs empower users to move around independently, perform daily activities, and participate in social and community interactions.
        - Accessibility: Wheelchairs enable users to access various environments, including homes, workplaces, public buildings, transportation, and outdoor spaces, by overcoming architectural barriers and obstacles.
        - Rehabilitation: Wheelchairs may be used as part of rehabilitation programs to facilitate recovery, improve strength, endurance, and coordination, and enhance overall mobility and function.
        - Transportation: Wheelchairs serve as a means of transportation for individuals who cannot walk long distances or stand for extended periods, allowing them to travel within indoor and outdoor environments and participate in outings, errands, and recreational activities.
      
      Quantity needed: 50
      `,
    },
    {
      name: "Stethoscope",
      quantity: 20,
      description: "A device for listening to the internal sounds of the body.",
      image: "../assets/img/items/Stethoscope.png",
      category: "Medical Supplies",
      medicalCategory: "devices",
      text: `
      Device Type:
         - Acoustic Stethoscope: The most common type of stethoscope, which uses hollow tubes and a chest piece with a diaphragm and bell to transmit sound from the patient's body to the listener's ears.
         - Electronic Stethoscope: A modern variant of the traditional stethoscope that amplifies and filters sounds, often allowing for better auscultation in noisy environments and enabling recording and playback of sounds.
         - Fetal Stethoscope (Fetoscope): A specialized stethoscope used by healthcare providers to listen to fetal heart sounds during pregnancy, typically with a bell-shaped or flat disk attachment.
      
      Use:
         - Auscultation: Stethoscopes are primarily used for auscultation, the process of listening to sounds produced by the body, such as heart sounds, lung sounds, and bowel sounds, to assess the health and function of various organs and systems.
         - Physical Examination: Stethoscopes are essential tools in physical examinations performed by healthcare providers to evaluate cardiac, respiratory, and gastrointestinal function, identify abnormal sounds, detect murmurs, wheezes, or abnormal rhythms, and monitor changes in patient condition.
         - Diagnosis: Stethoscopes aid in the diagnosis of cardiovascular diseases, respiratory disorders, gastrointestinal issues, and other medical conditions by allowing healthcare providers to listen for specific sounds indicative of underlying pathology or abnormalities.
         - Monitoring: Stethoscopes are used for ongoing monitoring of patients in clinical settings, such as intensive care units, emergency departments, and ambulatory care settings, to assess vital signs, detect changes in cardiac or respiratory status, and evaluate treatment effectiveness.
         - Education: Stethoscopes are essential educational tools for medical students, nurses, physician assistants, and other healthcare professionals to learn auscultation skills, recognize normal and abnormal sounds, and develop clinical proficiency in patient assessment and diagnosis.
      
        Quantity needed: 40
         `,
    },
    {
      name: "Surgical Masks",
      quantity: 100,
      description: "Protective masks worn by healthcare professionals.",
      image: "../assets/img/items/Surgical Masks.png",
      category: "devices",
      text: `
 Device Type:
   - Surgical masks are disposable, loose-fitting devices that cover the nose and mouth and provide a barrier to prevent the spread of infectious droplets from the wearer to others and vice versa.
   - They are typically made of multiple layers of non-woven fabric, such as polypropylene, with a metal strip at the top to conform to the shape of the nose and elastic ear loops to secure the mask in place.

 Use:
   - Infection Control: Surgical masks are primarily used in healthcare settings as part of standard infection control measures to protect healthcare workers, patients, and others from respiratory droplets containing pathogens, such as bacteria and viruses, that may be expelled during coughing, sneezing, or talking.
   - Source Control: Surgical masks serve as a source control measure by containing respiratory secretions from the wearer, reducing the risk of transmitting infectious particles to others, particularly in situations where physical distancing may be challenging, such as hospitals, clinics, and public transportation.
   - Surgical Procedures: Surgical masks are worn by healthcare providers during surgical procedures and other medical interventions to prevent contamination of the surgical field and reduce the risk of postoperative infections by filtering out airborne particles and droplets.
   - Personal Protection: Surgical masks also offer some level of personal protection to the wearer by filtering out large respiratory droplets and splashes, although they are not as effective as respirators, such as N95 respirators, in filtering out smaller airborne particles, such as viruses.
   - General Public Use: Surgical masks are also used by the general public, especially during outbreaks of infectious diseases, to reduce the risk of transmission in community settings, such as grocery stores, public transit, and workplaces, where physical distancing may be difficult to maintain.

   Quantity needed: 70
      `,
    },
    // Blood Donations
    {
      name: "Blood Pressure Monitor",
      quantity: 15,
      description: "Device used to measure blood pressure.",
      image: "../assets/img/items/Blood Pressure Monitor.png",
      category: "Blood Donations",
      text: `
 Device Type:
   - Blood pressure monitors, also known as sphygmomanometers, are medical devices used to measure blood pressure levels. They come in various types, including manual, digital, and ambulatory monitors.

 Use:
   - Blood Pressure Measurement: The primary purpose of a blood pressure monitor is to measure blood pressure, which refers to the force of blood against the walls of the arteries as the heart pumps it around the body. Blood pressure is expressed in millimeters of mercury (mmHg) and typically consists of two values: systolic pressure (the pressure when the heart beats) and diastolic pressure (the pressure when the heart is at rest between beats).
   - Hypertension Management: Blood pressure monitors are essential tools for diagnosing and monitoring hypertension (high blood pressure) and hypotension (low blood pressure), which are significant risk factors for cardiovascular diseases, including heart attacks and strokes. Regular blood pressure monitoring helps healthcare providers assess the effectiveness of treatment and make adjustments to medication and lifestyle changes as needed to control blood pressure levels and reduce the risk of complications.
   - Home Monitoring: Many individuals with hypertension or other cardiovascular conditions use home blood pressure monitors to track their blood pressure levels regularly outside of clinical settings. Home monitoring allows patients to take more frequent measurements and provides valuable information to healthcare providers for managing blood pressure and optimizing treatment strategies.
   - Preventive Care: Blood pressure monitors are also used in preventive care to screen individuals for hypertension and identify those at risk of developing cardiovascular diseases. Early detection and intervention through regular blood pressure monitoring and lifestyle modifications, such as maintaining a healthy diet, exercising regularly, managing stress, and avoiding tobacco and excessive alcohol consumption, can help prevent or delay the onset of hypertension and its associated complications.

  Quantity needed: 70
      `,
    },
    {
      name: "Blood Glucose Meter",
      quantity: 8,
      description: "Measure concentration of glucose in the blood.",
      image: "../assets/img/items/Blood Glucose Meter.png",
      category: "Blood Donations",
      text: `
 Device Type:
   - A blood glucose meter, also known as a glucometer or blood sugar meter, is a small, portable electronic device used to measure the concentration of glucose (sugar) in the blood. These meters are available in various models, ranging from basic models to more advanced ones with additional features.

 Use:
   - Blood Glucose Monitoring: The primary purpose of a blood glucose meter is to monitor blood sugar levels, which is crucial for individuals with diabetes mellitus. Diabetes is a chronic condition characterized by high levels of glucose in the blood due to the body's inability to produce or properly use insulin, a hormone that regulates blood sugar. Monitoring blood glucose levels regularly helps individuals with diabetes manage their condition effectively and prevent complications.
   - Self-Testing: Blood glucose meters allow individuals with diabetes to perform self-testing of their blood sugar levels at home or on the go. Regular self-monitoring of blood glucose (SMBG) helps individuals track their blood sugar levels throughout the day, identify patterns, and make informed decisions about insulin doses, medication, diet, and physical activity to maintain optimal blood sugar control.
   - Hypoglycemia and Hyperglycemia Detection: Blood glucose meters are used to detect episodes of hypoglycemia (low blood sugar) and hyperglycemia (high blood sugar), which are common complications of diabetes. Prompt identification and management of these conditions are essential for preventing adverse health outcomes, such as diabetic ketoacidosis (DKA) or insulin shock (severe hypoglycemia), and maintaining overall well-being.
   - Diabetes Management: Blood glucose meters are integral components of diabetes management plans, which may also include other tools and strategies, such as insulin therapy, oral medications, diet and nutrition counseling, regular exercise, and lifestyle modifications. By monitoring blood sugar levels regularly and adjusting treatment regimens accordingly, individuals with diabetes can achieve better glycemic control, reduce the risk of complications, and improve their quality of life.

   Quantity needed: 70
   `,
    },
    {
      name: "Blood Bag",
      quantity: 25,
      description: "Sterile bag used to collect and store blood.",
      image: "../assets/img/items/Blood Bag.png",
      category: "Blood Donations",
      text: `
       Device Type:
         - A blood bag is a sterile, disposable container used for collecting, storing, and transporting blood and its components. It is typically made of medical-grade plastic materials that are compatible with blood products and maintain the integrity and safety of the collected blood. Blood bags come in various sizes and configurations, depending on the specific requirements of blood collection and transfusion procedures.
      
       Use:
         - Blood Collection: Blood bags are used for collecting whole blood donations from voluntary blood donors during blood donation drives or at blood collection centers. The process involves inserting a sterile needle into the donor's vein and allowing blood to flow into the blood bag under gravity or with the assistance of a blood collection device. The collected blood is then sealed in the bag using an airtight closure mechanism to prevent contamination and maintain sterility.
         - Blood Component Separation: After blood collection, the whole blood in the bag is typically processed in a blood bank or laboratory to separate it into various blood components, such as red blood cells (RBCs), platelets, plasma, and cryoprecipitate. This process, known as blood component separation or blood fractionation, allows healthcare providers to obtain specific blood products tailored to the needs of patients requiring transfusion therapy for various medical conditions, such as anemia, bleeding disorders, and blood loss.
         - Blood Storage and Preservation: Blood bags are designed to safely store and preserve blood and its components under controlled conditions, such as refrigeration or freezing, to maintain their viability, quality, and safety for transfusion purposes. Proper storage and temperature monitoring are essential to prevent spoilage, bacterial contamination, or deterioration of blood products during storage and transportation.
         - Blood Transfusion: Blood bags serve as containers for delivering blood and blood products to patients in need of transfusion therapy due to medical conditions, surgeries, or trauma-induced blood loss. Healthcare providers carefully select compatible blood products from the blood bank inventory, verify patient identification and transfusion orders, and administer the transfusion using specialized transfusion equipment and techniques to ensure patient safety and optimal clinical outcomes.
      
      Quantity needed: 70
      `,
    },
    {
      name: "Blood Donation Kit",
      quantity: 50,
      description: "Kit containing supplies for blood donation.",
      image: "../assets/img/items/Blood Donation Kit.png",
      category: "Blood Donations",
      text: `
       Device Type:
         - A blood donation kit is a collection of medical supplies and equipment used to facilitate the process of blood donation from voluntary donors. It typically consists of sterile single-use items, protective gear, and accessories required for safely and hygienically collecting blood samples from donors.
      
       Use:
         - Blood Collection Supplies: The kit includes sterile needles, blood collection tubes or bags, and other disposable items used to collect blood samples from donors. These supplies are designed to meet stringent quality and safety standards to minimize the risk of contamination, infection, or injury during the blood collection process.
         - Phlebotomy Equipment: The kit may contain phlebotomy equipment such as tourniquets, alcohol swabs, adhesive bandages, and gauze pads used to prepare the donor's skin, locate suitable veins for venipuncture, and apply pressure to the puncture site after blood collection to prevent bleeding and promote clotting.
         - Donor Identification and Documentation: Blood donation kits often include forms, labels, and markers for documenting donor information, consent, and medical history. Donors may be required to provide personal details, answer health-related questions, and sign consent forms before blood collection to ensure compliance with regulatory requirements and safeguard donor and recipient safety.
         - Protective Gear and Safety Equipment: To ensure the safety of both donors and healthcare providers, blood donation kits may include personal protective equipment (PPE) such as gloves, face masks, and disposable aprons or gowns. These items help prevent exposure to bloodborne pathogens, infectious diseases, and bodily fluids during the blood donation process.
         - Instructions and Educational Materials: Blood donation kits may contain informational pamphlets, brochures, or instructional guides for donors, providing guidance on the blood donation process, eligibility criteria, potential risks and benefits, and post-donation care instructions. Educational materials aim to promote donor awareness, engagement, and satisfaction while encouraging regular blood donations to support community health and medical treatment needs.
      
        Quantity needed: 70
      `,
    },
    // School Donations
    {
      name: "Books",
      quantity: 30,
      description: "Educational books for students.",
      image: "../assets/img/items/Books.png",
      category: "School Supplies",
      itemType: "books",
      text: "d",
    },
    {
      name: "Stationery Set",
      quantity: 12,
      description: "Includes pens, pencils and other essentials for school.",
      image: "../assets/img/items/Stationery Set.png",
      category: "School Supplies",
      itemType: "stationary",
      text: "d",
    },
    {
      name: "Backpack",
      quantity: 40,
      description: "A bag used to carry books and school supplies.",
      image: "../assets/img/items/Backpack.png",
      category: "School Supplies",
      itemType: "stationary",
      text: "d",
    },
    // Food Donations
    {
      name: "Canned Food",
      quantity: 200,
      description: "Non-perishable food items in cans.",
      image: "../assets/img/items/Canned Food.png",
      category: "Food",
      foodType: "canned",
      text: "d",
    },
    {
      name: "Rice",
      quantity: 100,
      description: "Staple food grain,a fundamental source of sustenance.",
      image: "../assets/img/items/Rice.png",
      category: "Food",
      foodType: "fresh",
      text: "d",
    },
    {
      name: "Fresh Fruits",
      quantity: 50,
      description: "Assorted fresh fruits,a nutritious food for consumption.",
      image: "../assets/img/items/Fresh Fruits.png",
      category: "Food",
      foodType: "fruits",
      text: "d",
    },
    // Clothing Donations
    {
      name: "Jackets",
      quantity: 30,
      description: "Warm jackets for cold weather.",
      image: "../assets/img/items/jacket.png",
      category: "Clothes",
      minAge: 5,
      maxAge: 70,
      gender: "all",
      season: "winter",
      text: "d",
    },
    {
      name: "Shoes",
      quantity: 50,
      description: "Assorted shoes for all ages.",
      image: "../assets/img/items/shoes.png",
      category: "Clothes",
      minAge: 0,
      maxAge: 80,
      gender: "male",
      season: "winter",
      text: "d",
    },
    {
      name: "T-shirts",
      quantity: 100,
      description: "Casual t-shirts in various colors.",
      image: "../assets/img/items/tshirt.png",
      category: "Clothes",
      minAge: 10,
      maxAge: 50,
      gender: "female",
      season: "summer",
      text: "d",
    },
    {
      name: "Stuffed Animals",
      quantity: 80,
      description: "Soft and cuddly stuffed animals for children.",
      image: "../assets/img/items/animals.png",
      category: "Toys",
      gender: "all",
      ageMin: 0,
      ageMax: 12,
      ToysCategory: "dolls",
      text: "d",
    },
    {
      name: "Building Blocks",
      quantity: 60,
      description: "Educational building blocks for kids.",
      image: "../assets/img/items/buildingblocks.png",
      category: "Toys",
      gender: "male",
      ageMin: 2,
      ageMax: 8,
      ToysCategory: "dolls",
      text: "d",
    },

    {
      name: "Board Games",
      quantity: 50,
      description: "Fun and interactive board games for the whole family.",
      image: "../assets/img/items/board.png",
      category: "Toys",
      gender: "all",
      ageMin: 5,
      ageMax: 99,
      ToysCategory: "dolls",
      text: "d",
    },
    {
      name: "Sports Equipment",
      quantity: 30,
      description: "Various sports equipment for outdoor activities.",
      image: "../assets/img/items/sports.png",
      category: "Toys",
      gender: "female",
      ageMin: 5,
      ageMax: 15,
      ToysCategory: "dolls",
      text: "d",
    },
    {
      name: "Toy Cars",
      quantity: 70,
      description: "Assorted toy cars for children to play with.",
      image: "../assets/img/items/toycar.png",
      category: "Toys",
      gender: "male",
      ageMin: 2,
      ageMax: 12,
      ToysCategory: "stuffed toys",
      text: "d",
    },
    {
      name: "Jeans",
      quantity: 20,
      description: "Casual blue jeans to wear.",
      image: "../assets/img/items/jeans.png",
      category: "Clothes",
      gender: "male",
      ageMin: 2,
      ageMax: 60,
      season: "summer",
    },
    {
      name: "Outdoor Playset",
      quantity: 20,
      description: "Complete outdoor playset for children's fun",
      image: "../assets/img/items/outdoorplayset.png",
      category: "Toys",
      gender: "all",
      ageMin: 3,
      ageMax: 10,
      ToysCategory: "stuffed toys",
      text: "dddd",
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
              <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${item.name
          }</h2><br>
              <p style="color:color:#0c0f1d;font-size:26px ">Description: ${item.description
          }</p>
              <a href="./PopUp.html?itemText=${encodeURIComponent(
            item.text
          )}&itemName=${encodeURIComponent(
            item.name
          )}&itemImage=${encodeURIComponent(
            item.image
          )}" style="text-decoration: none;">
      <button class="details-button" id="details-button" style="background-color: #222024;">More Details</button>
    </a>
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
      <h2 style="color:#0c0f1d;font-size:36px;text-align:center">${item.name
        }</h2><br>
      <p style="color:color:#0c0f1d;font-size:26px ">Description: ${item.description
        }</p>
      <a href="./PopUp.html?itemText=${encodeURIComponent(
          item.text
        )}&itemName=${encodeURIComponent(
          item.name
        )}&itemImage=${encodeURIComponent(
          item.image
        )}" style="text-decoration: none;">
    <button class="details-button" id="details-button" style="background-color: #222024;">More Details</button>
  </a>
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
    var popup = document.querySelector(".popup-container");
    var popupWidth = popup.offsetWidth;
    var popupHeight = popup.offsetHeight;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var topPos = (screenHeight - popupHeight) / 2;
    var leftPos = (screenWidth - popupWidth) / 2;

    popup.style.top = topPos + "px";
    popup.style.left = leftPos + "px";
  }

  // Call the centerPopup function when the window is resized or scrolled
  window.addEventListener("resize", centerPopup);
  window.addEventListener("scroll", centerPopup);

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

  // detailsButton.forEach((button) => {
  //   button.addEventListener("click", function () {
  //     // Provide feedback to the user
  //     popupContainer.style.display = "block";
  //   });
  // });
  // closeButton.addEventListener("click", function () {
  //   popupContainer.style.display = "none";
  // });

  // document.body.addEventListener("click",function(event) {
  //   if(event.target.id == "detailsButton"){
  //     alert('You clicked the button!');
  //   }
  //   else if(event.target.id == "resultDetailsButton"){
  //     alert('You clicked the results button');
  //   }
  // });
});
