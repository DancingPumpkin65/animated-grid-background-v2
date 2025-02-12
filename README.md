# Infinite Moving Grid Version 2

This project demonstrates a seamless infinite horizontal animation using `translateX`. A background image continuously moves along the X-axis within its container, creating a repeating pattern effect. The animation is smooth, efficient, and responsive—thanks to the use of `requestAnimationFrame` and CSS optimizations.

## Demo

Check out the live demo: [Demo](https://dancingpumpkin65.github.io/animated-grid-background-v2/)

## Features
- **Smooth infinite scrolling**: The grid moves seamlessly without visible jumps.
- **Random color fading effect**: Selected squares change color and fade back every few seconds.
- **Optimized performance**: Uses GPU-accelerated transforms for smooth animation.

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## How It Works
1. The CSS sets up a full viewport layout with no margins.
2. `will-change: transform;` is applied to optimize performance during the animation.
3. Upon the window's `load` event, the script selects the element with the background image.
4. It starts an animation loop using `requestAnimationFrame`.
5. The loop calculates the progress of each cycle (set to 3000 milliseconds) and translates the element along the X-axis by up to 72 pixels.
6. The result is a continuously moving background that creates the illusion of an infinite loop.

## Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/DancingPumpkin65/animated-grid-background-v2.git
   ```
2. Navigate into the Project Directory:
    ```sh
   cd animated-grid-background-v2
   ```
3. Open `index.html` in a browser.
4. Enjoy the animation!

## Customization
- **Cycle Duration**: Change the `cycleDuration` variable in `script.js` to adjust how long one full animation cycle takes.
- **Translation Distance**: Modify the `maxTranslateX` value in `script.js` to alter the maximum distance the background image translates.
- **Background Image**: Edit the URL and styling in `styles.css` to use a different background image or adjust its appearance (e.g., size and repeat behavior).

## License
This project is open-source and available under the MIT License.
