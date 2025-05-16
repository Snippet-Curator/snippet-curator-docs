---
title: Import Notes
description: Importing files into Curator.
---

Currently, 3 ways of importing is supported: via Evernote, SingleFile, and desktop Files.

## Evernote

Export Evernote files as [.enex files](https://help.evernote.com/hc/en-us/articles/209005557-Export-Notes-and-Notebooks-as-ENEX-or-HTML). 

Files with same names are not uploaded.

Following fields are imported:

| .enex      | Curator    |
|------------|------------|
| title      | note title      |
| created    | created date  |
| source     | source     |
| source-url | source url |
| tags | tags |
| files | embedded if possible |

Some caveats to Evernote imports include following:
- since .enex do not include Notebooks, you will have to manually import the notes into the notebook you want
- tags are imported as tags. However, nested structures are not saved in .enex files and are not imported
- created date is used from Evernote as created date in Curator. This allows preservation of original save date

## SingleFile

[SingleFile](https://github.com/gildas-lormeau/SingleFile) is a browser extension that allows you to save webpages. It's the closest tool to Evernote's clipper that I can find. 

SingleFile will save webpages to .html.

## Files

All other files ending not in .enex or .html are uploaded as individual files. Each file is its own note. A date is added to the end of the file.

![](/images/file.png)

## How Different Files Are Displayed


### Snippet

Snippets are web pages that contain multiple different elements, including text, images, and styles. 

Curator will try to preserve the styles as much as posssible. Here is an example snippet saved from Reddit:

![](/images/reddit.png)

Curator will make changes to the colors of the text and background. When dark theme is applied, by default you'll see black text on white background and vice versa if you saved the page in dark mode:

![](/images/reddit-dark-disabled.png)

Curator will change both the text and background colors to match to make it less jarring:

![](/images/reddit-dark.png)





### Images 

Images are typically embedded, including Gifs:

<video autoplay muted loop>
  <source src="/images/gif.mp4" type="video/mp4">
</video>

### Video

Video files will have controls to allow you to play/pause.

<video autoplay muted loop>
  <source src="/images/video.mp4" type="video/mp4">
</video>

### Audio

Similarly, supported audio files will be embedded to include controls.

![](/images/audio.png)

### Other Types of Files

Unsupported files will be imported as a link to a file:

![](/images/voicemail.png)


 