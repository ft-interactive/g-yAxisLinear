# yaxisLinear

Pre styled and positioned linear y-axis for use with the FT's g-chartframe as part of the Visual Vocabulary. As the name suggests it creates a linear y-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard y-axis.

Will also work with other builds where the axis is called into a 'g' element appended to a pre-defined svg.



### Prerequisites
The FT axis styles---add the folowwing link in your index file header

The [d3 library](https://d3js.org/) is already installed in the build

## Installing
### Manually install

Add the following line to the header of you index.html file.

``` html
<script src="https://rawgit.com/ft-interactive/g-yaxislinear/master/build/g-yaxislinear.js"> </script>

```


### NPM install
Not yet deployed

## Getting started
Add the following code to your index.js to append a default y-axis to the .plot object (grey here but is not normally visible)

```
let myAxis = gAxis.yaxisLinear;
currentFrame.plot()
	.call(myYAxis);
```

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/initialPlot.png)

Set the <b>.range()</b> and the <b>.ticksize()</b> to the dimensions of the current frame

```
let myAxis = gAxis.yaxisLinear;
myYAxis
    .range([currentFrame.dimension().height,0])
    .tickSize(currentFrame.dimension().width);
currentFrame.plot()
	.call(myYAxis);
```
![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/amendedPlot.png)


### Positioning
The rendered axis returns the width of the ticks text via <b>.yLabelOffset()</b>.

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/yOffsetLabel.png)

<b>.yLabelOffset</b> is used to amend the right hand margin of the current frame element so that tick text is positioned outside the current frame,

```
let newMargin = myYAxis.yLabelOffset()+currentFrame.margin().right;
currentFrame.margin({right:newMargin});
d3.select(currentFrame.plot().node().parentNode)
	.call(currentFrame);
```

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/newWidth.png)

The current frame can then still be used to correctly define the <b>.range()</b> values of an x-axis. If ticks are aligned to the left then the left hand margin should be ammended instaed of the right

## API Reference

#myAxis<b>.align([String])</b> "right" or "left". Determines the alignment of the tick text set as "right" by default

#myAxis<b>.domain([Array])</b> defines the axis domain in the same way as you would when creating a normal d3.scaleLinear(). If no <b>.domain()</b> is defined the default is [0,10000]

#myAxis<b>.range([Array])<</b> defines the axis  range in the same way as you would when creating a normal d3.scaleLinear(). If no <b>.range()</b> is defined the default is [120,0])

#myAxis<b>.yLabelOffset([Number])</b> Used to access the width of the text on the axis tick. Will vary depending on tick e.g. a tick label of 1,000,000 is wider than a a tick value od 10 and will return a higher number.



