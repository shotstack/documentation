---
title: HTML Support
description: Supported HTML tags and CSS properties and selectors
---

Shotstack supports basic HTML rendering which is useful for styling text and some table based layouts. It is based on a
subset of HTML4 and CSS 2.1.

The HTML asset clip can have its [bounding box](https://shotstack.io/docs/api/#tocshtmlasset) size set \(i.e. 400px x
200px\) and can be positioned anywhere on screen using the [position and
offset](https://shotstack.io/docs/api/#tocsclip) parameters.

Advanced features of HTML5 such as CSS animations or absolute/relative positioning is not supported at this time. Images
are also not currently supported.

### Supported HTML Tags

| Tag          | Description                     | Comment                                                                                                                                             |
| :----------- | :------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| `b`          | Bold                            |                                                                                                                                                     |
| `big`        | Larger font                     |                                                                                                                                                     |
| `blockquote` | Indented paragraph              |                                                                                                                                                     |
| `body`       | Document body                   | Supports the `bgcolor` attribute, which can be a `#RRGGBB` color specification.                                                                     |
| `br`         | Line break                      |                                                                                                                                                     |
| `center`     | Centered paragraph              |                                                                                                                                                     |
| `cite`       | Inline citation                 | Same as `i`.                                                                                                                                        |
| `code`       | Code                            | Same as `tt`.                                                                                                                                       |
| `dd`         | Definition data                 |                                                                                                                                                     |
| `div`        | Document division               | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `dl`         | Definition list                 | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `dt`         | Definition term                 | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `em`         | Emphasized                      | Same as `i`.                                                                                                                                        |
| `font`       | Font size, family, and/or color | Supports the following attributes: `size`, `face`, and `color` \(`#RRGGBB`\).                                                                       |
| `h1`         | Level 1 heading                 | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `h2`         | Level 2 heading                 | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `h3`         | Level 3 heading                 | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `h4`         | Level 4 heading                 | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `h5`         | Level 5 heading                 | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `h6`         | Level 6 heading                 | Supports the standard [block attributes](html-support.md#block-attributes).                                                                         |
| `head`       | Document header                 |                                                                                                                                                     |
| `hr`         | Horizontal line                 | Supports the `width` attribute, which can be specified as an absolute or relative \(`%`\) value.                                                    |
| `html`       | HTML document                   |                                                                                                                                                     |
| `i`          | Italic                          |                                                                                                                                                     |
| `li`         | List item                       |                                                                                                                                                     |
| `nobr`       | Non-breakable text              |                                                                                                                                                     |
| `ol`         | Ordered list                    | Supports the standard [list attributes](html-support.md#list-attributes).                                                                           |
| `p`          | Paragraph                       | Left-aligned by default. Supports the standard [block attributes](html-support.md#block-attributes).                                                |
| `pre`        | Preformatted text               |                                                                                                                                                     |
| `s`          | Strikethrough                   |                                                                                                                                                     |
| `small`      | Small font                      |                                                                                                                                                     |
| `span`       | Grouped elements                |                                                                                                                                                     |
| `strong`     | Strong                          | Same as `b`.                                                                                                                                        |
| `sub`        | Subscript                       |                                                                                                                                                     |
| `sup`        | Superscript                     |                                                                                                                                                     |
| `table`      | Table                           | Supports the following attributes: `border`, `bgcolor` \(`#RRGGBB`\), `cellspacing`, `cellpadding`, `width` \(absolute or relative\), and `height`. |
| `tbody`      | Table body                      | Does nothing.                                                                                                                                       |
| `td`         | Table data cell                 | Supports the standard [table cell attributes](html-support.md#table-cell-attributes).                                                               |
| `tfoot`      | Table footer                    | Does nothing.                                                                                                                                       |
| `th`         | Table header cell               | Supports the standard [table cell attributes](html-support.md#table-cell-attributes).                                                               |
| `thead`      | Table header                    | If the `thead` tag is specified, it is used when printing tables that span multiple pages.                                                          |
| `tr`         | Table row                       | Supports the `bgcolor` attribute, which can be a `#RRGGBB` color specification.                                                                     |
| `tt`         | Typewrite font                  |                                                                                                                                                     |
| `u`          | Underlined                      |                                                                                                                                                     |
| `ul`         | Unordered list                  | Supports the standard [list attributes](html-support.md#list-attributes).                                                                           |

#### Block Attributes

The following attributes are supported by the `div`, `dl`, `dt`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p` tags:

| Attribute | Values                               |
| :-------- | :----------------------------------- |
| `align`   | `left`, `right`, `center`, `justify` |
| `dir`     | `ltr`, `rtl`                         |

#### List Attributes

The following attribute is supported by the `ol` and `ul` tags:

| Attribute | Values                                    |
| :-------- | :---------------------------------------- |
| `type`    | `1`, `a`, `A`, `square`, `disc`, `circle` |

#### Table Cell Attributes

The following attributes are supported by the `td` and `th` tags:

| Attribute | Values                               |
| :-------- | :----------------------------------- |
| `width`   | Pixel or percentage value            |
| `bgcolor` | Hex color value                      |
| `colspan` |                                      |
| `rowspan` |                                      |
| `align`   | `left`, `right`, `center`, `justify` |
| `valign`  | `top`, `middle`, `bottom`            |

### Supported CSS Properties

| Property                           | Values                                  | Description                                                              |
| ---------------------------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| `background-color`                 | `color`                                 | Background color for elements |
| `color`                            | `color`                                 | Text foreground color |
| `font-family`                      | `family name`                           | Font family name |
| `font-size`                        | [ `small` \| `medium` \| `large` \| `x-large` \| `xx-large` ] \| `size`pt \| `size`px | Font size relative to the document font, or specified in points or pixels |
| `font-style`                       | [ `normal` \| `italic` \| `oblique` ] | |
| `font-weight`                      | [ `normal` \| `bold` \| `100` \| `200` \| `300` \| `400` \| `500` \| `600` \| `700` \| `800` \| `900` ] ||
| `text-decoration`                  | `none` \| [ `underline` \| `overline` \| `line-through` ] | Additional text effects |
| `font`                             | `<font-style>` `<font-weight>` `<font-size>` `<font-family>` ] | Font shorthand property |
| `text-align`                       | [ `left` \| `right` \| `center` ] | Text alignment |
| `text-indent`                      | `<length>px` | First line text indentation in pixels |
| `white-space`                      | [ `normal` \| `pre` \| `nowrap` \| `pre-wrap` ] | Declares how whitespace in HTML is handled. |
| `margin-top`                       | `<length>px`                            | Top paragraph margin in pixels |
| `margin-bottom`                    | `<length>px`                            | Bottom paragraph margin in pixels |
| `margin-left`                      | `<length>px`                            | Left paragraph margin in pixels |
| `margin-right`                     | `<length>px`                            | Right paragraph margin in pixels |
| `padding-top`                      | `<length>px`                            | Top table cell padding in pixels |
| `padding-bottom`                   | `<length>px`                            | Bottom table cell padding in pixels |
| `padding-left`                     | `<length>px`                            | Left table cell padding in pixels |
| `padding-right`                    | `<length>px`                            | Right table cell padding in pixels |
| `padding`                          | `<length>px`                            | Shorthand for setting all the padding properties at once. |
| `vertical-align`                   | [ `baseline` \| `sub` \| `super` \| `middle` \| `top` \| `bottom` ] | Vertical text alignment. For vertical alignment in text table cells only middle, top, and bottom apply. |
| `border-collapse`                    | [ `collapse` \| `separate` ] | Border Collapse mode for text tables. If set to collapse, cell-spacing will not be applied. |
| `border-color`                       | `<color>`                              | Border color for text tables and table cells. |
| `border-top-color`                   | `<color>`                              | Top border color for table cells. |
| `border-bottom-color`                | `<color>`                              | Bottom border color for table cells. |
| `border-left-color`                  | `<color>`                              | Left border color for table cells. |
| `border-right-color`                 | `<color>`                              | Right border color for table cells. |
| `border-style`                       | [ `none` \| `dotted` \| `dashed` \| `dot-dash` \| `dot-dot-dash` \| `solid` \| `double` \| `groove` \| `ridge` \| `inset` \| `outset` | Border style for text tables and table cells. |
| `border-top-style`                   | `<border-style>`                       | Top border style for table cells. |
| `border-bottom-style`                | `<border-style>`                       | Bottom border style for table cells. |
| `border-left-style`                  | `<border-style>`                       | Left border style for table cells. |
| `border-right-style`                 | `<border-style>`                       | Right border style for table cells. |
| `border-width`                       | `<width>px`                               | Width of table or cell border |
| `border-top-width`                   | `<length>px`                              | Top border width for table cells. |
| `border-bottom-width`                | `<length>px`                              | Bottom border width for table cells. |
| `border-left-width`                  | `<length>px`                              | Left border width for table cells. |
| `border-right-width`                 | `<length>px`                              | Right border width for table cells. |
| `border-top`                         | `<width>px` `<border-style>` `<border-color>` | Shorthand for setting top border width, style and color |
| `border-bottom`                      | `<width>px` `<border-style>` `<border-color>` | Shorthand for setting bottom border width, style and color |
| `border-left`                        | `<width>px` `<border-style>` `<border-color>` | Shorthand for setting left border width, style and color |
| `border-right`                       | `<width>px` `<border-style>` `<border-color>` | Shorthand for setting right border width, style and color |
| `border-top`                         | `<width>px` `<border-style>` `<border-color>` | Shorthand for setting top border width, style and color |
| `border-bottom`                      | `<width>px` `<border-style>` `<border-color>` | Shorthand for setting bottom border width, style and color |
| `border`                             | `<width>px` `<border-style>` `<border-color>` | Shorthand for setting all four border's width, style and color |
| `background`                         | `<background-color>` | Background shorthand property |
| `page-break-before`                  | [ `auto` \| `always` ] | Make it possible to enforce a page break before the paragraph/table |
| `page-break-after`                   | [ `auto` \| `always` ] | Make it possible to enforce a page break after the paragraph/table |
| `float`                              | [ `left` \| `right` \| `none` ] | Specifies where text will be placed in another element. Note that the float property is only supported for tables. |
| `text-transform`                     | [ `uppercase` \| `lowercase` ] | Select the transformation that will be performed on the text prior to displaying it. |
| `font-kerning`                       | [ `normal` \| `none` ] | Enables or disables kerning between text characters. |
| `font-variant`                       | `small-caps`                              | Perform the smallcaps transformation on the text prior to displaying it. |
| `word-spacing`                       | `<width>px`                               | Specifies an alternate spacing between each word. |
| `line-height`                        | `<number>`[`%` \| `px` \| `pt` \| `cm`] | Specifies the height of a line. It can be one of the following: 1) fixed line height in pixels, points, or centimeters. 2) a percentage of the current font size. |


### Supported CSS Selectors

All CSS 2.1 selector classes are supported except pseudo-class selectors such as `:first-child`, `:visited` and
`:hover`.
