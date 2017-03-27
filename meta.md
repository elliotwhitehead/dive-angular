## Sat Mar 25 11:23:41 MDT 2017

Today I’m going to put the rails stuff on hold for a minute to work on building out a quick page with Angular, since I can conceivably just use the hosting I’m already paying for on `elliotwhitehead.com` to serve up the static files. 

Okay first thing's first, start up a 7 minute timer.

> Set up come basic html scaffolding and linked in local copy of angular 1.6 and materialize.

`commit (d82dc31ffbae669d11ede95050e885d20d165c24)[https://github.com/elliotwhitehead/dive-angular/commit/d82dc31ffbae669d11ede95050e885d20d165c24]`

Darn. That link I just added above didn't work. I didn't realize that the code formatting backticks escape links..

Duh. Here's what I meant: 

`commit` (`d82dc31ffbae669d11ede95050e885d20d165c24`)[https://github.com/elliotwhitehead/dive-angular/commit/d82dc31ffbae669d11ede95050e885d20d165c24]

## Sat Mar 25 11:31:37 MDT 2017

Lol nope! Had the MD formatting for links mixed up. Let's try this:

`commit` [`d82dc31ffbae669d11ede95050e885d20d165c24`](https://github.com/elliotwhitehead/dive-angular/commit/d82dc31ffbae669d11ede95050e885d20d165c24)

alright, onwards!

Sat Mar 25 11:38:49 MDT 2017

"The Basics," they said.

Looks like they're loading angular in the head of the file, rather than at the bottom of the body, which makes sesne since angular will go through and reprocess the html accordingly. 

[`Moved angularjs file inside <head>`](https://github.com/elliotwhitehead/dive-angular/commit/ab969d3d5085506afdef7392449c284d68a9f341)

Right. I'll need an `app.js` file too.

[`Added app.js file`](https://github.com/elliotwhitehead/dive-angular/commit/db10224da1877408ddccda607a7452967d6129c6)

## Sat Mar 25 11:49:07 MDT 2017

Since my timestamps here are now headers, I went ahead and updated my `.bash_profile` alias to make that a little bit easier.

[`Updated date -> clipboard alias to prepend the date with '## ' for quicker markdown blogging`](https://github.com/elliotwhitehead/dotfiles/commit/aca576d028053910bb43a760fd723af9bdfecadb)

Cool. I'll go ahead and make a simple todo app. Classic right?

## Sat Mar 25 12:07:56 MDT 2017

Just been reading some documentation so far. So it looks like the highest level of abstraction in the data model (apart from the `module` itself) are the `controllers`, used to set the scope of a given data model. That makes sense.

Hmm. After reaading the [developer guide on controllers](https://docs.angularjs.org/guide/controller), I'm still a bit confused by the two different ways to define the scope of a controller, but the second one (using `XYZController as xyz`) inside the directive makes the most sense to me, so I'll use that for now. 

I think the reason I'm confused is that I would have expected scope to be inherently defined by the scope of the HTML tag where the controller directive is bound. But then again, it makes sense that you would need to use that scope elsewhere as well, so an explicit way to link them is necessary. I am however still a little bamboozled by the `$scope` object and its sytnax... I'll need to read some more on that later.

For now I'll just whip up the inital List Controller, and some initial data, and print that out to the page.

[`Set up basic instantiation of the ListController with inital data seed`](https://github.com/elliotwhitehead/dive-angular/commit/77b31582e4fe1a5d9cbd79c61ef60f3e61d06525)

[`Added directives to html layout, and basic list out of seeded task data`](https://github.com/elliotwhitehead/dive-angular/commit/73b75932536cf0e3dd50c6ebb4b07bdf19cd5150)

Hey! It works!!

Go away, stupid `.DS_Store` files -_-
[`Ignored .DS_Store files`](https://github.com/elliotwhitehead/dive-angular/commit/50f77cea7eddbc74ad0dd7364759988354fe248e)

## Sat Mar 25 13:12:50 MDT 2017

Well that's about all the time I have today. I need bike home and keep working on putting on my car back together..

## Sun Mar 26 15:52:01 MDT 2017

Day 2!

[`Added function for adding a task to the list`](https://github.com/elliotwhitehead/dive-angular/commit/c99343880897150d766858413379e5a3d09da7ec)

[`Added input form to add tasks`](https://github.com/elliotwhitehead/dive-angular/commit/ecbb186cb5371338c70931558a21cd7fec2b9eda)

It works! It's a little harsh on the eyes though.

[`Added a stylesheet`](https://github.com/elliotwhitehead/dive-angular/commit/5753407a03ee4556aaf799554bd19d397050e433)

[`added Sass file. We're going full-boar on this weekend project :sunglasses:`](https://github.com/elliotwhitehead/dive-angular/commit/8407ebcfc6d8ca141c2bad2089d7240be3297e98)

[`Added a few basic styles and a placeholder. Doesn't need to be pretty until it actually works`](https://github.com/elliotwhitehead/dive-angular/commit/31e9bfa97040b6d0ec8475975a00a1d96df32201)

## Sun Mar 26 17:11:57 MDT 2017

Got a little distracted with a couple of phone calls / messages. Back to it.

Now I need to add a select input to assign the task's priority.

[`Wired up form to accept a priority for a new task`](https://github.com/elliotwhitehead/dive-angular/commit/6884997bd989f01a604f8141f9422e398f214ea1)

## Sun Mar 26 17:39:12 MDT 201

So it works great now, but unfortunately there's no validation, so it's possible to add a task without any text or priority (or both). Let's fix that.

Well that was incredibly easy. I forgot about the `required` attribute you can add to HTML form inputs, which Angular [supports and helps enfrorce](https://docs.angularjs.org/api/ng/input/input%5Btext%5D).

[`Required both text and priority fields to be filled out`](https://github.com/elliotwhitehead/dive-angular/commit/1836f2c48dfe8c35e9f25cd39dea8bf74816d93f)

Sweet! That's pretty mucha fully functioning to-do list application! I learned a lot about Angular and have just scratched the surface. That's all I have time for today (off to work on my car again -_-), but I think I'll come back and add persistince and even authentication with [Google's Firebase](https://firebase.google.com)! 








