// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Policies } from '../../api/policies/policies.js';

Meteor.startup(() => {
  // if the Policiess collection is empty
  if (Policies.find().count() === 0) {
    const data = [
      {
        title: 'Travel',
        insurer: 'ERB',
        annualCost: 84.56,
        createdAt: new Date(),
      },
      {
        title: 'Contents Only',
        insurer: 'Direct Dine',
        annualCost: 380.06,
        createdAt: new Date(),
      },
      {
        title: 'Motor',
        insurer: 'Alliant',
        annualCost: 893.46,
        createdAt: new Date(),
      },
      {
        title: 'Pet',
        insurer: 'MORE TH>N',
        annualCost: 452.33,
        createdAt: new Date(),
      },
      {
        title: 'Life',
        insurer: 'Avivoo',
        annualCost: 269.42,
        createdAt: new Date(),
      },
    ];

    data.forEach(policies => Policies.insert(policies));
  }
});
