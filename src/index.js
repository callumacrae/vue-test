import MountedComponent from './MountedComponent';

export function mount(TestComponent, props) {
  const mounted = new MountedComponent();
  mounted._init(TestComponent, props);
  return mounted;
}
