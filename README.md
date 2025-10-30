## Info

- <https://nutrition.umd.edu/?locationNum=19&dtdate=null>
- date format = 10/16/2025 = mm/dd/yyyy
- locationNum
  - Y = 19
  - South = 16
  - 251 = 51
-

- Breakfast: Open to 10:30am
- Lunch: 10:30am to 4:00pm
- Dinner: 4:00pm to Close

- <https://nutrition.umd.edu/+the> label thing

## Design

- list of tags as like bubbles at the top, click to select types of food (vegi, all, soy, etc)
- **under the search, have filtering options by allergy stuff**
- collapsible sections: bento box? other categories?
  - dessert, type of cuisine, etc - would need ML model
    - not terrible. max would run 3 times a day but on A LOT of food...
- if I have extra data (cuisine, course, temp, ui pictures (for pixel art thing) etc) - make a db and use id's of each meal for it

## TODO

- make code check the times of meals and auto select the current meal based off the time
- api for meal hours

### Code to get nutrition info

```javascript
function splitAtFirstNumber(str) {
  const match = str.match(/\d/);
  if (!match) return [str];
  const index = match.index;
  return [str.slice(0, index).trim(), str.slice(index).trim()];
}

elms = document.querySelectorAll(".nutfactstopnutrient");
for (let elm of elms) {
  text = elm.textContent;

  if (!text.includes("%") && text.trim() != "") {
    console.log(splitAtFirstNumber(elm.textContent));
  }
}
```
