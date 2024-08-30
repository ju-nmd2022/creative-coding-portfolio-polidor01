# Creative Coding Portfolio

This is a HTML page that displays the artworks you created during your Creative Coding course at [Jönköping University](https://www.ju.se).

## How to add a new project

To add a new project, you need to copy or add the JavaScript file into your experiments folder. Next, you open the `data.json` file in your favorite editor (for example Visual Studio Code) and add a new entry to the array. You can just copy the structure:

```json
{
  "file": "experiments/example.js",
  "name": "Circles",
  "description": "I chose to create an art piece inspired by the artist Tyler Hobbs. The ides a was to create different circles in different layers in different sizes. The other projects was an interpretation of the circles but turned into bubbles giving the effect of being underwater"
}
```

In file, you write the path to the JavaScript file that contains your work. For name, you enter the name of your work. Under description you should explain your concept, the purpose of your work, and the inspiration. Don't forget to add the comma between the entries.

If you saved the JSON-file, commited everything and pushed it to GitHub, your changes should be visible online soon :)
