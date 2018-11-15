import { connect } from 'react-redux';
import { compose, Action, Dispatch } from 'redux';

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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ComponentName);
