# Import
from flask import Flask, jsonify, request
from flask_cors import CORS
import cryptography
from bcrypt import checkpw, gensalt, hashpw

# import LoginFunctions as LF
import sqlite3
from sqlite3 import Error
import re
import datetime
from dateutil.parser import parse

# -------------------------- #

# Functions


# Checks that the password meets the passing parametres before being allowing anyone to signup/ Login
def PasswordCheck(password):
    passwordPattern = (
        r"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$"
    )
    if re.match(passwordPattern, password) != None:
        return True
    else:
        return False


# Checks that the username meets the passing parametres before being allowing anyone to signup/ Login
def UsernameCheck(username):
    if len(username) < 5:

        return True
    elif len(username) > 16:

        return True
    elif not username.isalnum():

        return True
    else:

        return False


# def IsDate(date, fuzzy=False):
#     try:
#         parse(date, fuzzy=fuzzy)
#         return True
#     except ValueError:
#         return False


# def DateCheck(date):
#     if IsDate(date, fuzzy=False):
#         date_format = "%Y-%m-%d"
#         try:
#             dateObject = datetime.datetime.strptime(date, date_format)
#             return True
#         except:
#             return False
#     else:
#         return False


# Checks that the email meets the passing parametres before being allowing anyone to signup/ Login
def EmailCheck(email):
    regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b"
    # pass the regular expression
    # and the string into the fullmatch() method
    if re.fullmatch(regex, email):
        return False
    else:
        return True


# -------------------------- #
