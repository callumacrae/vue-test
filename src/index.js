import MountedComponent from './MountedComponent';

export default function mount(TestComponent, props) {
  const mounted = new MountedComponent();
  mounted._init(TestComponent, props);
  return mounted;
}
