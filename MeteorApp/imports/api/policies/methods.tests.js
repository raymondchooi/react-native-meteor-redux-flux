// Tests for policies methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Policies } from './policies.js';
import './methods.js';

if (Meteor.isServer) {
  describe('policies methods', function () {
    beforeEach(function () {
      Policies.remove({});
    });

    it('can add a new policy', function () {
      const addPolicy = Meteor.server.method_handlers['policies.insert'];

      addPolicy.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Policies.find().count(), 1);
    });
  });
}
