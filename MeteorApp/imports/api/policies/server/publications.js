// All policies-related publications

import { Meteor } from 'meteor/meteor';
import { Policies } from '../policies.js';

Meteor.publish('policies.all', function () {
  return Policies.find();
});
