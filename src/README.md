
# Packaged HTML Template

This is a template for how one might package a scientific story, including
interactive graphics and mathematics mathematics, into a stand-alone HTML file.

This is a step towards more accessible and interactive scientific publishing
using modern digital media, that will hopefully one day replace the static
formats inspired by ancient medium of print.


## Features

### Markdown

Document are written using markdown.

### Math

Typesetting of mathematics is supported through MathJax.  However, to reduce
the file size and prevent web-access all mathematics is converted to SVG, and
so does not provide the usual functionality.

To use inline mathematics LaTeX math-mode is accessible use \ ( and \ ),
without spaces: \(x^2 - 3 = 0\).  To insert display math use \ [ and  \ ],
without spaces

  \[ \int_{-\infty}^5 \phi^4 d\phi \]

Todo:
 - correct escaping: it is currently impossible to type \ [ and \ ] directly
   without spaces.


### Figures using Vega-Lite

Vega-lite can be used to embed figures

<div id="vega-example"></div>

## Future Features

### Citations & References (hyperlinks)

## Caveats

### Compatibility

The shareability of the html file depends greatly on the technologies used in
the html file and their compatibility with common web browsers.  To ensure
compatibility all code should be converted to compatible versions, and all used
packages should be included in the file itself.  For example, if a document 
uses the d3 library for visualization, all used d3 code should be included 
inline in the html document.  The document may not rely on web-access.


## Related Projects

### Jupyter, ObservableHQ, and other notebooks

These notebooks integrate code and story, and are an excellent extension of the
literate programming paradigm.  These projects enhance reproducibility.
However, they are not aimed at optimally presenting established results.  For
example, I doubt that code is commonly required to understand the made
diagrams.

Additionally, these tools often require some sort of reader to display their
files.  Jupyter notebook requires a rather elaborate python installation, and
ObservableHQ is hosted on the web.  These options are less shareable than a PDF
file, because none of those readers are as common as a PDF reader.  A web
browser, however, is as, if not more common than a PDF reader, and therefore
a suitable candidate for a ubiquitous format.

