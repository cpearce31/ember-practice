import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index')

test('should transition to rentals route', function(assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'rentals', 'replace with a route named rentals')
    }
  })
  route.beforeModel();
})
