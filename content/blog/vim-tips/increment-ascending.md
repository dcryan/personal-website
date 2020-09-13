---
path: "/blog/vim-tips/increment-ascending"
date: "2020-09-12"
title: "Vim Tips: Increment a list to be ascending"
description: "Quick commands for incrementing a list to be ascending."
---

# Vim Tips: Increment a List To Be Ascending


<br />

## TLDR;

Visual Select rows to increase then press `g<C-a>`

![](../../../gifs/increment-ascending/increment-ascending.gif)


## Long version;

Vim is very powerful and can easily bent to your will.

Say you have something with a number that you need to duplicate, and increment.

```
1 sheep
```

Let's quickly make 4 duplicates.

![](../../../gifs/increment-ascending/duplicate.gif)

<br />

Now we have.

```
1 sheep
1 sheep
1 sheep
1 sheep
1 sheep
```
<br />

Use Visual-Block and select the last 4 1's, and press `g<C-a>`.

![](../../../gifs/increment-ascending/increment-sheep.gif)

<br />

Whoa! What just happened?
From a [previous post](./../vim-tips/increase-decrease), I mentioned that `<C-a>` and `<C-x>` incremented & decremented
the number under the cursor.

The `g` command means globally, and in this case also execute our increment one extra
time on each subsequent line.

<br />


This works if we want to increase by 5 also. We'll just use the command `5g<C-a>`.

![](../../../gifs/increment-ascending/increment-sheep5.gif)

Let's not forget that we also have `<C-x>`.

![](../../../gifs/increment-ascending/decrement-monkey.gif)

Now go out, and show off your new party trick. 💪
