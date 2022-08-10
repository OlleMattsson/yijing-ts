Divination steps

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
