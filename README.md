
  

# Blurred Text Reveal Animation with Motion in Next.js

  

This project demonstrates a blurred text reveal animation implemented in a Next.js app using the `@motion` library (formerly Framer Motion). The inspiration for this animation comes from Codrops, with scroll-based effects that reveal the text with a blur and scale animation.


![Demo](/public/text.gif)

## Demo

  

Provide a link to your live demo if available.

  

## Table of Contents

  

- [Installation](#installation)

- [Usage](#usage)

- [Code](#code)

- [Credits](#credits)

  

## Installation

  

To install dependencies, run:

  

```bash

npm  install

```

  

## Usage

  

To run the development server:

  

```bash

npm  run  dev

```

  

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

  

### Code Example

  

Include the following code in your Next.js project to create the blurred text reveal effect.

  

### `components/TextBlur.js`

  

```jsx

"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform, useMotionTemplate } from "motion/react";

const paragraph = "When the vibe’s off, but you’re like, 'Bet, imma just rizz up some serotonin,' and suddenly you're doomscrolling at 3 a.m. again. L+ratio."

const TextBlur = () => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ["start 0.4", "center center"]
    })

    const words = paragraph.split(" ")

    
  return (
    
    <div 
        className="flex items-center justify-center h-screen md:text-6xl text-4xl text-[#A6AEBF] font-semibold"
        ref={container}
    >
        <div className="w-[70%]">
        {words.map((word, index) =>{

            const start = index/words.length;
            const end = start + 1/words.length;

            return(
            <Char 
                index={index}
                start={start}
                end={end}
                key={index}
                scrollProgress={scrollYProgress}
            >
                {word}
            </Char>
        )})} 
        </div>  
    </div>
  )
}

export default TextBlur


const Char = ({children, start, end ,scrollProgress, index})=>{
    const letters = children.split("");
    const amount = end - start;
    const step = amount / letters.length

    return(
        <span 
            key={index}
            className="inline-block mr-2"
        >
            {letters.map((letter, i) =>{
                
                //begin1 is made less than begin2 to stagger scale and blur animations slightly to create a sequential effect.

                // For the first word (index = 0), set scale start point to `start` to avoid 
                // premature scaling. Without this, `begin1` would be less than `start` 
                // (due to subtracting `step * (i + 3)`), causing the word to scale slightly 
                // before the scroll animation begins.

                const begin1 = index===0? start : start - (step* (i+3) ); 
                const stop1 = start + (step * (i +1));

                const begin2 = start - (step* i );
                const stop2 = start + (step * (i +1));

                const scaleX = useTransform(scrollProgress, [begin1, stop1], [1.8, 1]);
                const scaleY = useTransform(scrollProgress, [begin1, stop1], [0.1, 1]);

                const blur = useTransform(scrollProgress, [begin2, stop2], [10, 0]);
                const brightness = useTransform(scrollProgress, [begin2, stop2], ["30%", "100%"]);

                const filter = useMotionTemplate`blur(${blur}px) brightness(${brightness})`;


                return(
                <motion.span
                    key={i}
                    className="inline-block will-change-transform"
                    style={{
                        filter: filter, 
                        willChange: 'filter, transform',
                        scaleX:  scaleX,
                        scaleY: scaleY
                    }}
                >
                    {letter}
                </motion.span>
            )})}
        </span>
    )
}

```


## Credits

  

- Inspired by Codrops.

- Animation powered by [`@motion`](https://www.framer.com/motion/), formerly Framer Motion.

  

---

  

This project is open source and available under the MIT License.