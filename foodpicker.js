// Food Database (I used AI to help generate more foods, as well as formatting them to be usable)
const foodDatabase = [
        // Mexican
        { name: "Veggie Burrito", cuisine: "Mexican", mealType: "Lunch", temperature: "Hot", prep: "Fresh", time: "Medium", vegetarian: true },
        { name: "Beef Tacos", cuisine: "Mexican", mealType: "Dinner", temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: false },
        { name: "Huevos Rancheros", cuisine: "Mexican", mealType: "Breakfast", temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
      
        // American
        { name: "Pulled Pork Sandwich", cuisine: "American", mealType: "Lunch", temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: false },
        { name: "Grilled Cheese", cuisine: "American", mealType: "Lunch", temperature: "Hot", prep: "Grilled", time: "Quick", vegetarian: true },
        { name: "Bagel & Cream Cheese", cuisine: "American", mealType: "Breakfast", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
        { name: "Avocado Toast", cuisine: "American", mealType: "Breakfast", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
        { name: "Quinoa Salad", cuisine: "American", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
        { name: "French Toast", cuisine: "American", mealType: "Breakfast", temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
        { name: "BBQ Ribs", cuisine: "American", mealType: "Dinner", temperature: "Hot", prep: "Grilled", time: "Long", vegetarian: false },
        { name: "Chili Con Carne", cuisine: "American", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
      
        // Middle Eastern
        { name: "Falafel Wrap", cuisine: "Middle Eastern", mealType: "Lunch", temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
        { name: "Chicken Tikka", cuisine: "Middle Eastern", mealType: "Dinner", temperature: "Hot", prep: "Grilled", time: "Long", vegetarian: false },
        { name: "Lentil Soup", cuisine: "Middle Eastern", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
        { name: "Shakshuka", cuisine: "Middle Eastern", mealType: "Breakfast", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
        { name: "Mujadara", cuisine: "Middle Eastern", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
      
        // Asian
        { name: "Sushi", cuisine: "Asian", mealType: "Dinner", temperature: "Cold", prep: "Fresh", time: "Long", vegetarian: false },
        { name: "Tofu Stir Fry", cuisine: "Asian", mealType: "Dinner", temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
        { name: "Ramen", cuisine: "Asian", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
        { name: "Vegetable Spring Rolls", cuisine: "Asian", mealType: "Snack", temperature: "Hot", prep: "Fried", time: "Quick", vegetarian: true },
        { name: "Shrimp Pad Thai", cuisine: "Asian", mealType: "Dinner", temperature: "Hot", prep: "Stir-fried", time: "Medium", vegetarian: false },
        { name: "Miso Soup", cuisine: "Asian", mealType: "Snack", temperature: "Hot", prep: "Boiled", time: "Quick", vegetarian: true },
        { name: "Tempura", cuisine: "Asian", mealType: "Snack", temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: false },
      
        // Indian
        { name: "Paneer Tikka", cuisine: "Indian", mealType: "Dinner", temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: true },
        { name: "Chana Masala", cuisine: "Indian", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
        { name: "Biryani", cuisine: "Indian", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
        { name: "Poha", cuisine: "Indian", mealType: "Breakfast", temperature: "Hot", prep: "Boiled", time: "Quick", vegetarian: true },
      
        // Italian
        { name: "Caprese Salad", cuisine: "Italian", mealType: "Snack", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
        { name: "Eggplant Parmesan", cuisine: "Italian", mealType: "Dinner", temperature: "Hot", prep: "Fried", time: "Long", vegetarian: true },
        { name: "Margherita Pizza", cuisine: "Italian", mealType: "Dinner", temperature: "Hot", prep: "Baked", time: "Medium", vegetarian: true },
        { name: "Stuffed Peppers", cuisine: "Italian", mealType: "Dinner", temperature: "Hot", prep: "Baked", time: "Medium", vegetarian: true },
        { name: "Gnocchi with Pesto", cuisine: "Italian", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
      
        // French
        { name: "Cheese Omelette", cuisine: "French", mealType: "Breakfast", temperature: "Hot", prep: "Fried", time: "Quick", vegetarian: true },
        { name: "Croissant", cuisine: "French", mealType: "Breakfast", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
        { name: "Ratatouille", cuisine: "French", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
        { name: "Quiche Lorraine", cuisine: "French", mealType: "Lunch", temperature: "Hot", prep: "Baked", time: "Medium", vegetarian: false },
      
        // Chinese
        { name: "Kung Pao Chicken", cuisine: "Chinese", mealType: "Dinner", temperature: "Hot", prep: "Stir-fried", time: "Medium", vegetarian: false },
        { name: "Vegetable Dumplings", cuisine: "Chinese", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
        { name: "Mapo Tofu", cuisine: "Chinese", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Medium", vegetarian: true },
        { name: "Chow Mein", cuisine: "Chinese", mealType: "Lunch", temperature: "Hot", prep: "Stir-fried", time: "Medium", vegetarian: false },
      
        // Vietnamese
        { name: "Pho", cuisine: "Vietnamese", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
        { name: "Banh Mi", cuisine: "Vietnamese", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Medium", vegetarian: false },
        { name: "Spring Rolls", cuisine: "Vietnamese", mealType: "Snack", temperature: "Cold", prep: "Fresh", time: "Quick", vegetarian: true },
        { name: "Vermicelli Bowl", cuisine: "Vietnamese", mealType: "Lunch", temperature: "Cold", prep: "Fresh", time: "Medium", vegetarian: true },
      
        // German
        { name: "Bratwurst", cuisine: "German", mealType: "Dinner", temperature: "Hot", prep: "Grilled", time: "Medium", vegetarian: false },
        { name: "Potato Pancakes", cuisine: "German", mealType: "Lunch", temperature: "Hot", prep: "Fried", time: "Medium", vegetarian: true },
        { name: "Sauerbraten", cuisine: "German", mealType: "Dinner", temperature: "Hot", prep: "Boiled", time: "Long", vegetarian: false },
        { name: "Spaetzle", cuisine: "German", mealType: "Lunch", temperature: "Hot", prep: "Boiled", time: "Medium"}
      
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
  
  let currentQuestionIndex = 0; // Tracks which question the user is currently on
let answers = []; // Stores the user's answers

function renderQuestion() {
  const question = questions[currentQuestionIndex]; // Get the current question
  const questionContainer = document.getElementById("quizContainer"); // Get the quiz container element

  // Clear any existing content in the container
  questionContainer.innerHTML = '';

  // Create and display the question text
  const questionText = document.createElement("p");
  questionText.textContent = question.text;
  questionContainer.appendChild(questionText);

  // Create buttons for each option in the question
  question.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option.text; // Set button text
    optionButton.onclick = () => handleAnswer(option.value); // Handle answer selection
    questionContainer.appendChild(optionButton); // Add button to the container
  });
}

function handleAnswer(answer) {
  answers.push(answer); // Save the user's answer

  // Move to the next question
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    renderQuestion(); // Render next question
  } else {
    showResult(); // Show results if quiz is done
  }
}

function showResult() {
  const resultContainer = document.getElementById("result"); // Get result display element

  // Filter the food database based on the user's answers
  const matchingFoods = foodDatabase.filter(food => {
    return (
      food.vegetarian === answers[0] &&
      food.cuisine === answers[1] &&
      food.mealType === answers[2] &&
      food.temperature === answers[3] &&
      food.prep === answers[4]
    );
  });

  // Show matching food results or a fallback message
  if (matchingFoods.length > 0) {
    resultContainer.textContent = "We recommend: " + matchingFoods.map(food => food.name).join(", ");
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
