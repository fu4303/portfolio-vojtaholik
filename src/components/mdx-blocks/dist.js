"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tags = exports.Styled = exports.Tiles = exports.Split = exports.Content = exports.Columns = exports.Center = exports.Cards = exports.Banner = exports.Bar = exports.chunkElements = exports.getImageSource = exports.getNonImages = exports.getImages = exports.isImage = exports.isHeading = exports.getType = exports.Block = exports.Box = exports.BlocksProvider = exports.MDXStyle = exports.Root = exports.mergeThemes = exports.mergeComponents = exports.components = exports.theme = exports.system = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _emotionTheming = require("emotion-theming");

var _tag = require("@mdx-js/tag");

var _styledSystem = require("styled-system");

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _lodash2 = _interopRequireDefault(require("lodash.omit"));

var _lodash3 = _interopRequireDefault(require("lodash.pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var systemProps = ['theme', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'color', 'bg', 'backgroundColor'];

var css = function css(props) {
  return (0, _lodash2.default)(props, systemProps);
};

var sx = (0, _styledSystem.compose)(css, _styledSystem.space, _styledSystem.color, _styledSystem.fontFamily, _styledSystem.fontSize, _styledSystem.fontWeight, _styledSystem.lineHeight);

var filterEmpty = function filterEmpty(n) {
  return Object.keys(n).length > 0;
}; // recursively merges styled-system props and style objects


var system = function system(style) {
  return function (props) {
    // handle usage in styled components & in css prop
    var theme = props.theme || props;
    var styleProps = (0, _lodash3.default)(props, systemProps);

    var styles = _toConsumableArray(sx(_objectSpread({
      theme: theme
    }, style, styleProps)));

    for (var key in style) {
      var val = style[key];
      if (!val || _typeof(val) !== 'object') continue;
      styles.push(_defineProperty({}, key, system(val)(props)));
    }

    return styles.filter(Boolean).filter(filterEmpty);
  };
}; // base theme


exports.system = system;
var theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    highlight: '#e40',
    muted: '#fafafe'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96, 128],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  maxWidths: {
    container: 1024
  } // base components

};
exports.theme = theme;

var div = _styled.default.div(system());

var a = _styled.default.a(system({
  color: 'primary',
  textDecoration: 'none',
  '&:hover': {
    color: 'secondary',
    textDecoration: 'underline'
  }
})); // <a title='button'> or [](/ 'button') is converted to this component


var button = _styled.default.a(system({
  display: 'inline-block',
  alignSelf: 'center',
  textDecoration: 'none',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'primary',
  borderRadius: 6,
  '&:hover': {
    bg: 'secondary'
  }
}));

var img = _styled.default.img({
  maxWidth: '100%',
  height: 'auto'
});

var heading = function heading(tag, styles) {
  return (0, _styled.default)(tag)(system(_objectSpread({
    fontFamily: 'heading',
    fontWeight: 'heading',
    lineHeight: 'heading'
  }, styles)));
};

var h1 = heading('h1', {
  fontSize: 6
});
var h2 = heading('h2', {
  fontSize: 5
});
var h3 = heading('h3', {
  fontSize: 4
});
var h4 = heading('h4', {
  fontSize: 3
});
var h5 = heading('h5', {
  fontSize: 2
});
var h6 = heading('h6', {
  fontSize: 1
});

var code = _styled.default.code(system({
  fontFamily: 'monospace'
}));

var inlineCode = _styled.default.code(system({
  fontFamily: 'monospace'
}));

var pre = _styled.default.pre(system({
  fontFamily: 'monospace',
  p: 3,
  overflowX: 'auto'
}));

var components = {
  div: div,
  a: a,
  button: button,
  img: img,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  code: code,
  pre: pre,
  inlineCode: inlineCode
};
exports.components = components;
var defaults = {
  components: components,
  theme: theme
};

var createButtonLink = function createButtonLink(Link, Button) {
  return function (_ref) {
    var title = _ref.title,
        props = _objectWithoutProperties(_ref, ["title"]);

    return title === 'button' ? _react.default.createElement(Button, props) : _react.default.createElement(Link, _extends({
      title: title
    }, props));
  };
};

var mergeComponents = function mergeComponents() {
  for (var _len = arguments.length, overrides = new Array(_len), _key = 0; _key < _len; _key++) {
    overrides[_key] = arguments[_key];
  }

  return function () {
    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var components = _objectSpread({}, defaults.components, base);

    overrides.forEach(function (obj) {
      for (var _key2 in obj) {
        // const Component = base[key] || key
        var override = obj[_key2];
        if (!override) continue;

        if (typeof override === 'function' || override.$$typeof && override.render) {
          if (components[_key2].withComponent) {
            components[_key2] = components[_key2].withComponent(override);
          } else {
            components[_key2] = (0, _styled.default)(override)(system({}));
          }
        } else if (_typeof(override) === 'object') {
          components[_key2] = (0, _styled.default)(components[_key2] || _key2)(system(override));
        }
      }
    });
    components.a = createButtonLink(components.a || 'a', components.button || components.a || 'a');
    return components;
  };
};

exports.mergeComponents = mergeComponents;

var mergeThemes = function mergeThemes() {
  for (var _len2 = arguments.length, overrides = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
    overrides[_key3] = arguments[_key3];
  }

  return function (base) {
    return _lodash.default.apply(void 0, [{}, defaults.theme, base].concat(overrides));
  };
};

exports.mergeThemes = mergeThemes;

var Root = _styled.default.div(system({
  fontFamily: 'body',
  lineHeight: 'body',
  color: 'text',
  bg: 'background'
}));

exports.Root = Root;

var MDXStyle = function MDXStyle(_ref2) {
  var _ref2$components = _ref2.components,
      components = _ref2$components === void 0 ? {} : _ref2$components,
      _ref2$baseComponents = _ref2.baseComponents,
      baseComponents = _ref2$baseComponents === void 0 ? {} : _ref2$baseComponents,
      _ref2$theme = _ref2.theme,
      theme = _ref2$theme === void 0 ? {} : _ref2$theme,
      props = _objectWithoutProperties(_ref2, ["components", "baseComponents", "theme"]);

  return _react.default.createElement(_emotionTheming.ThemeProvider, {
    theme: mergeThemes(theme)
  }, _react.default.createElement(_tag.MDXProvider, {
    components: mergeComponents(baseComponents, components)
  }, props.children));
};

exports.MDXStyle = MDXStyle;

var BlocksProvider = function BlocksProvider(_ref3) {
  var baseComponents = _ref3.baseComponents,
      components = _ref3.components,
      theme = _ref3.theme,
      props = _objectWithoutProperties(_ref3, ["baseComponents", "components", "theme"]);

  return _react.default.createElement(MDXStyle, {
    theme: theme,
    baseComponents: baseComponents,
    components: components
  }, _react.default.createElement(Root, props));
};

exports.BlocksProvider = BlocksProvider;

var Box = _styled.default.div({
  boxSizing: 'border-box',
  minWidth: 0
}, _styledSystem.space, _styledSystem.color, _styledSystem.width, _styledSystem.maxWidth, _styledSystem.fontSize, _styledSystem.fontFamily, _styledSystem.fontWeight, _styledSystem.lineHeight, function (props) {
  return props.css;
});

exports.Box = Box;

var Block = function Block(_ref4) {
  var baseComponents = _ref4.baseComponents,
      components = _ref4.components,
      props = _objectWithoutProperties(_ref4, ["baseComponents", "components"]);

  return _react.default.createElement(MDXStyle, {
    baseComponents: baseComponents,
    components: components
  }, _react.default.createElement(Box, _extends({
    "data-block": true
  }, props)));
}; // util


exports.Block = Block;
var PROP = 'mdxType';

var getType = function getType(el) {
  return el.props[PROP];
};

exports.getType = getType;

var isHeading = function isHeading(tag) {
  return /^h[1-6]/.test(tag);
};

exports.isHeading = isHeading;

var isImage = function isImage(el) {
  return getType(el) === 'img' || el.type === 'img';
};

exports.isImage = isImage;

var getImages = function getImages(children) {
  return _react.default.Children.toArray(children).filter(isImage);
};

exports.getImages = getImages;

var getNonImages = function getNonImages(children) {
  return _react.default.Children.toArray(children).filter(function (el) {
    return !isImage(el);
  });
};

exports.getNonImages = getNonImages;

var getImageSource = function getImageSource(children) {
  var _getImages = getImages(children),
      _getImages2 = _slicedToArray(_getImages, 1),
      img = _getImages2[0];

  if (!img) return;
  return img.props.src;
};

exports.getImageSource = getImageSource;

var chunkElements = function chunkElements(test) {
  return function (children) {
    var elements = _react.default.Children.toArray(children);

    var indices = [0];
    var chunks = [];
    elements.forEach(function (el, i) {
      var type = el.props[PROP];
      if (test(type)) indices.push(i);
    });
    indices.forEach(function (a, i) {
      var b = indices[i + 1];
      var children = elements.slice(a, b);
      if (!children.length) return;
      chunks.push(children);
    });
    return chunks;
  };
}; // layout components


exports.chunkElements = chunkElements;

var Bar = function Bar(_ref5) {
  var children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["children"]);

  return _react.default.createElement(Block, _extends({}, props, {
    "data-bar": true,
    css: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    baseComponents: {
      h1: {
        m: 0,
        fontSize: 'inherit'
      },
      ul: {
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        m: 0,
        p: 0
      },
      li: {
        display: 'flex'
      },
      a: {
        p: 3,
        m: 0,
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
          color: 'inherit'
        }
      },
      button: {
        mx: 3
      }
    }
  }), children);
};

exports.Bar = Bar;

var getBannerBackground = function getBannerBackground(_ref6) {
  var _ref6$darken = _ref6.darken,
      darken = _ref6$darken === void 0 ? 0.75 : _ref6$darken,
      children = _ref6.children;
  var src = getImageSource(children);
  return {
    backgroundImage: ["linear-gradient(rgba(0, 0, 0, ".concat(darken / 4, "), rgba(0, 0, 0, ").concat(darken, "))"), "url(".concat(src, ")")].join(', ')
  };
};

var Banner = function Banner(props) {
  return _react.default.createElement(Block, _extends({
    pt: 5,
    pb: 5
  }, props, {
    "data-banner": true,
    css: _objectSpread({}, getBannerBackground(props), {
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    })
  }), _react.default.createElement(Box, {
    maxWidth: "container",
    mx: "auto",
    pl: 4,
    pr: 4
  }, getNonImages(props.children)));
};

exports.Banner = Banner;

var Cards = function Cards(_ref7) {
  var _ref7$widths = _ref7.widths,
      widths = _ref7$widths === void 0 ? [1, 1 / 2] : _ref7$widths,
      children = _ref7.children,
      _ref7$tag = _ref7.tag,
      tag = _ref7$tag === void 0 ? 'img' : _ref7$tag,
      props = _objectWithoutProperties(_ref7, ["widths", "children", "tag"]);

  return _react.default.createElement(Block, _extends({}, props, {
    "data-cards": true
  }), _react.default.createElement(Box, {
    maxWidth: "container",
    mx: "auto",
    css: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, chunkElements(function (el) {
    return el === tag;
  })(children).map(function (chunk, i) {
    return _react.default.createElement(Box, {
      key: i,
      width: widths,
      p: 4
    }, chunk);
  })));
};

exports.Cards = Cards;

var Center = function Center(props) {
  return _react.default.createElement(Block, _extends({
    p: 4
  }, props, {
    "data-center": true,
    css: {
      textAlign: 'center'
    }
  }));
};

exports.Center = Center;

var Columns = function Columns(_ref8) {
  var children = _ref8.children,
      props = _objectWithoutProperties(_ref8, ["children"]);

  return _react.default.createElement(Block, _extends({}, props, {
    "data-columns": true,
    baseComponents: {
      ul: {
        listStyle: 'none',
        padding: 0,
        margin: 0
      }
    }
  }), _react.default.createElement(Box, {
    maxWidth: "container",
    mx: "auto",
    css: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, _react.default.Children.toArray(children).map(function (child, i) {
    return _react.default.createElement(Box, {
      key: i,
      width: [1, 1 / children.length],
      p: 4
    }, child);
  })));
};

exports.Columns = Columns;

var Content = function Content(_ref9) {
  var children = _ref9.children,
      props = _objectWithoutProperties(_ref9, ["children"]);

  return _react.default.createElement(Block, _extends({
    "data-content": true
  }, props), _react.default.createElement(Box, {
    maxWidth: "container",
    mx: "auto",
    p: 4
  }, children));
};

exports.Content = Content;

var Split = function Split(_ref10) {
  var children = _ref10.children,
      props = _objectWithoutProperties(_ref10, ["children"]);

  return _react.default.createElement(Block, _extends({}, props, {
    "data-split": true
  }), _react.default.createElement(Box, {
    maxWidth: "container",
    mx: "auto",
    css: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, _react.default.createElement(Box, {
    p: 4,
    width: [1, 1 / 2, 2 / 5]
  }, getNonImages(children)), _react.default.createElement(Box, {
    p: 4,
    width: [1, 1 / 2, 3 / 5]
  }, getImages(children))));
};

exports.Split = Split;

var Tiles = function Tiles(_ref11) {
  var _ref11$widths = _ref11.widths,
      widths = _ref11$widths === void 0 ? [1, 1 / 2] : _ref11$widths,
      children = _ref11.children,
      props = _objectWithoutProperties(_ref11, ["widths", "children"]);

  return _react.default.createElement(Block, _extends({}, props, {
    "data-tiles": true
  }), _react.default.createElement(Box, {
    mx: "auto",
    maxWidth: "container",
    css: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, chunkElements(isHeading)(children).map(function (chunk, i) {
    return _react.default.createElement(Box, {
      key: i,
      p: 4,
      width: widths
    }, chunk);
  })));
}; // functional layouts


exports.Tiles = Tiles;

var toFunction = function toFunction(Component) {
  return function (defaults) {
    return function (_ref12) {
      var children = _ref12.children,
          props = _objectWithoutProperties(_ref12, ["children"]);

      return _react.default.createElement(Component, _extends({}, (0, _lodash.default)({}, defaults, props), {
        children: children
      }));
    };
  };
};

Bar.props = toFunction(Bar);
Banner.props = toFunction(Banner);
Cards.props = toFunction(Cards);
Center.props = toFunction(Center);
Columns.props = toFunction(Columns);
Content.props = toFunction(Content);
Split.props = toFunction(Split);
Tiles.props = toFunction(Tiles); // primitive components
// can be used outside of an MDX file
// but still retain the theme styles

var Styled = _react.default.forwardRef(function (_ref13, ref) {
  var _ref13$as = _ref13.as,
      as = _ref13$as === void 0 ? 'div' : _ref13$as,
      props = _objectWithoutProperties(_ref13, ["as"]);

  var components = (0, _tag.useMDXComponents)();
  var tag = components[as] || 'div';
  return _react.default.createElement(tag, _objectSpread({}, props, {
    ref: ref
  }));
});

exports.Styled = Styled;
var tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'img', 'a', 'blockquote', 'pre', 'code', 'inlineCode', 'button', 'div'];
exports.tags = tags;
tags.forEach(function (tag) {
  Styled[tag] = _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(Styled, _extends({
      ref: ref,
      as: tag
    }, props));
  });
}); // todo
// - [ ] MediaObjects layout
