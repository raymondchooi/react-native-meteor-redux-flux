import React, { PropTypes } from 'react';
import { ScrollView } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';

class PolicyList extends Component {
  renderRow(policy) {
    return (
      <Text>{Policy.title}</Text>
    );
  }
  render() {
    const { settings, policiesReady } = this.props;

    <View>
      <Text>{settings.title}</Text>
        {!policiessReady && <Text>Loading Policies</Text>}

        <ScrollView
          selector={{done: true}}
          options={{sort: {createdAt: -1}}}
          renderRow={this.renderRow}
        />
    </View>

  }
}

export default createContainer(params=>{
  const handle = Meteor.subscribe('policies');
  Meteor.subscribe('settings');

  return {
    policiesReady: handle.ready(),
    settings: Meteor.collection('settings').findOne()
  };
}, PolicyList)
