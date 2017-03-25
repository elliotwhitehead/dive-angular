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