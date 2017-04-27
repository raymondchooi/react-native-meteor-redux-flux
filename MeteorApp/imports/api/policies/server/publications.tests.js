// Tests for the policies publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import { Policies } from '../policies.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('policies publications', function () {
  beforeEach(function () {
    Policies.remove({});
    Policies.insert({
      title: 'Travel',
      insurer: 'ERB',
      annualCost: 84.56,
      createdAt: new Date(),
    });
  });

  describe('policies.all', function () {
    it('sends all policies', function (done) {
      const collector = new PublicationCollector();
      collector.collect('policies.all', (collections) => {
        assert.equal(collections.policies.length, 1);
        done();
      });
    });
  });
});
