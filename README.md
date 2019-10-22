# Photo Market Template
[![Build Status](https://travis-ci.com/photo-market/photo-market-template.svg?branch=master)](https://travis-ci.com/photo-market/photo-market-template)

This repository contains latest version of Photo Market template.

## Inspiration websites
- https://www.designersinsights.com/designer-resources/designing-responsive-website/
- https://www.thumbtack.com/il/chicago/photographers/
- https://unsplash.com/
- https://www.workbook.com/
- https://dribbble.com/Steven_Noble
- https://www.behance.net/stevennoble

## Workflow
We use branch-per-feature method.
https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

### How to implement new functionality / make a fix?
1. Create new branch from "develop" branch
2. Commit everything 
3. Create Pull Request from your branch to "develop"

### How to release?
1. Create Pull Request from "develop" to "master"
2. Review and merge it


# Chat 
## Chat security considerations
1. Enable CORS
2. Implement rate limiting
3. Restrict payload size
4. Create a solid communication protocol  
   Something like:
   `Client to Server (or vice versa): { status: "ok"|"error", event: EVENT_NAME, data: <any arbitrary`  
    Drop the connection immediately and log the IP address of the user if the message format differs.
    https://github.com/hapijs/joi
5. Authenticate users before WS connection establishes 
   pass some authentication data to websocket. It could be a header like X-Auth-Token: <some token assigned to this client on login>. By default, cookies would be passed anyway.
6. Use SSL over websockets
Details: https://www.freecodecamp.org/news/how-to-secure-your-websocket-connections-d0be0996c556/


## Chat architecture
* **POST: /api/v1/chats/** — Creates a new chat between two users.
* **GET: /api/v1/chats/** — Lists all chats the logged-in user belongs to.
* **POST: /api/v1/chats/:idChat/messages/** — Adds a new message to a specific chat.
* **GET: /api/v1/chats/:idChat/messages/** — Lists all interactions between users on a specific chat.
https://cheesecakelabs.com/blog/simple-chat-architecture-mvp/