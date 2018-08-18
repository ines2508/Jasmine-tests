/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URLs are defined', function() {
            allFeeds.forEach(function(feed){
                var feedURL = feed.url; 
                expect(feedURL).toBeDefined();
                expect(feedURL).not.toBe(" ");
                expect(feedURL.length).not.toBe(0);
            })
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('names are defined', function() {
             allFeeds.forEach(function(feed){
                var feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName).not.toBe(" ");
                expect(feedName.length).not.toBe(0);
             })
         });
  
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){

                /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden by default', function(){

            // If the body has class menu-hidden then the .slide-menu is hidden
            // because it has translate3d with -12em 
            
            var bodyClass = $('body').hasClass('menu-hidden');
            expect(bodyClass).toBeTruthy();
           
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('is toggled when icon is clicked', function(){
            var menuIcon = $('.menu-icon-link');
            var body = $('body');
            
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBeTruthy();

        })  
    });

        /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function(){

                /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done){

            loadFeed(0, function(){

                done();
            });
        })

        it('There is at least one entry in feed container', function(done){

            var feedContainer = $('.feed .entry').length;
            expect(feedContainer).toBeGreaterThan(0)

            done()
    
        })
    });

        /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        describe('New Feed Selection', function(){

            var feed01;
            var feed02 

            beforeEach(function(done){

                // load first time
                loadFeed(0, function(){
                    feed01 = $('.feed').html();

                    // load second time
                    loadFeed(1, function() {

                        feed02 =  $('.feed').html();
                        done();
    
                    })
                })
            })
    
            it('Totaly new feed is loaded', function(done){

                expect(feed01).not.toEqual(feed02);
                done();
               
            })
       });

}());
