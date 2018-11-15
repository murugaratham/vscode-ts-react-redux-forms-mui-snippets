import * as React from 'react';
import { compose } from 'redux';
import { Theme, withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import { InjectedTranslateProps, translate } from 'react-i18next';

const styles = (theme: Theme) =>
  createStyles({
    // custom JSS
  });

interface IComponentNameProps {
  // props
}

interface IComponentNameState {
  // state
}

type IComponentNamePropsWithStyle = IComponentNameProps & InjectedTranslateProps & WithStyles<typeof styles>;

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  constructor(props: IComponentNamePropsWithStyle) {
    super(props);

    this.state = {
      // state
    };
    // event binding
  }

  public render() {
    const { t, classes } = this.props;
    return <span>Body</span>;
  }
}

export default compose(
  withStyles,
  translate
)(ComponentName);
