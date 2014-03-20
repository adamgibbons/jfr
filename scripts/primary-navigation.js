$(function() {
  var page = location.pathname.substring(1, location.pathname.length -1);
  var links = $('.primary-nav a');
  var newLinks = [];

  if (page === '/') {
    $('.primary-nav li:first-child a').addClass('active');
  } else {
    for (var i = 0; i < links.length; i++) {
      newLinks.push(links[i]['text'].toLowerCase().split(' ').join('-'));
    }
    var currentPageIndex = newLinks.indexOf(page);
    var currentLeaf = $('.primary-nav li')[currentPageIndex];

    $(currentLeaf).find('a').addClass('active');
  }
});