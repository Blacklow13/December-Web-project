from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def show_countries():
    return render_template("index.html")

@app.route('/countries/<code>')
def show_countries_details(code):
    return render_template("country-page.html", code=code)

if __name__ == '__main__':
    app.run(debug=True)