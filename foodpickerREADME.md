    # 🍽️ Food Picker Quiz Tool

This is a JavaScript-based interactive quiz that helps users decide what to eat based on their preferences. Users answer a series of questions, and the script filters through a database of foods to return a recommendation.

## 🛠️ Features

- Multiple-choice question flow using radio buttons  
- Dynamic filtering based on user responses  
- Random food suggestion from matching results  
- LocalStorage to persist answers across refreshes  
- Retry button to re-roll a food from the final filtered list  

---

## ⚠️ Challenges I Faced

### 1. **Too Many Filters = No Matching Foods**
**Issue:**  
As I added more detailed questions (like texture, temperature, prep method, and cook time), I found that combining all the filters often led to **zero results**.

**What I Did:**  
I addressed this by:
- Broadening some questions to reduce overly specific filtering.
- Adding fallback logic to return a default message if no foods match.
- Ensuring each cuisine had a balanced variety of food types.

---

### 2. **Small Database = Limited Matches**
**Issue:**  
The original food database didn’t have enough variety to support all possible quiz outcomes.

**What I Did:**  
I expanded the database significantly, adding more foods across all types of cuisines and ensuring each option had sweet, savory, hot, cold, vegetarian, and non-vegetarian selections where appropriate.

---

### 3. **Filtering Logic Got Messy**
**Issue:**  
The filtering logic became hard to manage as the conditions grew more complex.

**What I Did:**  
I reorganized the logic to be clearer and more modular. I grouped related filtering rules and added inline comments to explain each step. This made the code easier to maintain and expand.

---

### 4. **No Option to Reroll Food**
**Issue:**  
After finishing the quiz, users had no way to get a new suggestion without retaking the whole quiz.

**What I Did:**  
I added a **"Try Again"** button that selects a different food from the filtered list without restarting the quiz.

---

### 5. **Readability and Comments**
**Issue:**  
With all the added logic, the JavaScript was getting hard to read.

**What I Did:**  
I added clear inline comments throughout the script to explain each section and each line of logic, making the project easier to follow.

---

## 🚀 How to Use

1. Open `index.html` in your browser.  
2. Answer each quiz question.  
3. Get a food suggestion based on your answers.  
4. Click **Try Again** to reroll a result using the same preferences.

---

## 🧠 Next Steps

If I had more time, I’d love to:

- Add dietary preference support (e.g., gluten-free, dairy-free, keto)  
- Include images or recipe links with results  
- Let users save or favorite foods  
- Animate transitions between questions
