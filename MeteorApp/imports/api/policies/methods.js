// Methods related to policies

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Policies } from './policies.js';

Meteor.methods({
  'policies.insert'(title, insurer, annualCost) {
    check(title, String);
    check(insurer, String);
    check(annualCost, Number);

    return Policies.insert({
      title,
      insurer,
      annualCost,
      createdAt: new Date(),
    });
  },
});
