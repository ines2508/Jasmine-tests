# Jasmine - the tests

To check proper displaying of the content Jasmine's tests are added. Their results are shown at the end of the website's content. 
If the test has passed, its name is displayed using bluish green font. 
If the test has failed, the error is displayed using red color. 


## 1. Content is present

First type of tests check if the content of the element is present and was loaded fully. So the user has ability to read and see the texts on the website. 

Tests:
* RSS Feeds are defined
* RSS Feeds URLs are defined
* RSS Feeds names are defined


## 2. Content is visible

Second type of tests are focused mainly on checking if the elements have appropriate CSS classes. Only having appropriate classes the elements on the website are hidden or visible for the user.

Checking these classes are based on watching if these classes are added or removed according to the needs and methods used on the elements.

Tests:
* The menu is hidden by default
* The menu is toggled when icon is clicked


## 3. Content is current

Third type of tests check loading of API from the external source. The loading is implemented by the function load Feed. The tests check if the function works, if the results of asynchronous work are unique and present. So the user has current version of the website. 

Tests:
* Initial Entries. There is at least one entry in feed container
* New Feed Selection. Totaly new feed is loaded

