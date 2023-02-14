from flask import Flask, render_template, request

import csv

app = Flask(__name__)

@app.route('/')

def registration_form():

    return render_template('registration_form.html')

@app.route('/submit', methods=['POST'])

def submit_form():

    # Get form data

    name = request.form['name']

    section = request.form['section']

    # Save data to CSV file

    with open('registrations.csv', 'a', newline='') as csvfile:

        writer = csv.writer(csvfile)

        writer.writerow([name, section])

    return 'Registration complete!'

if __name__ == '__main__':

    app.run(debug=True)

