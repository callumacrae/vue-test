/**
 * Shortcut to add all plugins.
 */
export default function chaiPlugin(chai) {
  Object.keys(plugins).forEach((plugin) => {
    chai.use(plugins[plugin]);
  });
}

export const plugins = {
  attribute: require('./plugin-fns/attribute').default,
  className: require('./plugin-fns/className').default,
  empty: require('./plugin-fns/empty').default,
  fragment: require('./plugin-fns/fragment').default,
  match: require('./plugin-fns/match').default,
  selector: require('./plugin-fns/selector').default,
  tag: require('./plugin-fns/tag').default,
  text: require('./plugin-fns/text').default,
  value: require('./plugin-fns/value').default
};
