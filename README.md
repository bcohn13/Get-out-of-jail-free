# Get-out-of-jail-free!
*INST377-Final Project*

## Description
Our app is a one-stop shop for criminals to find the best places to commit robbery or theft. Want to know where the low risk places are located? Check out our map! It also shows you the places to avoid as they are high-risk areas. Use the link below to access our application. 

[Our Application](http://get-out-jail-free.herokuapp.com)

*This application can be used on any size laptop, desktop, and mobile device.*


# Developer Manual

How to install application and all dependencies:
    Clone the repository and install npm and fetch via the terminal.

How to run your application on a server:
    Type 'npm start' in the terminal and visit 'localhost:3000' in the browser.

The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do
    The API for our server comes from the Montgomery County public database. Using a GET request to retrieve the data from the API, POST to send the data, and PUT to update the resource.

A clear set of expectations around known bugs and a road-map for future development.
    In the future, we want to read more entries from the dataset in order to have a more accurate representation of the risk of crimes on the map. We also want to add a search feature on the map page that will allow users to input the types of crimes to display.