// Tests for the behavior of the policies collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Policies } from './policies.js';

if (Meteor.isServer) {
  describe('policies collection', function () {
    it('insert correctly', function () {
      const policyId = Policies.insert({
        title: 'meteor homepage',
        url: 'https://www.meteor.com',
      });
      const added = Policies.find({ _id: policyId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'policies');
      assert.equal(count, 1);
    });
  });
}
