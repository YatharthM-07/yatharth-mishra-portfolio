# 🔐 Phishing Detection Tool

👤 **Solo Project**  
📌 Category: Applied Machine Learning | Web Application  
🎯 Domain: Cybersecurity

---

## 📖 Problem Statement
Phishing attacks are a major cybersecurity threat where users are tricked into revealing sensitive information through malicious messages or links.  
Relying only on manual detection or static rules is ineffective, creating the need for **automated and intelligent detection systems**.

---

## 🎯 Project Objective
To build a **hybrid phishing detection system** that combines:
- **Machine Learning–based text classification**
- **Google Safe Browsing (Checker) API**
- A **Flask-based web interface**

The goal was to improve detection reliability by using **both predictive models and trusted external threat intelligence**.

---

## 🧩 Key Features

### 🧠 ML-Based Text Detection
- Classifies input text as phishing or legitimate
- Uses trained supervised classification models
- Handles unseen inputs through preprocessing and feature extraction

---

### 🌐 Google Safe Browsing API Integration
- Checks URLs against Google’s known phishing and malicious databases
- Adds an additional verification layer beyond ML predictions
- Helps reduce false negatives in real-world scenarios

---

### 🌐 Flask Web Interface
- Simple web UI for user input
- Flask routes for handling predictions
- Displays real-time detection results

---

### 🔄 End-to-End Workflow
1. User inputs text or URL
2. Text is preprocessed and passed to ML model
3. URLs are checked using Google Safe Browsing API
4. Combined result is returned to the user via web interface

---

## 🛠️ Technical Approach

1. Data preparation and text cleaning
2. NLP preprocessing:
   - Lowercasing
   - Tokenization
   - Stopword removal
   - Special character handling
3. Feature extraction using:
   - TF-IDF / Count Vectorization
4. Training supervised ML classification models
5. Integrating trained model with Flask backend
6. Calling Google Safe Browsing API for URL validation
7. Returning consolidated results to the frontend

---

## 🧰 Technologies, Libraries & Tools

### **Programming Language**
- Python

---

### **Web Framework**
- Flask

---

### **Machine Learning & NLP**
- Scikit-learn
- Pandas
- NumPy

---

### **External API**
- Google Safe Browsing (Checker) API

---

### **Frontend (Flask Templates)**
- HTML
- Basic CSS

---

### **Development Tools**
- Git & GitHub
- VS Code
- Python virtual environment

---

## 🧠 Key Learnings
- Designing hybrid security systems (ML + API-based detection)
- Integrating external APIs with ML workflows
- Flask-based backend development for ML inference
- Handling real-world cybersecurity use cases
- Understanding trade-offs between ML predictions and rule-based checks

---

## 📌 Project Nature
This project demonstrates a **practical cybersecurity application**, combining:
- Applied machine learning
- Backend web development
- External threat intelligence

It focuses on **real-world usability**, not theoretical ML experimentation.

---

## 🔗 Related Repository
👉 Main code repository:  
https://github.com/YatharthM-07/phishing_detection_tool
