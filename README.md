# My Trello Integrations

I use Trello to organize my personal todos both at home and at work. I wanted a way to be able to easily send emails from GMail and Slack messages to my Trello board so I made some integrations for it by using Google Apps Scripts and Zapier.

## GMail --> Trello

I star important emails in GMail, but sometimes I want to be able to create a card in Trello that keeps the reference to the email. To be able to do this and still be able to star messages, I found out that when you right click an email you get the option to "Add to Tasks". Therefor this integration use a time based trigger to check if a task has been added and creates a Trello card if found.

The integration itself is currently implemented in [Google Apps Scripts](https://script.google.com/), because it's basically free.

In the script the number in the string `https://mail.google.com/mail/u/1/#all` represents the account in your Google Chrome browser. It's starts at 0, which is the first account your logged in with. For me, 0 is my personal email/account and 1 is my work email/account, hence why it's 1 as I use this script only for work.

## Slack --> Trello

I currently use Zapier for this and their free quota has been sufficient for now. Planning on moving this to a cloud function at AWS or GCP when I feel like it.