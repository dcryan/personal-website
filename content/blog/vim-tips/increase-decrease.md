---
path: "/blog/vim-tips"
date: "2019-12-01"
title: "Vim Tips: Increase or Decrease a Number"
description: "Quick commands for increasing or decreasing a number."
---

# Increase or Decrease a number in Vim

Found from this Vim resource: [Increase or Decrease Number](https://vim.fandom.com/wiki/Increasing_or_decreasing_numbers)

Increase number: `ctrl + a`  
Decrease number: `ctrl + x`

I’ve been typing `r + <next-number>` like a fool all these years.

You can just type `ctrl + a` will increase or `ctrl + x` to decrease the number under the cursor. It even works across the whole number, not just the digit under the cursor. And, yes, it even goes negative. The only gotcha is that if your number is concatonated by a hyphen, it takes the hyphen as the number being negative, so to increase it, you actually need to "decrease" the number.

Don't get me wrong `r + <next-number>` has it's benefits in quickly changing the character under the cursor, but you have to be a little more aware of what you're doing if you're zipping through a list of strings. Where with `ctrl + a` you can almost blindly be doing the same work.