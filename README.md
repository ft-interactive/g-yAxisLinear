# yaxisLinear

Pre styled and positioned linear y-axis for use with the FT's g-chartframe as part of the Visual Vocabulary. As the name suggests it creates a linear y-axis that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to keep code another standard y-axis.

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
Not yet deployed untill fully testedi

## Getting started
Add the following code to your index.js to append a default y-axis to the .plot object

```
const myAxis = gAxis.yaxisLinear;
currentFrame.plot()
	.call(myYAxis);
```
### Positioning
The rendered axis returns the width of the ticks text via the .yLabelOffset setter. The ticks are positioned on the right by default, but can be changed (see examples).

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/initialPlot.png)

.yLabelOffset should be used to amend the right hand margin of the .plot (

```
let newMargin = myYAxis.yLabelOffset()+currentFrame.margin().right;
currentFrame.margin({right:newMargin});
d3.select(currentFrame.plot().node().parentNode)
	.call(currentFrame);
```

The tick text is then positioned on the outside of the current frame area. This way the width of the .plot object can still be used to correctly define the .range() values of an x axis. If ticks are aligned to the left then the .plot left hand margin should be ammended

![alt tag](https://github.com/ft-interactive/g-yaxislinear/blob/master/images/amendedPlot.png)


## API Reference

#myAxis<b>.align()</b>
String expected. Set to "right" by default

#myAxis<b>.domain</b>

#myAxis<b>.range</b>

#myAxis<b>.yLabelOffset</b>



