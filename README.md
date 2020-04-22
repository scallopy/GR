#  create django-react-project

## Create backend:

###
https://docs.google.com/document/d/1o6QXta24f78ghKa9PUpsPxHQTL7ybDwuqrUTJxet8z0/edit#

$ python --version

Python 2.7.13

$ which python3.5
/usr/bin/python3.5

$ alias python='/usr/bin/python3.5'

$ python --version
Python 3.5.3

$ python3 -m venv venv

$ source venv/bin/activate

$ pip install django djangorestframework django-cors-headers

(env) scaly@debian:~/Dev/GR/django_react_proj$ django-admin --version

2.2.12


$ django-admin startproject django_react_proj

$ django-admin startapp growvick

Create model User:

$ python3 manage.py makemigrations

$ python3 manage.py migrate

Create data migration file:

It represents the direct manipulation of data into the database.

$ python3 manage.py makemigrations --empty --name users users

No installed app with label 'users'.

$ python3 manage.py makemigrations --empty --name growvick growvick

Migrations for 'growvick':

  growvick/migrations/0002_growvick.py

In short, the create_data method recovers the Student model object and creates
initial data, just so that our database isn’t empty when the API starts.

The dependencies property relates the other files to be considered into the
migration process.

The operations are basically the actions Django has to perform once the
migration is triggered.

$ python3 manage.py migrate


## The REST API

  *Create file serializers.py in growvick*
  *Creat endpoints for users_list and users_detail*
  *Create views*

  $ python manage.py runserver

  After you see the log showing our server is up and running, go to the browser

  and access http://localhost:8000/api/users/

# GR
A simple integration between Django API and React App

This project is made up of two main ones:

- *students*: the Django project containing the REST API, along with all the
  back-end code;
  - *students-fe*: the React project, with all Node dependencies, configs, and
    front-end related stuff.

    ## Run it locally

    In order to run the projects locally, you need to have Node, caly@debian:~/Dev/GR/django_react_proj$ django-admin --version
    2.2.12
    ### Running the Django project

    Make sure you have python3 installed in your machine.

    First, let's create the python virtual environment to isolate our projects:

    ```bash
    python3 -m venv logrocket_env
    ```

    Then, activate it:

    ```bash
    source logrocket_env/bin/activate
    ```

    Just then you can clone the project from GitHub. So, `cd` into the venv and
    run:

    ```bash
    git clone https://github.com/diogosouza/django-react-logrocket.git
    ```

    Now, add the needed Djano dependencies:

    ```bash
    pip install django djangorestframework django-cors-headers
    ```

    Great, just need to run the project now. For this, `cd` into the
    django-react-logrocket folder and run:

    ```bash
    python manage.py runserver
    ```

    That's it. Access the address http://localhost:8000/api/students/ and check
    for the API up and running.

    ### Running the React project

    First, `cd` the students-fe directory and run:

    ```bash
    npm install
    ```

    Then, you just need to run the app via:

    ```bash
    npm start
    ```