# Devoxx4Kids quadcopter workshops

This project keeps the tasks for the Devoxx4Kids quadcopter workshop.
This workshop was made for 8 to 14 year old kids. The first three workshops represented the basic workshop package, 
which all kids have to program in their way to succeed the given exercise. If they succeeded, they were free
to try what they want with the quadcopter.


## First exercise - Basic instructions

Use all instructions of the quadcopter to learn what you can do and learn the syntax.
Backward, Forward, Left, Right, Up, Down, Clockwise, CounterClockwise.

## Second exercise - Basic geometry

Fly a rectangle and a triangle.

## Third exercise - "Haus vom Nikolaus"

Fly the famous "Haus of Nikolaus". It is a mathematical problem of the graph theory,
where a euler path but no euler cycle does exists (http://en.wikipedia.org/wiki/Eulerian_path).

The kids should solve this exercise with absolute values and the function go().


# Presentation

The presentation and a handout for the kids are available in the presentation directory.


# Installation

Check this out with the https://github.com/derTobsch/ardrone-autonomy repository side by side.

```sh
git clone https://github.com/derTobsch/ardrone-autonomy-d4k.git
git clone https://github.com/derTobsch/ardrone-autonomy.git
```

Go to the 'ardrone-autonomy-d4k' directory
```sh
cd ardrone-autonomy-d4k
```

Install all dependencies via npm (Node has to be installed, http://nodejs.org/)
```sh
npm install
```

# How to use

Go to the 'ardrone-autonomy-d4k' directory
```sh
cd ardrone-autonomy-d4k
```

Start a mission which is located in the workshop directory with
```sh
node startMission.js $mission-name
```

Hint: You do not need to use the full path or the file extension. The name of the file suffices. 
Also make sure that you installed 'ardrone-autonomy'


### Example
```sh
node startMission.js one
```

# Licence

The MIT License (MIT)

Copyright (c) 2014 Tobias Schneider <schneider@synyx.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
