constructor(props: IComponentNameProps) {
  super(props);
  
}

public componentDidMount() {
  
}

public shouldComponentUpdate(prevProps: Readonly<IComponentNameProps>, prevState: Readonly<IComponentNameState>): boolean {
  
  return true;
}

public getSnapshotBeforeUpdate(prevProps: Readonly<IComponentNameProps>, prevState: Readonly<IComponentNameState>) {
  
  return null;
}

public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  // 
}

static getDerivedStateFromProps(nextProps: Readonly<IComponentNameProps>, prevState: IComponentNameState): Partial<IComponentNameState> {
  
  return {
    // derive your state here
  }
}

public componentDidUpdate(prevProps: IComponentNameProps, prevState: IComponentNameState) {
  // 
}

public componentWillUnmount() {
  
}

