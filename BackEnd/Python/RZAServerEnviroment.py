from flask import Flask, jsonify, request
from flask_cors import CORS
import cryptography
from bcrypt import checkpw, gensalt, hashpw
import RZAFunctions as LF
import sqlite3
from sqlite3 import Error
import re
import datetime

# app = Flask function - name as variable fed into function
app = Flask(__name__)
# Cross Origin Resourse Sharing - manually define who can send information to server
# CORS function from flask_cors : (see line 10), resource = {regex"anywhere/thing" : {(data can be sent from anywhere)}}
CORS(app, resources={r"/*": {"origins": "*"}})


# login
# The `@app.route("/login", methods=["POST"])` decorator in the Flask application is defining a route
# for handling POST requests to the "/login" endpoint. When a POST request is made to this endpoint,
# the `LoginDetails()` function is executed to process the request and handle the login functionality.
# This function retrieves the username and password from the request, validates them, checks if the
# user exists in the database, and verifies the password. Finally, it returns a JSON response
# indicating the success or failure of the login attempt.
@app.route("/login", methods=["POST"])
def LoginDetails():
    logins = {}
    print("Request Recieved")
    with sqlite3.connect(r"Database/RZA-Data.db") as conn:
        print("Connection Established")
        username = request.json.get("username")
        if LF.UsernameCheck(username):
            return jsonify(
                {
                    "success": False,
                    "message": "Username must be 5 - 16 characters longs and alphanumeric",
                }
            )
        password = request.json.get("password")
        print(password)
        if LF.PasswordCheck(password):
            password = password.encode("utf-8")
        else:
            return jsonify(
                {
                    "success": False,
                    "message": "Password must be between 5 and 16 characters and have atleast 1 uppercase character, 1 lowercase character and 1 number",
                }
            )
        try:
            cu = conn.cursor()
            print("Cursor Created")
            query = """Select * From Users Where Users.Username = ?"""
            cu.execute(query, (username,))
            results = cu.fetchall()
            print(results)
            for i in results:
                print(i)
                logins[i[2]] = i[3]
                role = i[1]
                print(role)
                print(logins)
                print(logins[username])
            if checkpw(password, logins[username]):
                return jsonify(
                    {"success": True, "message": "Login Successful", "role": role}
                )
            else:
                return jsonify({"success": False, "message": "Incorrect Login Details"})
        except Exception as e:
            print(e)
            return jsonify({"success": False, "message": "Incorrect Login Details"})


# sign up - customer
# The `@app.route("/signup", methods=["POST"])` decorator in the Flask application is defining a route
# for handling POST requests to create a new customer account. When a POST request is made to the
# "/signup" endpoint, the `SignupDetails()` function is executed to process the request and handle the
# creation of a new customer account in the database.
@app.route("/signup", methods=["POST"])
def SignupDetails():
    print("Request Recieved")
    with sqlite3.connect(r"Database/RZA-Data.db") as conn:
        print("Connection Established")
        username = request.json.get("username")
        print("username:", username)
        if LF.UsernameCheck(username):
            return jsonify(
                {
                    "success": False,
                    "message": "Username must be 5 - 16 characters longs and alphanumeric",
                }
            )
        email = request.json.get("email")
        print("email:", email)
        if LF.EmailCheck(email):
            return jsonify(
                {
                    "success": False,
                    "message": "Email is not valid",
                }
            )
        count = """Select Count(Username) From Users Where Username = ?"""
        cu = conn.cursor()
        print("Cursor Created")
        cu.execute(count, (username,))
        results = cu.fetchall()
        for i in results:
            if int(i[0]) > 1:
                return jsonify({"success": False, "message": "Username is Taken"})
        password = request.json.get("password")
        if LF.PasswordCheck(password):
            password = password.encode("utf-8")
        else:
            return jsonify(
                {
                    "success": False,
                    "message": "Password must be between 5 and 16 characters and have atleast 1 uppercase character, 1 lowercase character and 1 number",
                }
            )
        salt = gensalt()
        hashedPassword = hashpw(password, salt)
        try:
            statement = """INSERT INTO Users(UTypeID, Username, Password, Email) VALUES(?,?,?,?)"""
            CUSTOMER_ROLE = 2
            cu.execute(
                statement,
                (CUSTOMER_ROLE, username, hashedPassword, email),
            )
            conn.commit()
            return jsonify({"success": True, "message": "Login Successful", "role": 2})
        except Error as e:
            print("Value could not be added to DB", e)
            return jsonify({"success": False, "message": "Internal Server Error"})


# The `@app.route("/staffsignup", methods=["POST"])` decorator in the Flask application is defining a
# route for handling POST requests to create a new staff account. When a POST request is made to the
# "/staffsignup" endpoint, the `StaffSignupDetails()` function is executed to process the request and
# handle the creation of a new staff account in the database.
@app.route("/staffsignup", methods=["POST"])
def StaffSignupDetails():
    print("Request Recieved")
    with sqlite3.connect(r"Database/RZA-Data.db") as conn:
        print("Connection Established")
        email = request.json.get("email")
        if not LF.EmailCheck(email):
            return jsonify({"success": False, "message": "Not a Valid Email"})
        username = request.json.get("username")
        print(username)
        if LF.UsernameCheck(username):
            return jsonify(
                {
                    "success": False,
                    "message": "Username must be 5 - 16 characters longs and alphanumeric",
                }
            )
        count = """Select Count(Username) From Users Where Username = ?"""
        cu = conn.cursor()
        print("Cursor Created")
        cu.execute(count, (username,))
        results = cu.fetchall()
        for i in results:
            if int(i[0]) > 1:
                return jsonify({"success": False, "message": "Username is Taken"})
        password = request.json.get("password")
        if LF.PasswordCheck(password):
            password = password.encode("utf-8")
        else:
            return jsonify(
                {
                    "success": False,
                    "message": "Password must be between 5 and 16 characters and have atleast 1 uppercase character, 1 lowercase character and 1 number",
                }
            )
        salt = gensalt()
        hashedPassword = hashpw(password, salt)
        try:
            statement = """INSERT INTO Users(UTypeID, Username, Password, Email) VALUES(?,?,?,?)"""
            STAFF_DEFAULT_ROLE = 4
            cu.execute(
                statement,
                (STAFF_DEFAULT_ROLE, username, hashedPassword, email),
            )
            conn.commit()
            return jsonify(
                {"success": True, "message": "Staff Account Created", "role": 3}
            )
        except Error as e:
            print("Value could not be added to DB", e)
            return jsonify({"success": False, "message": "Internal Server Error"})


if __name__ == "__main__":
    app.run()
    # ssl_context="adhoc"
