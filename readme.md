# Divination steps

1. "Toss" four coins that come up heads (1) or tails (0): [0,0,0,1]
   Note: when tossing with, for example random uint8 numbers, normlize uint8 => binary (0|1)

2. Convert the "uint4" sequence to a decimal number 0-15: (uint4). This number is the "Line"

3. Construct a Changing Hexagram by repeating steps 1 and 2 six times

4. The Final Hexagram is created from the Changing Hexagrams:
   Line 0 => Line 4
   Lines 1, 2, 3 => Line 9

5. Both hexagrams can be represented by Yin / Yang lines
   0, 9, 10, 11, 12, 13, 14, 15 => Yin
   4, 5, 6, 7, 8, 1, 2, 3 => Yang


# License

Copyright 2022 Olle E. Mattsson

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.