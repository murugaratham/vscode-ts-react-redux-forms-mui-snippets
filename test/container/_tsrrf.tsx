import { connect } from 'react-redux';
import { compose, Action, Dispatch } from 'redux';
import { reduxForm, ConfigProps } from 'redux-form';

const reduxFormConfig: ConfigProps = {
  form: '', // Redux form id
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  enableReinitialize: false,
};

interface IComponentNameOwnProps {
  // own props
}

const mapStateToProps = (state: IApplicationState, ownProps: IComponentNameOwnProps): IComponentNameStateProps => {
  return {
    // ...mapStateToProps
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IComponentNameOwnProps): IComponentNameDispatchProps => {
  return {
    // ...mapDispatchToProps
  };
};

export default compose<React.ComponentType<IComponentNameOwnProps>>(
  connect<IComponentNameStateProps, IComponentNameDispatchProps, IComponentNameOwnProps, IApplicationState>(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm(reduxFormConfig)
)(ComponentName);
