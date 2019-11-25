<?php
/**
 * @file
 * ting_recommender.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function ting_recommender_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: page_manager_handlers
  $overrides["page_manager_handlers.ting_collection_panel_context.conf|display|content|new-420defd3-5896-4004-8daa-0f606067331f"] = (object) array(
      'pid' => 'new-420defd3-5896-4004-8daa-0f606067331f',
      'panel' => 'left_sidebar',
      'type' => 'recommender',
      'subtype' => 'recommender',
      'shown' => TRUE,
      'access' => array(),
      'configuration' => array(),
      'cache' => array(),
      'css' => array(),
      'extras' => array(),
      'position' => 3,
      'locks' => array(),
      'uuid' => '420defd3-5896-4004-8daa-0f606067331f',
    );
  $overrides["page_manager_handlers.ting_collection_panel_context.conf|display|content|new-b238f54d-6cbb-4d51-873d-4510199d4854|position"] = 2;
  $overrides["page_manager_handlers.ting_collection_panel_context.conf|display|panels|left_sidebar|3"] = 'new-420defd3-5896-4004-8daa-0f606067331f';
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|content|new-0ff7e4a6-1810-4de9-84d4-fda87404376a|position"] = 6;
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|content|new-2c6af9c6-63ae-4100-9b56-e3b1bee1ce9a|position"] = 5;
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|content|new-6aced172-c48a-4698-b3c6-f1a820b5428b|position"] = 4;
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|content|new-d30a83e2-5102-4e5d-8f1d-2b63c0aefcb3"] = (object) array(
      'pid' => 'new-d30a83e2-5102-4e5d-8f1d-2b63c0aefcb3',
      'panel' => 'attachment_1_1',
      'type' => 'recommender',
      'subtype' => 'recommender',
      'shown' => TRUE,
      'access' => array(),
      'configuration' => array(),
      'cache' => array(),
      'css' => array(),
      'extras' => array(),
      'position' => 3,
      'locks' => array(),
      'uuid' => 'd30a83e2-5102-4e5d-8f1d-2b63c0aefcb3',
    );
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|panels|attachment_1_1|3"] = 'new-d30a83e2-5102-4e5d-8f1d-2b63c0aefcb3';
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|panels|attachment_1_1|4"] = 'new-6aced172-c48a-4698-b3c6-f1a820b5428b';
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|panels|attachment_1_1|5"] = 'new-2c6af9c6-63ae-4100-9b56-e3b1bee1ce9a';
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|panels|attachment_1_1|6"] = 'new-0ff7e4a6-1810-4de9-84d4-fda87404376a';
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|storage_id"]["DELETED"] = TRUE;
  $overrides["page_manager_handlers.ting_object_panel_context.conf|display|storage_type"]["DELETED"] = TRUE;

  // Exported overrides for: page_manager_pages
  $overrides["page_manager_pages.user_loans.default_handlers|page_user_loans_panel_context|conf|display|content|new-25838571-8539-423d-88a5-158c6d88bf36"] = (object) array(
      'pid' => 'new-25838571-8539-423d-88a5-158c6d88bf36',
      'panel' => 'left_sidebar',
      'type' => 'recommender',
      'subtype' => 'recommender',
      'shown' => TRUE,
      'access' => array(),
      'configuration' => array(),
      'cache' => array(),
      'css' => array(),
      'extras' => array(),
      'position' => 2,
      'locks' => array(),
      'uuid' => '25838571-8539-423d-88a5-158c6d88bf36',
    );
  $overrides["page_manager_pages.user_loans.default_handlers|page_user_loans_panel_context|conf|display|panels|left_sidebar|2"] = 'new-25838571-8539-423d-88a5-158c6d88bf36';
  $overrides["page_manager_pages.user_reservations.default_handlers|page_user_reservations_panel_context|conf|display|content|new-d8d0e668-25f7-4d70-84f6-49996897aa17"] = (object) array(
      'pid' => 'new-d8d0e668-25f7-4d70-84f6-49996897aa17',
      'panel' => 'left_sidebar',
      'type' => 'recommender',
      'subtype' => 'recommender',
      'shown' => TRUE,
      'access' => array(),
      'configuration' => array(),
      'cache' => array(),
      'css' => array(),
      'extras' => array(),
      'position' => 2,
      'locks' => array(),
      'uuid' => 'd8d0e668-25f7-4d70-84f6-49996897aa17',
    );
  $overrides["page_manager_pages.user_reservations.default_handlers|page_user_reservations_panel_context|conf|display|panels|left_sidebar|2"] = 'new-d8d0e668-25f7-4d70-84f6-49996897aa17';

 return $overrides;
}
