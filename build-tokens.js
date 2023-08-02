const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');

const baseSize = 16; // px

// REGISTER THE CUSTOM TRANSFORMS
//
StyleDictionary.registerTransform({
  name: 'size/rem',
  type: 'value',
  matcher: function (token) {
    return token.name.indexOf('-size-') !== -1;
  },
  transformer: function (token) {
    return `${token.value / baseSize}rem`;
  }
});

const refTokenRegex = new RegExp('^{.+}$');
StyleDictionary.registerTransform({
  name: 'ref/token',
  transitive: true,
  type: 'value',
  matcher: function (token) {
    return refTokenRegex.test(token.original.value);
  },
  transformer: function (token) {
    return `var(--${token.original.value.replaceAll('.', '-').replace('{', '').replace('}', '')})`;
  }
});

StyleDictionary.registerFilter({
  name: 'isRefToken',
  matcher: function (token) {
    return refTokenRegex.test(token.original.value);
  }
});

StyleDictionary.registerTransformGroup({
  name: 'custom/web',
  transforms: ['attribute/cti', 'name/cti/kebab', 'color/css', 'size/rem', 'ref/token']
});

// StyleDictionary.registerTransformGroup({
//   name: 'custom/scss',
//   // this is to show one possibility for adding a few transforms to a pre-defined group
//   // (however, we suggest to use the previous approach, which is more explicit and clear)
//   transforms: StyleDictionary.transformGroup['scss'].concat(['size/px', 'ratio/%'])
// });


// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration

const getConfig = (theme, filesConfig) => ({
    "source": [
      "tokens/common.json",
      `tokens/${theme}.json`
    ],
    "platforms": {
      "web": {
        "transformGroup": "custom/web",
        "buildPath": "build/tokens/",
        "files": [
          {
            "destination": `m3.${theme}.tokens.scss`,
            "format": "css/variables",
            ...filesConfig
          }
        ]
      }
    }
  }
);

['dark', 'light', 'common'].forEach(theme => {
  const StyleDictionaryExtended = StyleDictionary.extend(
    getConfig(theme, theme === 'common' ? {} : {"filter": "isRefToken"})
  );
// FINALLY, BUILD ALL THE PLATFORMS
  StyleDictionaryExtended.buildAllPlatforms();
});


console.log('\n==============================================');
console.log('\nBuild completed!');
