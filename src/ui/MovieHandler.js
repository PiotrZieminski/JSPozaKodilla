define(
    ['movie', 'library'],
    function(Movie, Library) {
        var libraryObject = new Library();

        function createMovie() {
            var movieTitle = $('#movie-title').val(),
                movieYear = $('#movie-year').val(),
                movieRating = $('#movie-rating option:selected').val(),
                isWatched = $('#movie-watched').is(':checked');

            return new Movie(movieTitle, movieRating, movieYear, isWatched);
        }

        function addMovieToTable(movie) {
            var result = '',
                $table = $('#movie-library'),
                isWatched = movie.isWatched ? "Tak" : "Nie";

            result += '<tr data-id='+movie.id+'> \
                <td>' + movie.title + '<td> \
                <td>' + movie.year + '</td> \
                <td>' + movie.rating + '</td> \
                <td>' + isWatched + '</td> \
                <td><button class="btn btn-danger delete-movie" data-id="' + movie.id + '">Usuń</button>';

            $table.find('tbody').append(result);
        }

        function deleteMovie(id) {
            // libraryObject.remove(id);
            $('#movie-library tbody tr[data-id="'+id+'"]').remove();
        }

        // $('#add-movie').on('click', function() {});
        $('#add-movie').click(function(event) {
            event.preventDefault();

            var movie = createMovie();

            addMovieToTable(movie);        
            libraryObject.add(movie);
        });

        $(document).on('click', '.delete-movie', function(event) {
            deleteMovie($(this).data('id'));
        });
    }
);