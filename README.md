# Mr Roboger's Neighborhood!
###### Friday Independent Project [10.30.20]
### by Taylor Delph

## Here's my live page! {gh-pages link}

## Setup and installation instructions

Software Reqirements
1. A web browser
2. Bash/GitBash
3. Code editor like VS Code to view or edit the code

Open by downloading

1. [Navigate to my GitHub repo](https://github.com/taylulz/Mr.-Roboger-s-Neighborhood.git)
2. Click the green **Code** button.  

![Image of Code button](/img/GHbutton.png)

3. Click 'Download ZIP' option. 

![Image of Download ZIP](/img/zip.png)

4. Unzip file when it finishes downloading.
5. Drag unzipped folder into VS Code or other code editor to view contents.
6. If you do not have a code editor, you can double click the index.html instead to open the page in your internet browser.

Open via Bash/GitBash

1. To clone this repository, go to your terminal and enter: `$ git clone https://github.com/taylulz/Mr.-Roboger-s-Neighborhood.git`
2. Navigate to downloaded repository
3. Drag repository folder into VS Code or other code editor to view contents
4. If you do not have a code editor, you can double click the index.html instead to open the page in your internet browser.

# Known Bugs

Does not run perfectly for numbers in the thousands and beyond

# Specifications
Describe: mrRobo()

Test: "it should return a 0 when 0 is inputted"
Expect(mrRobo(0)).toEqual(0);

Test: "it should return a "Beep!" when 1 is inputted"
Expect(mrRobo(1)).toEqual("Beep!");

Test: "it should return a "Boop!" when 2 is inputted"
Expect(mrRobo(2)).toEqual("Boop!");

Test: "it should return a "Won't you be my cyber Neighbor?" when 3 is inputted"
Expect(mrRobo(3)).toEqual("Won't you be my cyber Neighbor?");

Test: "it should return a "Won't you be my cyber Neighbor?" when 13 is inputted"
Expect(mrRobo(13)).toEqual("Won't you be my cyber Neighbor?");

Test: "It should return a "Boop!" when 21 is inputted
Expect(mrRobo(21)).toEqual("Boop!");

Test: "It should return a "Boop!" when 32 is inputted
Expect(mrRobo(32)).toEqual("Won't you be my cyber Neighbor?");

