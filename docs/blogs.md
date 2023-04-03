# Blogs

This is document explains how we are handling blogs on the website to collecting last posts by community based on RSS feed from blogs.

## Adding a new blog

To add a new blog to the website, you should be authenticated first, then go to `dashboard` and click `Blogs` menu item.

The Blog form is pretty simple, you just need to provide the url of the blog and rss link of the blog if it's available.

When you click submit, we are going to fetch open graph meta tags from the blog url(using `metascrapper`), mainly the title,description and image of the blog and save it in the database.

If the blog has RSS feed, we are going to save it in the database too as part of the blog entity and we set `lastRSSUpdatedAt` to `2000` to indicate that we didn't fetch the last posts.

The blog will be set as draft(not the case if you are admin) and need to be approved by the admin before appearing on the website. same for collecting feed posts from the blog.

> Note: for testing purpose, you can update your role to `admin` in the database to be able to add blogs without approval.

## How we are collecting Feed posts ?

As mentioned above, we are not collecting the feed posts when the blog is added. The best way is to do it as a background job.

To achieve this, we are using two tables `blogs` and `Posts` to store the blogs and their posts respectively as well as using two job as simple serverless functions to be executed periodically.

1. A job that go throw blogs table and select least updated blogs based on `lastRSSUpdatedAt`. fetch related posts and check the last post date. Then fetch RSS feed and only add the posts that are newer than the last post date.

At this point, we only add the post url to the database and we don't fetch the open graph meta tags yet.

Note to mention that we are not using RSS to get title,description and image of the post as we cant be sure that the rss have the information we need(specially the image)

2. A job that go throw posts and add missed open graph meta tags for the posts that don't have them.
