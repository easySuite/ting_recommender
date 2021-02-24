# ting_recommender

Add the panel Ting->Ting Recommender to the object display in /admin/structure/pages/edit/ting_object

Use #ting-recommender as placement container in the bibspire admin interface.

## The widget:
Because on EasyOPAC instances we need some customizations to be done, was decided
to use the local variant of Bibspire widget (https://cdn.bibspire.dk/ddbcms.js) so
the source code of the widget was implemented into present module (original repo: https://gitlab.com/bibspire/bibspire-widget).

In our case file `js/widget/recommender.js` is being attached to the Ting Recommender panel pane and make asynchronous request
to external service for fetching recommendation items and render those.

### Usage:
The widget script is automatically added to the needed pages with Ting Recommender panel pane.

### Development:
1. Before any actions run `npm install` from the `src/` directory.
2. Do needed changes in code files.
3. Run `npm run deploy` to have `recommender.js` file compiled. The `recommender.js` file will be automatically placed
in `js/widget` directory from where this is served.
