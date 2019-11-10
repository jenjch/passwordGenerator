# Homework 3 - Password Generator Utilizing Javascript

The aim of this assignment was to create a password generator that will run in the browser and output on the page. It should take into account user selected criteria, as well as minimum requirements, and be powered by Javascript code. I wanted to make sure the prompts, confirms, alerts, and click events all functioned efficiently to generate the resulting password.

## Composition of Website and Code

The web page is a single html file, utilizing bootstrap CSS, an additional external CSS file, and an external Javascript file. On the page, there are headings, a text box where the generated password would display, and separate buttons for generating the password (which would introduce prompts, confirms, and alerts), and copying the password to clipboard. 

## Process

My approach was to first take notes on the behavior of the demo password generator, and then building out each step with pseudocode, then actual code in the javascript file. I first created a basic html page, and attempted to create the variables, prompts, alerts, functions, events and for loops. Then I saved additional CSS modifications for last (using the screenshot image provided to create the same look), after I was successfully able to generate the password on to the page.

The process included first reviewing fundamentals of Javascript (codecademy was a great help) to better understand the syntax and components of javascript code, googling of best ways to write each type of behavior I was trying to achieve, and using inspector tools and console log to debug when code was not working. 

Some examples of steps I had to research:
* How to link the click event of the generate password button to the start of all prompts, alerts, confirms, and the running of the code. 
* Making sure the prompt was outputing as numbers rather than strings.
* How to set conditions, i.e that the converted prompt was a number (used "Regular Expressions"), that the character length met the minimum and maximum requirements, etc.
* How to concatenate the character different options (symbols, numbers, upper case, lower case) users can select.
* How to write the functions and for loops to build out the requested password.
* How to include a copy to clipboard option. 

I used the additional external CSS to mostly adjust elements like colors, shapes and effects of borders, paddings, fonts, etc. 

## Deployment

Once the program was "complete" (i did a couple of commits as I gradually built out the code), I then followed steps to update the files in Github and deploy the website for review. 
https://github.com/jenjch/passwordGenerator
https://jenjch.github.io/passwordGenerator

## Acceptance Criteria

I hope that I have included all requested specs. Feedback on whether I followed good practices, and whether parts of my code were redundant or imprecise would be helpful.  
