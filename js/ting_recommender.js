/**
 * @file
 * JS logic used in ting_recommender.
 */

"use strict";

window.addEventListener('load', function () {
  let container = document.querySelector('#ting-recommender');
  let asd = container.getElementsByTagName('h2');
  asd[0].textContent = Drupal.t('Inspiration');
});
