  <?php
/**
 * @file
 * This plugin generates a search result based on a new materials node. It's
 * mainly used to override the default page for this node type (node/%node).
 */

$plugin = array(
  'title' => t('Ting Recommender'),
  'description' => t('Show recommendation'),
  'single' => TRUE,
  'render callback' => 'ting_recommender_content_type_render',
  'category' => t('Ting'),
  'render last' => TRUE,
);

/**
 * Render the ting new materials results results amount block.
 */
function ting_recommender_content_type_render($subtype, $conf, $panel_args, $context) {
  // Define the return block.
  $block = new stdClass();
  drupal_add_js('https://cdn.bibspire.dk/ddbcms.js', 'external');

  // Set block content.
  $block->content['#markup'] = '<div id="ting-recommender" style="display: none"></div>';
  $block->content['#attached']['js'][] = drupal_get_path('module', 'ting_recommender') . '/js/ting_recommender.js';
  return $block;
}
