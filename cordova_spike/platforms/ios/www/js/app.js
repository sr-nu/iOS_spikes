// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


    var HomeView = function (adapter, template, listItemTemplate) {

        this.findByName = function() {
            adapter.findByName($('.search-key').val()).done(function(employees) {
                    $('.employee-list').html(listItemTemplate(employees));
            });
        };

        this.initialize = function () {
            // Define a div wrapper for the view. The div wrapper is used to attach events.
            this.el = $('<div/>');
            this.el.on('keyup', '.search-key', this.findByName);
        };


        this.render = function () {
          this.el.html(template());
            return this;
        };

        
        
        this.initialize();

    };





    /* ---------------------------------- Local Variables ---------------------------------- */
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
    var adapter = new MemoryAdapter();

    adapter.initialize().done(function () {
        $('body').html(new HomeView(adapter, homeTpl, employeeLiTpl).render().el);
    });
   
    /* --------------------------------- Event Registration -------------------------------- */
     document.addEventListener('deviceready', function () {
        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Native Message", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);


    /* ---------------------------------- Local Functions ---------------------------------- */

}());