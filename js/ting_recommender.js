/**
 * @file
 * JS logic used in ting_recommender.
 */

"use strict";

window.addEventListener('load', function () {
  let container = document.querySelector('#ting-recommender');
  if (container.childElementCount !== 0) {
    let heading = container.getElementsByTagName('h2');
    heading[0].textContent = Drupal.t('Inspiration');
    container.removeAttribute('style');
  }
});
