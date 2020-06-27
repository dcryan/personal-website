---
path: "/blog/vim-tips/j-command"
date: "2020-06-27"
title: "Vim Tips: What you didn't know about the J command"
description: "The J command can do that? Awesome trick to join lines using the J command."
---

# Vim Tips: Joining Lines with **J**

Take this example:

```js
const person = {
  name,
  age,
  height,
  shoeSize
};
```

It's fairly easy to digest, but ESLint and Pretier are nagging to make this into a single line.
If you were to fix this by hand, it becomes very complex pretty quick. There are several ways
to do this, but a common way would be to place your cursor on the 2nd line, and backspace
through all the whitespace until it's in the correct position.

<br />
<br />
<br />

![](../../../gifs/j-command/before-j.gif)

<br />
<br />
<br />

## Let me propose using the `J` command.

Definition straight from the docs (`:help J`):
```
                            *J*
J          Join [count] lines, with a minimum of two lines.
           Remove the indent and insert up to two spaces (see
           below).  Fails when on the last line of the buffer.
           If [count] is too big it is reduced to the number of
           lines avdfilable.
sdf
                            *v_J*
{Visual}J  Join the highlighted lines, with a minimum of two
           lines.  Remove the indent and insert up to two spaces
           (see below).
```

What would have taken a few keystrokes to join one line, has now been reduced to a single keystroke.

Let's see this again with the new `J` command.
You can now simply press `JJJJJ` (`J`x5) and you will be able to join the entire object onto one line.

<br />
<br />
<br />

![](../../../gifs/j-command/after-j.gif)

<br />
<br />
<br />

If you have relative line numbers, you can execute exactly how many `J` commands are needed.
I'm not sure why this one requires the command `6J` insteady of `5J`. Feel free to tweet me if you
guys know the answer to that one.

<br />
<br />
<br />

![](../../../gifs/j-command/after-j-exact.gif)

<br />
<br />
<br />

Even better yet, you can pair this with any kind of visual command.

<br />
<br />
<br />

![](../../../gifs/j-command/after-j-visual.gif)

<br />
<br />
<br />

Comments, when joined will still have the pesky comment leader characters.
To remove those characters, add this to your `.vimrc`.

```vim
" remove comment leaders when joining lines
set formatoptions+=j
```
