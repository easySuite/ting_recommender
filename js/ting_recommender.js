/**
 * @file
 * JS logic used in ting_recommender.
 */

"use strict";

window.addEventListener('load', function () {
  var sidebar = document.querySelector('.secondary-content');

  var tingObject = location.href.match(/\/ting\/object\/([^?#.]*)/);
  var collection = location.href.match(/\/ting\/collection\/([^?#.]*)/);
  var user = location.href.match(/\/user\/me\/status/);

  if (tingObject) {
    var container = document.querySelector('#ting-recommender');

    if (container.childElementCount !== 0) {
      var headingGrid = container.getElementsByTagName('h2');
      headingGrid[0].textContent = Drupal.t('Inspiration');
      container.removeAttribute('style');
    }
  }

  if ((user || collection) && sidebar !== null) {
    var options = {
      childList: true,
      subtree: true
    };

    var mCallback = function (mutations) {
      for (var index = 0; index < mutations.length; index++) {
        var mutation = mutations[index];
        if (mutation.type === 'childList') {
          if (mutation.target.localName === 'div') {
            var blockWrapper = mutation.addedNodes;
            var titleWrapper = blockWrapper[0].firstChild;
            titleWrapper.textContent = Drupal.t('Prøv også:');
          }
        }
      }
    };

    var observer = new MutationObserver(mCallback);

    observer.observe(sidebar, options);

    observer.takeRecords();
  }
});
