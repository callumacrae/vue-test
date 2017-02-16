import attribute from './plugin-fns/attribute';
import className from './plugin-fns/className';
import empty from './plugin-fns/empty';
import fragment from './plugin-fns/fragment';
import match from './plugin-fns/match';
import selector from './plugin-fns/selector';
import tag from './plugin-fns/tag';
import text from './plugin-fns/text';
import value from './plugin-fns/value';

/**
 * Shortcut to add all plugins.
 */
export default function chaiPlugin(chai) {
  Object.keys(plugins).forEach((plugin) => {
    chai.use(plugins[plugin]);
  });
}

export const plugins = {
  attribute, className, empty, fragment, match, selector, tag, text, value
};
