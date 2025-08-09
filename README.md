# 🧑‍💻 Flask-Portfolio-Website-Sample

This is a sample portfolio website built using Flask. It demonstrates a basic Flask app structure with a contact form that accepts user input and prints it to the console. It features a fully responsive design that adapts seamlessly across mobile, tablet, and desktop devices.

## 📁 Project Structure

FLASK-PORTFOLIO-WEBSITE-SAMPLE/                                                                                    
│                                                                                                                            
├── static/ # Static assets like images, CSS, and JavaScript files                                                                                             
│ ├── profile.jpg                                                                                                                                                
│ ├── proj1.svg                                                                                                                                                 
│ ├── proj2.svg    
│ ├── proj3.svg                                                                                                                                                           
│ ├── resume_amir.pdf                                                                                                                                                    
│ ├── script.js                                                                                                                                                       
│ └── style.css                                                                                                                                                          
│                                                                                                                                                                        
├── templates/ # HTML templates                                                                                                                                           
│ └── index.html                                                                                                                                                          
│                                                                                                                                                                         
├── app.py # Main Flask application                                                                                                                                          
├── requirments.txt # Project requirements                                                                                                                                    
└── README.md # This file                                                                                                                                                    

## ✅ Features

- Simple Flask app with home route / that supports GET and POST requests.
- Contact form that collects name, email, and message.
- On form submission (POST), prints the message in the console and redirects back to home.
- Basic HTML templating with render_template.
- Static files handling for CSS, JavaScript, images, and documents.

## 🔧 Requirements

- Python 3.x
- Flask (installed via pip)
- HTML 5
- CSS
- JavaScript

## 📦 Installation
Step 1: Clone or Download

Step 2: Install Flask

```bash
pip install -r requirements.txt
```

## 🚀 How to Run the App
Start the Flask server using:

```bash
python app.py
```

Open your browser and go to
```csharp
Running on http://127.0.0.1:5000
```
to see the portfolio website.

## 🧪 How to Use
- Navigate to the home page.
- Fill out the contact form with your name, email, and message.
- Submit the form.
- The message will be printed in the terminal/console.
- You will be redirected back to the home page.

## 🛠 Technologies Used
* Python
* Flask
* HTML
* CSS
* JavaScript

## 🤝 Contributing
Feel free to fork the repo and submit pull requests. For major changes, please open an issue first to discuss what you want to change.

## 📜 License
This project is open source and free to use.
