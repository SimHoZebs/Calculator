import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    // A common use case is scanning files from the root directory
    include: ['**/*.{html,tsx}'],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', '.next', 'public'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "roboto": ['Roboto', 'system-ui']
      }
    }
  },
});