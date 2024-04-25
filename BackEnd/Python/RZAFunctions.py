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


def PasswordCheck(password):
    """
    This function is likely designed to check the strength or validity of a given password.

    :param password: A string representing the password that needs to be checked for validity
    """
    passwordPattern = (
        r"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^_&-+=]+){5,16}$"
    )
    if re.match(passwordPattern, password) != None:
        return True
    else:
        return False


def UsernameCheck(username):
    """
    This function is likely designed to check the validity or format of a given username.

    :param username: It seems like you were about to define a function called `UsernameCheck` that takes
    a parameter `username`. If you need help with completing the function or have any specific
    requirements, feel free to provide more details so I can assist you further
    """
    if len(username) < 5:

        return True
    elif len(username) > 16:

        return True
    elif not username.isalnum():

        return True
    else:

        return False


def IsDate(date, fuzzy=False):
    try:
        parse(date, fuzzy=fuzzy)
        return True
    except ValueError:
        return False


def DateCheck(date):
    if IsDate(date, fuzzy=False):
        date_format = "%Y-%m-%d"
        try:
            dateObject = datetime.datetime.strptime(date, date_format)
            return True
        except:
            return False
    else:
        return False


def EmailCheck(email):
    """
    This function is likely designed to check the validity of an email address.

    :param email: A string representing an email address that you want to check for validity
    """
    regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b"
    if re.fullmatch(regex, email):
        return False
    else:
        return True


# -------------------------- #
