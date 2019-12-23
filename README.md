# Day-Planner
creating a planner that saves on local storage

## Description

* The point of this assignment was to create a day planner which would change colors by itself depending on the time of the day.

* for example if the time had already passed that row would be a certain color while upcoming times would be a different color.

* In this assignment I tried to use all jquery without having to write my stuff out in the html file.

* I also made use of moment.js to be able to handle the time part of this planner.

## Functionality

* Whatever the user had typed for the certain textarea, upon refreshing the page, the text is supposed to stay there because of the localstorage.

* without having to change the page manually, the time had to update to the current time.

* The Textareas also had to be multiple colors according to what time they correspond.

* each textarea has its own save button which upon clicking it it would send the content to the localstorage.

## Reocurring-Errors

* Making the moment.js match the time i wrote in as an array was tough work since it seams that moment.js works on military time.

* Certain things would not console.log and so I had no idea an what i had to work on in order to keep moving forward.

* This was a lot of guess work and moving small things around.

* When to call the functions and which functions had to work as soon as the page was opened was another thing entirely, I had to keep going back and forth between the code and the page to check what was changing.

* It seems as if one text area would ocuply all the local storage, and upon recalling the content it would apply to all the textareas.

## Planned-Improvements

* I am not entirely sure if I linked the buttons to the different textareas.

* I have to separate the different textarea's localstorage so that they do no overwrite each other.