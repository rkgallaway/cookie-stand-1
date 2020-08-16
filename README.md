# cookie-stand

## Salmon Cookies Project - Code Fellows - Code 201

### Problem Domain

Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon that has just a hint of fishy goodness.

Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

The minimum number of customers per hour.
The maximum number of customers per hour.
The average number of cookies purchased per customer.
Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public facing site.

So, in addition to building an application that calculates daily sales projections for each location (on a page called sales.html), you also need to create a public-facing page (on the homepage index.html) that is colorful, eye-catching, readable, useful, and informative.

You’ve got a lot to do. Plan your work, and work your plan.

### Aug 6, 2020: Started Salmon Cookies Project

  - Sales Data
   - Within your javascript file (example: app.js), created separate JS object literals for each shop location that outputs the following to the sales.html file:
      1. Stored the min/max hourly customers, and the average cookies per customer, in object properties
      1. Set a method of that object to generate a random number of customers per hour. Objects/Math/random
      1. Calculated and stored the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
      1. Stored the results for each location in a separate array as a property of the object representing that location
      1. Displayed the values of each array as unordered lists in the browser
  - Home Page
   - In addition to the provided picture of a fish, my index.html file should contained:
     1. A custom Google font for highlights
     1. A specified standard sans-serif web font for data (such as Arial, Verdana, or Helvetica)
     1. Specified different font colors for all three font usages
     1. A background color for the default page background 
     1. A different background color for elements such boxes and tables 
     1. Included all of the typical stuff that you’ll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.

  ### Aug 8, 2020: Added a COnstructor Function

    1. Created a new branch for today’s lab. Made sure it had all of my changes from lab 06 so that I could extend the functionality.
    1. Replaced all of my object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it created a new instance.
    1. Replaced the lists of my data for each store and built a single table of data instead. 
    1. Displayed each stores data in a table format. Broke each column by the hour and completed each row with a “Daily Location Total”.
    1. Each cookie stand location had a separate render() method that created and appended its row to the table
    1. The header row and footer row were each created in their own stand-alone function    

  ### Aug 13, 2020: Styling Cookie Project

    1. Continued working on the functionality of my sales.html page 
    1. Pat has provided us 7 additional images that they would like to see on the home page of the site. Added images
    1. Public-facing index.html page - the following was added:
      - locations with addresses,
      - Hours open
      - Contact information
      - A link to my sales.html page

  ### Aug 15, 2020: Added a form to the Cookie Stand Project.

   1. Create a new HTML form to accept the information for a new cookie stand. Utilized the <fieldset> tag to help style it.
   1. Created an event handler that creates a new instance of a cookie stand that appends to the table upon form submission.
   1. Use the constructor function as my guide to determine what input fields the form needs.
   1. Validated my html through HTML5 validation.
