<?php

/**
 * @file
 * This plugin renders a wrapper for recommendations list.
 */

$plugin = [
  'title' => t('Ting Recommender'),
  'description' => t('Show recommendation'),
  'single' => TRUE,
  'render callback' => 'ting_recommender_content_type_render',
  'category' => t('Ting'),
  'render last' => TRUE,
];

/**
 * Render the ting new materials results results amount block.
 */
function ting_recommender_content_type_render($subtype, $conf, $panel_args, $context) {
  // Define the return block.
  $block = new stdClass();
  drupal_add_js(drupal_get_path('module', 'ting_recommender') . '/js/widget/recommender.js', 'file');

  $block->content['#markup'] = '<div id="ting-recommender"></div>';
  return $block;
}
