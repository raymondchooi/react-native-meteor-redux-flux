import { Policies } from '/imports/api/policies/policies.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
  Meteor.subscribe('policies.all');
});

Template.info.helpers({
  policies() {
    return Policies.find({});
  },
});

Template.info.events({
  'submit .info-policy-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('policies.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
