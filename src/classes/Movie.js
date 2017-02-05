define(['tools'], function(tools) {
  function Movie(title, rating, year, isWatched) {
      this.id = tools.getId();
      this.title = title || "";
      this.rating = rating || 0;
      this.year = year || 0000;
      this.isWatched = isWatched || false;
    }

    return Movie;
});
