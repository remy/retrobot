# Retrobot

A retrospective bot for Slack (inspired by [@PebbleKat's retrobot](https://github.com/PebbleKat/retrobot) 💙).

The bot will record anonymous retrospective feedback and then display in a group channel in a random order.

## Install and deploy

Heroku is the simplest deploy target. You will need a Slack Bot token.

```bash
$ git clone https://github.com/remy/retrobot.git retrobot
$ cd retrobot
$ heroku create
$ heroku config:set SLACK_TOKEN=<YOUR-SLACK-TOKEN>
$ git push heroku master
```

The bot should then join your Slack group.

## How to

In your retrospective channel (call it what you will), invite the retrobot and start the session:

```text
> /invite @retrobot
> @retrobot: start
< 🔔 Retrospective is now recording
```

Each participant in the channel the retrospective was start in, will receive a DM asking them for their retrospective feedback.

Items that "worked well" are prefixed with a `+`. Items that "need work" are prefixed with a `-`. For example, in a private DM session with the retrobot:

```text
> + regular cake Friday
> - morning laps around the office when we arrive late
```

Items that don't start with the `+/-` prefix will be echoed back as ignored.

Once the retro is over, in the group channel stop the retrospective:

```text
> @retrobot: stop
```

The retrobot will then print out a shuffled list of all the worked well, and needs work items. Each item can be voted on using then 👍 emoji, and the group can use this to decide how to create action items out of the retrospective.

### Auto ending the retrospective

You can set an auto-end for the retrospective using an argument to the `start` command. The supported shorthand is a number, then `s` for seconds, `m` for minutes. For example, the following will auto end the retrospective after 10 minutes:

```text
> @retrobot start 10m
< 🔔 Retrospective is now recording, and will auto end in 10s
```

### Custom responses

If you want a little fun with the retrobot, you can set some simple responses to specific queries. The retrobot will read the environment for keys starting with `SAY_` and use the use the value as an alias.

For example, if there is an environment value of `SAY_HEY='Hey there yourself :wave:', then the retrobot can respond as such:

```text
> @retrobot hey
< Hey there yourself 👋
```

Everything after `SAY_` is set to lowercase and only the first word relpied to the retrobot is used in the lookup.

## Notes

- Editing and deleting an item isn't supported (only the old message is seen)
- Retrobot will not invite users who are away or have an active do not disturb mode enabled
