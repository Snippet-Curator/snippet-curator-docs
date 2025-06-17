---
title: Import Notes
description: Importing files into Curator.
---

Currently, 4 ways of importing is supported: Evernote, SingleFile, other files, and youtube URLs.

## Evernote

Export Evernote files as [.enex files](https://help.evernote.com/hc/en-us/articles/209005557-Export-Notes-and-Notebooks-as-ENEX-or-HTML). There area also several scripts that can export for you. I used the one [here](https://github.com/vzhd1701/evernote-backup).


Exports with the same title and date in the Enex files are considered duplicate and not uploaded. Following fields are imported:

| ENEX     | Curator    |
|------------|------------|
| title      | note title      |
| created    | created date  |
| source     | source     |
| source-url | source url |
| tags | tags |
| latitude| latitude |
| longitude | longitude |
| files | embedded if possible |

Some caveats to Evernote imports include following:
- since .enex do not include Notebooks, you will have to manually import the notes into the notebook you want
- tags are imported. However, nested structures are not saved in .enex files and are not imported
- created date is used from Evernote as created date in Curator. This allows preservation of original save date

## SingleFile

[SingleFile](https://github.com/gildas-lormeau/SingleFile) is an open source browser extension that allows you to save webpages. It's the closest tool to Evernote's clipper that I can find. 

SingleFile will save webpages to .html.

## Files

All other files ending not in .enex or .html are uploaded as individual files. Each file is its own note. A date is added to the end of the file.

![](/images/file.png)

## Youtube URLs

I've always hated how it's difficult to manage youtube save playlists, see which videos are not working anymore, or search for the right one. This function is made to help with that.

You can add youtube urls to to save youtube videos. The videos are not downloaded (there are other tools you can use to download and then merge the video into the note). This is mainly useful for organizing youtube playlists. You do need a [youtube API](https://console.cloud.google.com/apis/library/youtube.googleapis.com) to get started.

![](/images/youtube-save.png)

The saved format is very barebone, and only includes title, thumbnail, embedded video, and description:

![](/images/youtube-content.png)

The embedded version of youtube will require internet to work. It's also not perfect. Youtube or the video uploader will often place restrictions on whether a video can be embedded or not. I found it hit or miss on which ones can be played while embedded:

![](/images/youtube-unavailable.png)


## How Different Saved Items Are Displayed

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

While videos are supported, it's probably not a good idea to include huge files (over 1GB). Part of it is because of the database's [limitation](https://pocketbase.io/docs/files-handling/) with file size. It would also be difficult to sync huge files down the line if sync becomes available. 

### Audio

Similarly, supported audio files will be embedded to include controls. Importantly, Evernote uses .amr as their audio files, which are not natively embedded. 

![](/images/audio.png)

### PDF

PDFs will be displayed with a PDF viewer. While they can be viewed, search will not search within PDF files. If searching and organizing PDF files are a priority, I recommend using other systems designed for that such as [Paperless-ngx](https://docs.paperless-ngx.com/). 

![](/images/pdf.png)


### Other Types of Files

Unsupported files will be imported as a link to a file:

![](/images/voicemail.png)


## Dark Mode

Curator will try to preserve the styles as much as posssible. Here is an example snippet saved from Reddit in light mode:

![](/images/reddit.png)

When dark theme is applied, by default you'll see black text on white background and vice versa if you saved the page in dark mode:

![](/images/reddit-dark-disabled.png)

Curator will make changes to the colors of the text and background to make it less jarring:

![](/images/reddit-dark.png)

This is not perfect. I recommend turning off extensions that change the default page colors before saving (e.g. Dark Reader and Reddit Enhancement Suite).


 