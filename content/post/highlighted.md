---
author: Martin Sitar
title: Highlighted
date: 2020-06-27
image: "img/highlighted/60403730b9b4bd8679de37ea_highlighted-cover2.png"
archives: ["2020/06"]
description: The design details of capturing, storing, and referencing snippets of text from your books.
featured: false
---

If you've ever read a book that's full of things want to remember you probably marked up pages in the book itself or took notes elsewhere. Highlighted is a handy little app that lets you easily capture all the important snippets of text you'd ever want, and makes them a breeze to find  later on. Here are some of my favourite details.

## Modal views
Modal views present content in a separate mode from the user's current context (<a href="https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/modality/" target="_blank">more on that here</a>). Highlighted makes good use of this design pattern for completing tasks that are self contained and you typically don't spend too much time on. This helps you focus on the primary task but it also makes the app feel faster and more lightweight than having separate pages for every single interaction. One thing to point out is that all of these modals have a consistent way to exit in the top right, except for the create tag modal. In this instance cancel is a button located in the opposite corner, bottom left of the page.

## Book quick select
You can initiate the highlight mode from the main screen or once you've selected a book. If you have multiple books and trigger Highlight from the main screen there is a little dock at the bottom that lets you quickly change which book this text snippet belongs to.

<iframe src="https://giphy.com/embed/TdLRvQtZULgkPGLdGm" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/TdLRvQtZULgkPGLdGm"></a></p>

## Success confirmation
When you create a highlight you return to the context you were in previously. On the main screen the success message is shown in context with the book to which the text snippet belongs to. This works really well in visually tying the confirmation to the specific book, compared to a message at the top of the screen that relies on the user to read it. Currently the message is yellow, which is definitely on brand, but can be commonly associated with a warning.

{{< figure src="/img/highlighted/604022274f77d31f000d53e2_success.png" class="img-tall" alt="success" >}}


## Highlighting text
The interaction of highlighting a piece of text feels very smooth and surprisingly easy. As you drag either the top or bottom of the selected area it grows proportionately in both directions allowing you to quickly change from a single line to an entire paragraph of text. Being able to tap anywhere to capture is incredibly useful and saves you from having to hunt for a button! Also the text recognition is surprisingly accurate.

<iframe src="https://giphy.com/embed/l4YGmYnz4nNQPKxOx5" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/l4YGmYnz4nNQPKxOx5"></a></p>

## Page numbers
When you highlight a piece of text, the app automatically detects which page number that snippet can be found on. This is great if you need to go back and re-read the entire page/passage. You can also manually add a page number to a snippet if it wasn't recognized automatically.

{{< figure src="/img/highlighted/604022274b07e274c32fdffd_pages-numbers.png" class="img-tall" alt="numbers" >}}

## Page numbers
When you highlight a piece of text, the app automatically detects which page number that snippet can be found on. This is great if you need to go back and re-read the entire page/passage. You can also manually add a page number to a snippet if it wasn't recognized automatically.

## Tags
When you add a tag to your highlight, the app automatically uses the first letter of the word you're typing and assigns it to the badge for that tag, simple and clear.

<iframe src="https://giphy.com/embed/LqCZwo56UIH5V1VyWR" width="270" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/LqCZwo56UIH5V1VyWR"></a></p>


## Favourites
Highlights are stored as blocks of text identified by a grey UI element spanning the block's height. When you favourite a highlight this element turns yellow, making favourites really easy to spot while scrolling through your list.

{{< figure src="/img/highlighted/60402227f75166249a4bd855_favourite.png" class="img-tall" alt="favourite" >}}

## Credits
There's a neat little easter egg on the app details page. When you tap the app creator's name at the very bottom of this page, his avatar slides in from the bottom. Nice touch!

All products are a work in progress, here are a few areas I think are worth a second look.

## Swipe to delete
Currently to delete a highlight you have to view it's details, and delete via the button above. It would be nice to add a swipe to delete. Although this could get tricky with long pieces of text.

## Hide keyboard while scrolling
When you search for a book or a highlight the keyboard stays in view while scrolling through the results. The rows are quite tall which helps display the necessary information, but this means you can only view about 1.5 items at a time. Would be great if the keyboard slid away while you scroll and came back as you start typing.

## Confirm on highlight delete
Tapping delete on a book triggers a confirmation modal as expected since the action is irreversible. However, the delete button on a snippet of text looks visually the same, but does not trigger a confirmation, just deletes the highlight. Adding a confirmation here would help with consistency but more importantly prevent accidental deletes. Trying to find a specific piece of text within a book again can be pretty frustrating.

## No way to delete tags, yet.
The tag creation interactions are slick, however currently there seems to be no way to delete a tag once it's been created. Probably not a big deal unless you're writing an article and test driving all of the features. I'm sure we'll see an update soon.

As always, thanks for reading!