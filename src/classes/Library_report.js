/**
 * Created by piotr on 05.02.2017.
 */
define(['tools'], function(tools) {
    function LibraryReport() {

    }

    LibraryReport.prototype = new Report();

    LibraryReport.prototype.getTitles = function(library) {
        var titles = [];

        library.movies.forEach(function(element, index) {
            titles.push(element.title);
        });

        return titles;
    }
});