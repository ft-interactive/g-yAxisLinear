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
Add the following code to your index.js to append a default y-axis to the .plot object (grey but is not normally visible)

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

<b>.yLabelOffset</b> is be used to amend the right hand margin of the current frame element so that tick text is positioned outside the current frame,

```
let newMargin = myYAxis.yLabelOffset()+currentFrame.margin().right;
currentFrame.margin({right:newMargin});
d3.select(currentFrame.plot().node().parentNode)
	.call(currentFrame);
```

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/amendedPlot.png)

The current frame can then still be used to correctly define the <b>.range()</b> values of an x-axis. If ticks are aligned to the left then the left hand margin should be ammended instaed of the right

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/newWidth.png)


## API Reference

#myAxis<b>.align([String])</b> "right" or "left". Determines the alignment of the tick text set as "right" by default

#myAxis<b>.domain</b>

#myAxis<b>.range</b>

#myAxis<b>.yLabelOffset</b>



