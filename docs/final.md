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
## Technical system decision rationale
## Final System
Our final system is a great resource for criminals to utilize when they are looking to pull off a heist in Montgomery County. It addresses our information problem by displaying an interactive map that shows differing levels of crime. A green icon on the map means that there is a low risk of getting caught. Yellow means there is a medium chance, and red indicates that there is a high risk of getting caught. The icon, when clicked, displays the crime count for that zip code. 

## Challenges & Impact
For our app to work, we needed access to zip codes which the dataset we were originally going to work with didn't provide. We had to look for another dataset and stumbled upon the crime data for Montgomery County. This data along with the zip codes we found on github allowed us to implement our design smoothly. We also had trouble with using the Google Maps API; it required us to make a trial account and is not free. We switched to Leaflet to display our map which was very easy to work with.

## Future Work
Some next steps would be to add additional functionality to the map such as user input and display various statistics to the user. This app may even be able to expand to show more counties in Maryland. 
Another future direction would be to transform the current map into a heatmap, which would be more visually appealing to the users. 