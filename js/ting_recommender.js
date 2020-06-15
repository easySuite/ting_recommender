/**
 * @file
 * JS logic used in ting_recommender.
 */

"use strict";

window.addEventListener('load', function () {
  let sidebar = document.querySelector('.secondary-content');

  let tingObject = location.href.match(/\/ting\/object\/([^?#.]*)/);
  let collection = location.href.match(/\/ting\/collection\/([^?#.]*)/);
  let user = location.href.match(/\/user\/me\/status/);

  if (tingObject) {
    let container = document.querySelector('#ting-recommender');

    if (container.childElementCount !== 0) {
      let headingGrid = container.getElementsByTagName('h2');
      headingGrid[0].textContent = Drupal.t('Inspiration');
      container.removeAttribute('style');
    }
  }

  if ((user || collection) && sidebar !== null) {
    let options = {
      childList: true,
      subtree: true
    };

    let mCallback = function (mutations) {
      for (let mutation of mutations) {
        if (mutation.type === 'childList') {
          if (mutation.target.localName === 'div') {
            let blockWrapper = mutation.addedNodes;
            let titleWrapper = blockWrapper[0].firstChild;
            titleWrapper.textContent = Drupal.t('Prøv også:');
          }
        }
      }
    };

    let observer = new MutationObserver(mCallback);

    observer.observe(sidebar, options);

    observer.takeRecords();
  }
});
