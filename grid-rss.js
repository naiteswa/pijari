$(document).ready(function () {
  loadRSS(
    "https://www.pijari.com/rss.xml",
    "#newsfeed",
    "Pijari.com"
  );
});

function loadRSS(link, htmlContainer, author) {
  var url = link;
  var container = $(htmlContainer);

  feednami.load(url, function (result) {
    if (result.error) {
      console.log(result.error);
    } else {
      var entries = result.feed.entries;
      for (var i = 0; i < 5; i++) {
        var entry = entries[i];
        container.append(
          '<li class="rsscard"><p><h2>' +
            '<a href="' +
            entry.link +
            '" target="_blank">' +
            entry.title +
            "</a>" +
            "</h2></p>" +
            author +
            "</li>"
        );
      }
    }
  });
}