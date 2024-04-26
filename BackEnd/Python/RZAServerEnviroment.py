from flask import Flask, jsonify, request
from flask_cors import CORS
import cryptography
from bcrypt import checkpw, gensalt, hashpw
import RZAFunctions as LF
import sqlite3
from sqlite3 import Error
import re
import datetime
import random

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
    with sqlite3.connect(r"/workspaces/Lorem-Ipsum/Database/RZA-Data.db") as conn:
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

            for i in results:
                logins[i[2]] = i[3]
                role = i[1]
                loyalty_points = i[6]
                AcceptedMembershipValues = [1, 2, 3, 4]
                membershipID = i[5]
                if membershipID in AcceptedMembershipValues:
                    spare_query = """SELECT MembershipType FROM MembershipType WHERE MTypeID = ?"""
                    cu.execute(spare_query, (membershipID,))
                    QueryResults = cu.fetchall()
                    membership = QueryResults
                else:
                    membership = "None"
            if checkpw(password, logins[username]):
                return jsonify(
                    {
                        "success": True,
                        "message": "Login Successful",
                        "role": role,
                        "membership": membership,
                        "points": loyalty_points,
                    }
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
    with sqlite3.connect(r"/workspaces/Lorem-Ipsum/Database/RZA-Data.db") as conn:
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
            statement = """INSERT INTO Users(UTypeID, Username, Password, Email, LPoints) VALUES(?,?,?,?,?)"""
            CUSTOMER_ROLE = 2
            DEFAULT_LPOINTS = 0
            DEFAULT_MEMBERSHIP = 0
            cu.execute(
                statement,
                (CUSTOMER_ROLE, username, hashedPassword, email, DEFAULT_LPOINTS),
            )
            conn.commit()
            return jsonify(
                {
                    "success": True,
                    "message": "Login Successful",
                    "role": CUSTOMER_ROLE,
                    "membership": "None",
                    "points": DEFAULT_LPOINTS,
                }
            )
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
    with sqlite3.connect(r"/workspaces/Lorem-Ipsum/Database/RZA-Data.db") as conn:
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
            statement = """INSERT INTO Users(UTypeID, Username, Password, Email, LPoints) VALUES(?,?,?,?,?)"""
            STAFF_DEFAULT_ROLE = 4
            STAFF_DEFAULT_LPOINTS = 0
            cu.execute(
                statement,
                (
                    STAFF_DEFAULT_ROLE,
                    username,
                    hashedPassword,
                    email,
                    STAFF_DEFAULT_LPOINTS,
                ),
            )
            conn.commit()
            return jsonify(
                {
                    "success": True,
                    "message": "Staff Account Created",
                    "role": STAFF_DEFAULT_ROLE,
                    "membership": "None",
                    "points": STAFF_DEFAULT_LPOINTS,
                }
            )
        except Error as e:
            print("Value could not be added to DB", e)
            return jsonify({"success": False, "message": "Internal Server Error"})


RoomTypes = ["Single", "Double", "King", "Queen"]

# The `@app.route("/reserve", methods=["POST"])` decorator in the Flask application is defining a
# route for handling POST requests to create a new staff account. When a POST request is made to the
# "/reserve" endpoint, the `reserve()` function is executed to process the request and
# handle the creation of a new booking in the database as well as alter the room to be unavailable.
@app.route("/reserve", methods=["POST"])
def reserve():
    print("Request Recieved")
    with sqlite3.connect(r"/workspaces/Lorem-Ipsum/Database/RZA-Data.db") as conn:
        print("Connection Established")
    username = request.json.get("username")
    reservationName = request.json.get("reservationName")
    print(reservationName)
    check_in_date = request.json.get("checkin")
    if not LF.DateCheck(check_in_date):
        return jsonify({"success": False, "message": "Check In is NOT a valid Date"})
    check_out_date = request.json.get("checkout")
    if not LF.IsDate(check_out_date):
        return jsonify({"success": False, "message": "Check Out is NOT a valid Date"})
    print("Check In Date:", check_in_date, "\nCheck Out Date:", check_out_date)
    roomType = request.json.get("roomType")
    if not roomType in RoomTypes:
        return jsonify({"success": False, "message": "room type is invalid"})
    print("Room Type:", roomType)
    try:
        cu = conn.cursor()
        print("Cursor Created")
        try:
            query = """SELECT RoomID FROM Rooms WHERE Avaliable = 1 AND RoomType = ?"""
            cu.execute(query, (roomType,))
            AvaliableRooms = cu.fetchall()
            print("Available Rooms:", AvaliableRooms)
            Rooms = []
            for RoomID in AvaliableRooms:
                print("RoomID:", RoomID[0])
                Rooms.append(RoomID[0])
            chosen_room = random.choice(Rooms)
            print("Chosen Room:", chosen_room)
            try:
                delete = """DELETE FROM Rooms WHERE RoomID = ?"""
                cu.execute(delete, (chosen_room,))
                conn.commit()
                print("Deletion Successful")
                try:
                    reintroduction = """INSERT INTO Rooms(RoomID, RoomNumber, Avaliable, RoomType) VALUES(?,?,?,?)"""
                    cu.execute(reintroduction, (chosen_room, chosen_room, 2, roomType))
                    conn.commit()
                    print("Reintroduction Successful")
                    try:
                        newQuery = """SELECT UserID FROM Users WHERE Username = ?"""
                        print(username)
                        cu.execute(newQuery, (username,))
                        userID = cu.fetchall()
                        userID = userID[0][0]
                        print("UserID:", userID)
                        try:
                            insert = """INSERT INTO RoomBookings(CheckInDate, CheckOutDate, RoomID, UserID, ReservationName) VALUES(?,?,?,?,?)"""

                            cu.execute(
                                insert,
                                (
                                    check_in_date,
                                    check_out_date,
                                    chosen_room,
                                    userID,
                                    reservationName,
                                ),
                            )
                            conn.commit()
                            print("Insertion Complete, Room is Booked")
                        except Error as e:
                            print(
                                "An error has occurred when inserting into the table:\n",
                                e,
                            )
                    except Error as e:
                        print("An Error Has Occurred:", e)
                except Error as e:
                    print(
                        "An Error has occurred re-introducing data to the database:\n",
                        e,
                    )

            except Error as e:
                print("An Error Occurred Updating the Rooms Record:", e)

        except:
            print("Error has occurred in room avaliablity")

    except:
        print("Error > > > Could Not Create Cursor @ Reservation")

# The above code is defining a route "/store" in a Python web application using Flask framework. This
# route is set up to handle HTTP GET requests.
@app.route("/store", methods=["GET"])
def storeDetails():
    print("Request Recieved")
    with sqlite3.connect(
        r"/workspaces/Lorem-Ipsum/Database/RZA-Data.db"
    ) as conn:
        print("Connection Established")
        query = """SELECT * FROM Store"""
        cu = conn.cursor()
        cu.execute(query)
        storeItems = cu.fetchall()
        # print(menuItems[0])
        storeItemsList = []
        for i in storeItems:
            print(i[1:])
            item = i[1]
            type = i[2]
            desc = i[3]
            price = i[4]
            url = i[5]
            json = {
                "item": item,
                "type": type,
                "desc": desc,
                "price": price,
                "url": url,
            }
            storeItemsList.append(json)
        return jsonify({"storeItems": storeItemsList})

if __name__ == "__main__":
    app.run()
    # ssl_context="adhoc"