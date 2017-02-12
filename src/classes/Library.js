/**
 * Created by piotr on 05.02.2017.
 */
define(['tools'], function(tools) {
    function Library() {
        this.movies = [];
    }

    Library.prototype.add = function(movie) {
        this.movies.push(movie);

        return this;
    }
    
    Library.prototype.remove = function(movie) {
        for (var i = 0, size = this.movies.length; i < size; i++) {
            if (this.movies[i].id === movie.id) {
                this.movies.splice(i, 1);
                break;
            }
        }

        return this;
    }

    return Library;
});