---
path: "/blog/vim-tips/increment-ascending"
date: "2020-09-12"
title: "Vim Tips: Increment a list to be ascending"
description: "Quick commands for incrementing a list to be ascending."
slug: "vim-increment-ascending"
---

# Vim Tips: Increment a List To Be Ascending

## TLDR;

Visual Select rows to increase then press `g<C-a>`

## Long version;

Vim is very powerful and can easily bent to your will.

Say you have something with a number that you need to duplicate, and increment.

```
1 sheep
```

Let's quickly make 4 duplicates.

Now we have.

```
1 sheep
1 sheep
1 sheep
1 sheep
1 sheep
```

Use Visual-Block and select the last 4 1's, and press `g<C-a>`.

Whoa! What just happened?
From a [previous post](/blog/vim-increase-decrease), I mentioned that `<C-a>` and `<C-x>` incremented & decremented
the number under the cursor.

The `g` command means globally, and in this case also execute our increment one extra
time on each subsequent line.

This works if we want to increase by 5 also. We'll just use the command `5g<C-a>`.

Let's not forget that we also have `<C-x>`.

ALSO, this command can be repeatable with `.`

Now go out, and show off your new party trick.
