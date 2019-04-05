# _Beep Boop_

#### By **Tessa Sullivan** _04/05/2019_

## Description

Takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

1. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
2. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
3. Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

The above rules are listed in order from least to most important.  The first exception should apply unless the second exception does, and the same with the second and third.

[Counting Beep Boop Style]: https://tessasullivan.github.io/beepBoop/

## Specifications

1. The program returns 0 if user enters 0.
Input: 0  
Output: 0  

2. Any number which contains a 1 (but not a 2 or 3) is replaced with "Beep!"
Input: 1  
Output: 0, "Beep!"

3. Any number which contains a 2 (but not a 3) is replaced with "Boop!"
Input: 2  
Output: 0, "Beep!", "Boop"

4. Any number which contains a 3 is replaced with "I'm sorry, Dave. I'm afraid I can't do that."
Input: 3  
Output: 0, "Beep!", "Boop", "I'm sorry, Dave. I'm afraid I can't do that."

5. Any number which does not contain a 1, 2, or 3 is not replaced.
Input: 10  
Output: 0, "Beep!", "Boop", "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "Beep!",

6. The program returns an error message if the user enters a non-numeric input.

7. The program returns an error message if the user enters nothing.

8. A user should be able to enter a new number and see new results over and over again.

## Setup/Installation Requirements

* Clone this repository
* Open index.html in a web browser of your choice.

## Known Bugs / Limitations



## Support and contact details

_Contact Tessa Sullivan at tessa.sullivan@gmail.com for any issues found._

## Technologies Used



### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Tessa Sullivan_**
