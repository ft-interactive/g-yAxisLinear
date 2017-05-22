# yaxisLinear

Pre styled and positioned linear y axis for us with the FT's g-chartframe as part of the Visual Vocabulary. Will also work with other builds where the axis is called into a 'g' element appended to a pre-defined svg.

### Prerequisites
The [d3 library](https://d3js.org/) is already installed in the build

## Installing
### Manually install

Add the following line to the header of you index file.

### NPM install
Not yet deployed untill fully tested

## Configuring and calling

```
const myAxis = gAxis.yaxisLinear;
more code in here;
```
### Positioning
This appends a linear y axix to the current frame, returning the width of the ticks text via the .yLabelOffset setter. The ticks are positioned on the right by default.

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/initialPlot.png)

This value should be used to amend the right or left hand margins of the current frame (depending on alignment) thus:

so that the tick text is positioned on the outside of the current frame plot area. This way the width of the current frame can still be used to correctly define the .range() values of an x axis.

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/amendedPlot.png)



## API Reference

YOUR API DOCUMENTATION HERE. Use bold for symbols (such as constructor and method names) and italics for instances. See the other D3 modules for examples.

<a href="#foo" name="foo">#</a> <b>foo</b>()

Computes the answer to the ultimate question of life, the universe, and everything.
