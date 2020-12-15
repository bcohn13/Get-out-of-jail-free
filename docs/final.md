 # Documentation

### Team Members:
-Charles Belinky
-Benjamin Cohn
-Alexey Jeffers
-Juan Lopez-Luna
-Archa Patel
-Teaven Tedros

[Our Application](http://get-out-jail-free.herokuapp.com/)

## Information Problem
There are currently many resources that help prevent crime, but not many exist to help *commit* crime. Criminals are an underrepresented population, and many criminals do not have the resources or knowledge needed to successfully commit crimes. We wanted to create a website that criminals could utilize to idenitfy potential spots that a crime might be able to be successfully committed. We did this by presenting users with an attractive, easy to navigate site that provides them with only the most important information to complete this task.

## Stakeholders
Criminals, or aspiring criminals in Montgomery County, MD. They will be able to use our app on any mobile device and laptop/desktop. Little technical literacy skill is needed to read and interpret the information that we display to the users.

## Data
We used data from the Montgomery County Crime dataset, which can be found here [MoCo crime data](https://data.montgomerycountymd.gov/Public-Safety/Crime/icn6-v9z3).
Zip codes were originally found at [Zip Codes](https://gist.github.com/erichurst/7882666).
We used python and [Zillow](https://www.zillow.com/browse/homes/md/montgomery-county/) to filter for MoCo zip codes.

## Strategies & Solutions
We deciced to present our solution in the form of an interactive map. We thought it provided for the best user experience because it provides all of the information users need to pull of a successful heist. We chose to represent our data using 3 easily identifable colored circles: green, yellow, and red. The circles represent unique zip codes in Montgomery County. We also used clickable pop ups to display crime count in that zip code. 

## Technical system decision rationale
Our groups desire for simplicty with the presentation of our website dictated the systems we would ultimalty utililzie to create the site. We used several technolgies for our website, Bulma for the formatting and styling aspects of the website, leaflet for the presentation of the mapping aspect, as well as python to generate an easy to read JSON file for the zip codes portion of our map. We wanted to focus on ease of use, so we listened to the recomendations made by the professor and the AMPs. Bulma was discussed at length in class, and made for a positive alternative to classic CSS. We liked the functionality of it, enabling us to resuse color schemes for the different parts of our website that we needed to style. For the map section, we initially wanted to use the Google maps API as a way to present a map to the user, however this posed several issues. A premium account ultimately proved to be a roadblock, and we circumvented the issue by instead using leaflet. The documentation and ease of implementation for leaflet inspired us to learn and use the technology. Finally, out group was able to access outside knowledge in order to use Python to streamline our desire for an easy to read JSON file. Python allowed us to easily create an array of data points outside of our data API for use on our backend. This process allowed us to call in data locally wihtout the need for implementing another API, which might pose issues that we might not have been able to solve.

## Final System
Our final system is a great resource for criminals to utilize when they are looking to pull off a heist in Montgomery County. It addresses our information problem by displaying an interactive map that shows differing levels of crime. A green icon on the map means that there is a low risk of getting caught. Yellow means there is a medium chance, and red indicates that there is a high risk of getting caught. The icon, when clicked, displays the crime count for that zip code. 

## Challenges & Impact
For our app to work, we needed access to zip codes which the dataset we were originally going to work with didn't provide. We had to look for another dataset and stumbled upon the crime data for Montgomery County. This data along with the zip codes we found on github allowed us to implement our design smoothly. We also had trouble with using the Google Maps API; it required us to make a trial account and is not free. We switched to Leaflet to display our map which was very easy to work with.

## Future Work
Some next steps would be to add additional functionality to the map such as user input and display various statistics to the user. This app may even be able to expand to show more counties in Maryland. Another future direction would be to transform the current map into a heatmap, which would be more visually appealing to the users. 