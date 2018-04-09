import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types'
=======
>>>>>>> 1e8970379ee5d1fff80b86fb4a124df302c56f94
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes,
} from 'react-native';

export default class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.onActionsPress = this.onActionsPress.bind(this);
  }

  onActionsPress() {
    const options = Object.keys(this.props.options);
    const cancelButtonIndex = Object.keys(this.props.options).length - 1;
    this.context.actionSheet().showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      tintColor: this.props.optionTintColor
    },
    (buttonIndex) => {
      let i = 0;
      for (let key in this.props.options) {
        if (this.props.options.hasOwnProperty(key)) {
          if (buttonIndex === i) {
            this.props.options[key](this.props);
            return;
          }
          i++;
        }
      }
    });
  }

  renderIcon() {
    if (this.props.icon) {
      return this.props.icon();
    }
    return (
      <View
        style={[styles.wrapper, this.props.wrapperStyle]}
      >
        <Text
          style={[styles.iconText, this.props.iconTextStyle]}
        >
          +
        </Text>
      </View>
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={this.props.onPressActionButton || this.onActionsPress}
      >
        {this.renderIcon()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

Actions.contextTypes = {
<<<<<<< HEAD
  actionSheet: PropTypes.func,
=======
  actionSheet: React.PropTypes.func,
>>>>>>> 1e8970379ee5d1fff80b86fb4a124df302c56f94
};

Actions.defaultProps = {
  onSend: () => {},
  options: {},
  optionTintColor: '#007AFF',
  icon: null,
  containerStyle: {},
  iconTextStyle: {},
};

Actions.propTypes = {
<<<<<<< HEAD
  onSend: PropTypes.func,
  options: PropTypes.object,
  optionTintColor: PropTypes.string,
  icon: PropTypes.func,
  onPressActionButton: PropTypes.func,
=======
  onSend: React.PropTypes.func,
  options: React.PropTypes.object,
  optionTintColor: React.PropTypes.string,
  icon: React.PropTypes.func,
  onPressActionButton: React.PropTypes.func,
>>>>>>> 1e8970379ee5d1fff80b86fb4a124df302c56f94
  containerStyle: ViewPropTypes.style,
  iconTextStyle: Text.propTypes.style,
};
