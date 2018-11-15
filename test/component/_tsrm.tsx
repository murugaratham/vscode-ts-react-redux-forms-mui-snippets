import * as React from 'react';
import { compose } from 'redux';
import { Theme, withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    // custom JSS
  });

interface IComponentNameProps {}

interface IComponentNameState {}

type IComponentNamePropsWithStyle = IComponentNameProps & WithStyles<typeof styles>;

class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
  constructor(props: IComponentNamePropsWithStyle) {
    super(props);

    this.state = {
      // state
    };
    // event binding
  }

  public render() {
    const { classes } = this.props;
    return <span>Body</span>;
  }
}

export default compose(withStyles)(ComponentName);
