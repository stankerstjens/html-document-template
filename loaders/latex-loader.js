"use strict";

const
  loaderUtils = require( "loader-utils" ),
  { mathjax } = require("mathjax-full/js/mathjax.js"),
  { TeX } = require("mathjax-full/js/input/tex.js"),
  { SVG } = require("mathjax-full/js/output/svg.js"),
  { liteAdaptor } = require("mathjax-full/js/adaptors/liteAdaptor.js"),
  { RegisterHTMLHandler } = require("mathjax-full/js/handlers/html.js"),
  { AllPackages } = require( "mathjax-full/js/input/tex/AllPackages.js" )
;

function escapeRegex ( s ) {
  return s.replace( /[^A-Za-z0-9_]/g, "\\$&" );
}

module.exports = function ( source ) {

  const
    options = loaderUtils.getOptions( this ),
    adaptor = liteAdaptor(),
    handler = RegisterHTMLHandler( adaptor ),
    tex = new TeX({ packages: AllPackages }),
    svg = new SVG({ }),
    html = mathjax.document('', { InputJax: tex, OutputJax: svg });

  let
    displayMath = [[ "\\[", "\\]" ]],
    inlineMath = [[ "\\(", "\\)" ]];

  if ( options && options.displayMath )
    displayMath = options.displayMath;
  if ( options && options.inlineMath )
    inlineMath = options.inlineMath;

  const math = displayMath.concat( inlineMath );

  for ( var i = 0; i < math.length; ++i ) {
    const
      [begin, end] = math[i].map( escapeRegex ),
      exp = `${begin}([^]*?)${end}`,
      re = new RegExp(exp, "g"),
      re2 = new RegExp(`^${begin}|${end}$`, "g");

    source = source.replace( re, ( match ) => {
      return adaptor.outerHTML( html.convert( match.replace( re2, "" ), {
        display: i < displayMath.length
      } ) )
    });
  }

  this.cacheable();
  return source;
}
