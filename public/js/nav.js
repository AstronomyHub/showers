function navigateTo(view) {
  var page = '/view/' + view.replace(/ /g, '-');
  history.replaceState({view: view},
                       '从太空看流星雨 - ' + view,
                       page);

  if (typeof mixpanel !== 'undefined') {
    mixpanel.track('meteors', {
      view: view
    });
  }
  if (typeof ga !== 'undefined') {
    ga('send', 'pageview', '/' + page);
  }
}
