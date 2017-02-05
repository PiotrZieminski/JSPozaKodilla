require.config({
    baseUrl: "./src",
    paths: {
        "movie": "classes/Movie",
        "library": "classes/Library",
        "library_report": "classes/Library_report",
        "movieReport": "classes/MovieReport",
        "report": "classes/Report",
        "tools": "tools",
    },
    waitSeconds: 15 
});

requirejs(['movie'], function(Movie) {
    var movie1 = new Movie(),
        movie2 = new Movie("Test", 3, 2005, true);

    console.log(movie2);

});

requirejs(['library'], function(Library) {
    var movie1 = new Movie(),
        movie2 = new Movie("Test", 3, 2005, true);

    console.log(movie2);

});