<?php
/**
 * @file
 * ting_recommender.features.inc
 */

/**
 * Implements hook_default_page_manager_handlers_alter().
 */
function ting_recommender_default_page_manager_handlers_alter(&$data) {
  if (isset($data['ting_collection_panel_context'])) {
    $data['ting_collection_panel_context']->conf['display']->content['new-420defd3-5896-4004-8daa-0f606067331f'] = (object) array(
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
        ); /* WAS: '' */
    $data['ting_collection_panel_context']->conf['display']->content['new-b238f54d-6cbb-4d51-873d-4510199d4854']->position = 2; /* WAS: 4 */
    $data['ting_collection_panel_context']->conf['display']->panels['left_sidebar']['3'] = 'new-420defd3-5896-4004-8daa-0f606067331f'; /* WAS: '' */
  }
  if (isset($data['ting_object_panel_context'])) {
    $data['ting_object_panel_context']->conf['display']->content['new-0ff7e4a6-1810-4de9-84d4-fda87404376a']->position = 6; /* WAS: 5 */
    $data['ting_object_panel_context']->conf['display']->content['new-2c6af9c6-63ae-4100-9b56-e3b1bee1ce9a']->position = 5; /* WAS: 4 */
    $data['ting_object_panel_context']->conf['display']->content['new-6aced172-c48a-4698-b3c6-f1a820b5428b']->position = 4; /* WAS: 3 */
    $data['ting_object_panel_context']->conf['display']->content['new-d30a83e2-5102-4e5d-8f1d-2b63c0aefcb3'] = (object) array(
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
        ); /* WAS: '' */
    $data['ting_object_panel_context']->conf['display']->panels['attachment_1_1']['3'] = 'new-d30a83e2-5102-4e5d-8f1d-2b63c0aefcb3'; /* WAS: 'new-6aced172-c48a-4698-b3c6-f1a820b5428b' */
    $data['ting_object_panel_context']->conf['display']->panels['attachment_1_1']['4'] = 'new-6aced172-c48a-4698-b3c6-f1a820b5428b'; /* WAS: 'new-2c6af9c6-63ae-4100-9b56-e3b1bee1ce9a' */
    $data['ting_object_panel_context']->conf['display']->panels['attachment_1_1']['5'] = 'new-2c6af9c6-63ae-4100-9b56-e3b1bee1ce9a'; /* WAS: 'new-0ff7e4a6-1810-4de9-84d4-fda87404376a' */
    $data['ting_object_panel_context']->conf['display']->panels['attachment_1_1']['6'] = 'new-0ff7e4a6-1810-4de9-84d4-fda87404376a'; /* WAS: '' */
    unset($data['ting_object_panel_context']->conf['display']->storage_id);
    unset($data['ting_object_panel_context']->conf['display']->storage_type);
  }
}

/**
 * Implements hook_default_page_manager_pages_alter().
 */
function ting_recommender_default_page_manager_pages_alter(&$data) {
  if (isset($data['user_loans'])) {
    $data['user_loans']->default_handlers['page_user_loans_panel_context']->conf['display']->content['new-25838571-8539-423d-88a5-158c6d88bf36'] = (object) array(
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
        ); /* WAS: '' */
    $data['user_loans']->default_handlers['page_user_loans_panel_context']->conf['display']->panels['left_sidebar']['2'] = 'new-25838571-8539-423d-88a5-158c6d88bf36'; /* WAS: '' */
  }
  if (isset($data['user_reservations'])) {
    $data['user_reservations']->default_handlers['page_user_reservations_panel_context']->conf['display']->content['new-d8d0e668-25f7-4d70-84f6-49996897aa17'] = (object) array(
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
        ); /* WAS: '' */
    $data['user_reservations']->default_handlers['page_user_reservations_panel_context']->conf['display']->panels['left_sidebar']['2'] = 'new-d8d0e668-25f7-4d70-84f6-49996897aa17'; /* WAS: '' */
  }
}
