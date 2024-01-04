##Web NLP Tool
##Overview The Web NLP Tool is a web application that leverages the meaningCloud NLP API to perform Natural Language Processing on articles or blogs found on other websites. This tool allows users to gain insights into the content, extract key information, and perform various NLP tasks.

##Features
Article Analysis: Enter the URL of an article or blog post, and the tool will analyze its content using meaningCloud's NLP capabilities.
Sentiment Analysis: Understand the sentiment expressed in the provided text.
##Getting Started
#Prerequisites:
Before using the Web NLP Tool, ensure you have the following:
1.Node.js installed
2.npm (Node Package Manager) installed
##Installation
1.Clone this repository to your local machine: git clone https://github.com/ZcodiN1710/NLP-project.git
2.Navigate to the project directory: cd NLP project
3.Install the project dependencies: npm install
4.Configuration Obtain an API key from meaningCloud by signing up at Developer Portal.
5.Copy the API key and create a new file named .env in the project root.
6.Add the following line to the .env file, replacing YOUR_API_KEY with your actual meaningCloud API key: env meaningCloud_API_KEY=YOUR_API_KEY
##Usage
1.Start the web application: npm start
2.Open your browser and go to http://localhost:3000.
3.Enter the URL of the article or blog post you want to analyze.
4.Click the "submit" button to initiate the analysis.
5.View the results displayed on the page. ##License feel free to use this project ##Acknowledgments This project makes use of the meaningCloud NLP API. Visit meaningCloud for more information.
