/**
 * Created by piotr on 05.02.2017.
 */
define(['tools'], function(tools) {
    function MovieReport() {

    }
    MovieReport.prototype = new Report();

    MovieReport.prototype.getInfo = function(movie) {
        var watched = movie.isWatched ? "tak" : "nie";

        console.log("Tytuł: " + movie.title);
        console.log("Ocena: " + movie.rating);
        console.log("Rok: " + movie.year);
        console.log("Oglądnięte: " + watched);
    }
});