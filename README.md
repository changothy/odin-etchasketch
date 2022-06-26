# odin-etchasketch
The Etch-a-Sketch project repo for The Odin Project.

## Summary
Generates a grid of HTML divs that are filled in with color when the mouse hovers over them. Additional functions include a reset button to clear the grid, a Generate button to generate a new grid up to 100x100, and a "Rainbow Mode" that paints with a random RGB color instead of the default color.

## Thoughts
- At first I thought I had to darken the Rainbow Mode values by 10%...that would've been interesting to figure out.
- I wonder if there's a better way to darken the cell instead of how it's done now (pulling the brightness value using substring() and assigning a new brightness value manually).
- Performance degrades at bigger grid sizes, especially with Rainbow Mode.
- Otherwise, it wasn't as bad as I thought. Google is my friend!