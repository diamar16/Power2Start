import requests
from  flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/signup")
def resources():
    return render_template("signup.html")


if __name__ == "__main__":
    app.run()
