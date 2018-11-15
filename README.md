# VSCode-Typescript-React-Redux-forms-MUI-Snippets

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.png?style=flat)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.png)](https://opensource.org/licenses/MIT)

Typescript, React, Redux and Material-UI snippets for VSCode.

Assuming you have a React app written in Typescript and using redux for state management, redux-form for forms _duh_, Material-UI for designs. This extension will increase your productivity and save time from typing repetitive scaffoldable codes.

![Alt text](https://raw.githubusercontent.com/murugaratham/vscode-ts-react-redux-forms-mui-snippets/master/images/demo.gif 'Demo')

## Snippets

### Components

- **\_tsrsfc** : basic typescript SFC template

  ```tsx
  import * as React from 'react';

  export interface StatelessProps {
    // props
  }

  const Stateless: React.SFC<StatelessProps> = props => {
    // const { props } = props;
    return <span>Body</span>;
  };

  export default Stateless;
  ```

- **\_tsr** : basic typescript react component template

  ```tsx
  import * as React from 'react';

  interface IComponentNameProps {
    // props
  }

  interface IComponentNameState {
    // state
  }

  export default class ComponentName extends React.Component<IComponentNameProps, IComponentNameState> {
    public render() {
      return <span>Body</span>;
    }
  }
  ```

- **\_tsrm** : typescript react component with MUI template

  ```tsx
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
  ```

- **\_tsrri18** : typescript react redux template with i18n support

  ```tsx
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
  ```

### Containers

- **\_tsrr\_** : basic typescript react redux container template

```tsx
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
```

- **\_tsrrf\_**: typescript react redux redux-form container template

```tsx
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
```

### Life cycle

- **\_con** : constructor

  ```tsx
  constructor(props: IComponentNameProps) {
    super(props);

  }
  ```

- **\_cwm** : componentDidMount

  ```tsx
  public componentDidMount() {

  }
  ```

- **\_cdm** : shouldComponentUpdate

  ```tsx
  public shouldComponentUpdate(prevProps: Readonly<IComponentNameProps>, prevState: Readonly<IComponentNameState>): boolean {

    return true;
  }
  ```

- **\_gssbu** : getSnapshotBeforeUpdate

  ```tsx
  public getSnapshotBeforeUpdate(prevProps: Readonly<IComponentNameProps>, prevState: Readonly<IComponentNameState>) {

    return null;
  }
  ```

- **\_cdc** : componentDidCatch

  ```tsx
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //
  }
  ```

- **\_gdsfp** : getDerivedStateFromProps

  ```tsx
  static getDerivedStateFromProps(nextProps: Readonly<IComponentNameProps>, prevState: IComponentNameState): Partial<IComponentNameState> {

    return {
      // derive your state here
    }
  }
  ```

- **\_cdup** : componentDidUpdate

  ```tsx
  public componentDidUpdate(prevProps: IComponentNameProps, prevState: IComponentNameState) {
    //
  }
  ```

- **\_cwun** : componentWillUnmount

  ```tsx
  public componentWillUnmount() {

  }
  ```

## Install

Go to vscode extensions tab
Click elipsis, install from VSIX

## Development

```bash
npm i vsce -g
cd ~/.vscode/extensions
git clone
cd vscode-typescript-react-redux-MUI-snippets
vsce package
```
