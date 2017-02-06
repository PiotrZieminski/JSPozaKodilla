require.config({
    baseUrl: "./src",
    paths: {
        "movie": "classes/Movie",
        "library": "classes/Library",
        "library_report": "classes/Library_report",
        "movieReport": "classes/MovieReport",
        "report": "classes/Report",
        "tools": "tools",
        "movieHandler": "ui/MovieHandler",
    },
    waitSeconds: 15 
});

requirejs(['movie', 'library', 'movieHandler'], function(Movie, Library, MovieHandler) {
    // ---    
});