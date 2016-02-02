import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import themeDecorator from 'material-ui/lib/styles/theme-decorator';
import colors from 'material-ui/lib/styles/colors';
import React from 'react';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.green500,
    primary2Color: colors.green700,
    primary3Color: colors.green100,
  },
}, {
  avatar: {
    borderColor: null,
  }
});

class Main extends React.Component {
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

export default themeDecorator(muiTheme)(Main)
