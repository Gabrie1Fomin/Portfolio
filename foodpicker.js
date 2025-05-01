// Food Database (I used AI to help generate more foods, as well as formatting them to be usable)
const foodDatabase = [
  // MEXICAN
  { name: "Veggie Burrito", cuisine: "Mexican", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Fresh", time: "Medium", vegetarian: true },
  { name: "Beef Tacos", cuisine: "Mexican", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: false },
  { name: "Huevos Rancheros", cuisine: "Mexican", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
  { name: "Chilled Mango Salad", cuisine: "Mexican", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
  { name: "Grilled Chicken Quesadilla", cuisine: "Mexican", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: false },
  { name: "Cold Black Bean Wrap", cuisine: "Mexican", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },

  // AMERICAN
  { name: "Pulled Pork Sandwich", cuisine: "American", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: false },
  { name: "Grilled Cheese", cuisine: "American", mealType: "Lunch", temperature: "Hot", prep: "Grilled", time: "Quick", vegetarian: true },
  { name: "Bagel & Cream Cheese", cuisine: "American", mealType: "Breakfast", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
  { name: "Avocado Toast", cuisine: "American", mealType: "Breakfast", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
  { name: "Quinoa Salad", cuisine: "American", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
  { name: "French Toast", cuisine: "American", mealType: "Breakfast", temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
  { name: "BBQ Ribs", cuisine: "American", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Grilled", time: "Long", vegetarian: false },
  { name: "Chili Con Carne", cuisine: "American", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
  { name: "Fried Veggie Nuggets", cuisine: "American", mealType: "Snack", temperature: "Hot", prep: "Fried", time: "Quick", vegetarian: true },
  { name: "Cold Chicken Pasta Salad", cuisine: "American", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Medium", vegetarian: false },

  // MIDDLE EASTERN
  { name: "Falafel Wrap", cuisine: "Middle Eastern", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
  { name: "Chicken Tikka", cuisine: "Middle Eastern", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Grilled", time: "Long", vegetarian: false },
  { name: "Lentil Soup", cuisine: "Middle Eastern", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Shakshuka", cuisine: "Middle Eastern", mealType: "Breakfast", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Mujadara", cuisine: "Middle Eastern", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Cold Tabbouleh Salad", cuisine: "Middle Eastern", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },

  // ASIAN
  { name: "Sushi", cuisine: "Asian", mealType: "Dinner", temperature: "Cold", prep: "Fresh", time: "Long", vegetarian: false },
  { name: "Tofu Stir Fry", cuisine: "Asian", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
  { name: "Ramen", cuisine: "Asian", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
  { name: "Vegetable Spring Rolls", cuisine: "Asian", mealType: "Snack", temperature: "Hot", prep: "Fried", time: "Quick", vegetarian: true },
  { name: "Shrimp Pad Thai", cuisine: "Asian", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Stir-fried", time: "Medium", vegetarian: false },
  { name: "Cold Sesame Noodle Salad", cuisine: "Asian", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },

  // INDIAN
  { name: "Paneer Tikka", cuisine: "Indian", mealType: "Dinner", temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: true },
  { name: "Chana Masala", cuisine: "Indian", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Biryani", cuisine: "Indian", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
  { name: "Poha", cuisine: "Indian", mealType: "Breakfast", temperature: "Hot", prep: "Boiled", time: "Quick", vegetarian: true },
  { name: "Cold Cucumber Raita Bowl", cuisine: "Indian", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },

  // ITALIAN
  { name: "Caprese Salad", cuisine: "Italian", mealType: "Snack", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
  { name: "Eggplant Parmesan", cuisine: "Italian", mealType: "Dinner", temperature: "Hot", prep: "Fried", time: "Long", vegetarian: true },
  { name: "Margherita Pizza", cuisine: "Italian", mealType: "Dinner", temperature: "Hot", prep: "Baked", time: "Medium", vegetarian: true },
  { name: "Stuffed Peppers", cuisine: "Italian", mealType: "Dinner", temperature: "Hot", prep: "Baked", time: "Medium", vegetarian: true },
  { name: "Gnocchi with Pesto", cuisine: "Italian", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Cold Orzo Salad", cuisine: "Italian", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },

  // FRENCH
  { name: "Cheese Omelette", cuisine: "French", mealType: "Breakfast", temperature: "Hot", prep: "Fried", time: "Quick", vegetarian: true },
  { name: "Croissant", cuisine: "French", mealType: "Breakfast", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
  { name: "Ratatouille", cuisine: "French", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Quiche Lorraine", cuisine: "French", mealType: "Lunch", temperature: "Hot", prep: "Baked", time: "Medium", vegetarian: false },
  { name: "Niçoise Salad", cuisine: "French", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: false },

  // CHINESE
  { name: "Kung Pao Chicken", cuisine: "Chinese", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Stir-fried", time: "Medium", vegetarian: false },
  { name: "Vegetable Dumplings", cuisine: "Chinese", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Mapo Tofu", cuisine: "Chinese", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Chow Mein", cuisine: "Chinese", mealType: ["Lunch", "Dinner"], temperature: "Hot", prep: "Stir-fried", time: "Medium", vegetarian: false },
  { name: "Cold Soba Salad", cuisine: "Chinese", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },

  // VIETNAMESE
  { name: "Pho", cuisine: "Vietnamese", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
  { name: "Banh Mi", cuisine: "Vietnamese", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Medium", vegetarian: false },
  { name: "Spring Rolls", cuisine: "Vietnamese", mealType: "Snack", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
  { name: "Vermicelli Bowl", cuisine: "Vietnamese", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Medium", vegetarian: true },

  // GERMAN
  { name: "Bratwurst", cuisine: "German", mealType: "Dinner", temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: false },
  { name: "Potato Pancakes", cuisine: "German", mealType: "Lunch", temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
  { name: "Sauerbraten", cuisine: "German", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
  { name: "Spaetzle", cuisine: "German", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
  { name: "Cold Sausage Salad", cuisine: "German", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: false }
];

  
  // Questions for the quiz
  const questions = [
    {
      id: 1,
      text: "Do you want to eat a vegetarian dish?",
      type: "boolean",
      options: [
        { text: "Yes", value: true },
        { text: "No", value: false }
      ]
    },
    {
      id: 2,
      text: "What type of cuisine are you in the mood for?",
      type: "single",
      options: [
        { text: "American", value: "American" },
        { text: "Mexican", value: "Mexican" },
        { text: "Asian", value: "Asian" },
        { text: "Italian", value: "Italian" },
        { text: "Middle Eastern", value: "Middle Eastern" },
        { text: "Indian", value: "Indian" },
        { text: "French", value: "French" },
        { text: "Chinese", value: "Chinese" },
        { text: "Vietnamese", value: "Vietnamese" },
        { text: "German", value: "German" }
      ]
    },
    {
      id: 3,
      text: "What type of meal are you looking for?",
      type: "single",
      options: [
        { text: "Breakfast", value: "Breakfast" },
        { text: "Lunch", value: "Lunch" },
        { text: "Dinner", value: "Dinner" },
        { text: "Snack", value: "Snack" }
      ]
    },
    {
      id: 4,
      text: "Do you prefer hot or cold food?",
      type: "single",
      options: [
        { text: "Hot", value: "Hot" },
        { text: "Cold", value: "Cold" }
      ]
    },
    {
      id: 5,
      text: "What kind of preparation method do you prefer?",
      type: "single",
      options: [
        { text: "Fresh", value: "Fresh" },
        { text: "Grilled", value: "Grilled" },
        { text: "Fried", value: "Fried" },
        { text: "Baked", value: "Baked" },
        { text: "Boiled", value: "Boiled" },
        { text: "Stir-fried", value: "Stir-fried" }
      ]
    }
  ];
  
  function renderQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("quizContainer");
    questionContainer.innerHTML = '';
  
    const questionText = document.createElement("p");
    questionText.textContent = question.text;
    questionContainer.appendChild(questionText);
  
    let selectedAnswer = null;
  
    // Option buttons container
    const optionsWrapper = document.createElement("div");
    optionsWrapper.id = "optionsWrapper";
    questionContainer.appendChild(optionsWrapper);
  
    question.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option.text;
      optionButton.classList.add("option-button");
      
      optionButton.onclick = () => {
        // Remove 'selected' class from all buttons
        const allButtons = document.querySelectorAll(".option-button");
        allButtons.forEach(btn => btn.classList.remove("selected"));
  
        // Add 'selected' class to the clicked button
        optionButton.classList.add("selected");
  
        selectedAnswer = option.value;
        nextButton.disabled = false; // Enable the "Next" button
      };
  
      optionsWrapper.appendChild(optionButton);
    });
  
    // Create the "Next" button
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = true;
    nextButton.style.marginTop = "1rem";
  
    // Define nextButton's onclick function here
    nextButton.onclick = () => {
      if (selectedAnswer !== null) {
        answers.push(selectedAnswer); // Save the selected answer
        currentQuestionIndex++; // Move to the next question
  
        if (currentQuestionIndex < questions.length) {
          renderQuestion(); // Render the next question
        } else {
          showResult(); // Show results if it's the last question
        }
      }
    };
  
    questionContainer.appendChild(nextButton);
  }
  

function showResult() {
  const resultContainer = document.getElementById("result"); // Get result display element

  // Filter the food database based on the user's answers
  const matchingFoods = foodDatabase.filter(food => {
    return (
      food.vegetarian === answers[0] &&
      food.cuisine === answers[1] &&
      food.temperature === answers[3] &&
      food.prep === answers[4] &&
      (Array.isArray(food.mealType) ? food.mealType.includes(answers[2]) : food.mealType === answers[2])
    );
  });

  // Show matching food results or a fallback message
  if (matchingFoods.length > 0) {
    resultContainer.textContent = "Recommended Food: " + matchingFoods.map(food => food.name).join(", ");
  } else {
    resultContainer.textContent = "Sorry, we couldn't find a match.";
  }

  // Show the retry button so the user can try again
  document.getElementById("retryButton").style.display = "block";
}

function startQuiz() {
  currentQuestionIndex = 0;              // Reset question index
  answers = [];                          // Clear previous answers
  renderQuestion();                      // Start with the first question again
  document.getElementById("retryButton").style.display = "none";  // Hide retry button
  document.getElementById("result").textContent = "";             // Clear previous result
}

// Start the quiz when the page loads
startQuiz();
