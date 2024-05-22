
# Style Guide

## Linter

Most rules are enforced with markdownlint. If you find errors, check the [rule descriptions](https://github.com/DavidAnson/markdownlint/blob/v0.32.1/README.md#configuration) to see what might be wrong.

## Headers

Use a single H1 header at the beginning of the document. This is your title.

For the rest of the document only use H2 and H3 headers. Every H2 header should be followed with a description of the content summarized in a single sentence.

## Bullet points and lists

Since most of the bullet points and list are used to give step-by-step instructions, don't use periods to end a line. 

Example:
1. This line doesn't end with a period
2. Another item. Only use periods to separate sentences in the same line
3. Don't use periods to end a line

## Shell commands

When showing the output prefix the shell command with a dollar sign ($):

```shell
$ ls docs
getting-started using-semaphore
```

If you don't show the output of a command *do not* use the dollar sign:

```shell
ls docs
```

## Tabs

When there are multiple ways to achieve a task, use tabs to show the most important options. For instance, most of the configuration on Semaphore can be done with the visual editor or directly editing the YAML. When describing steps to do something, show both options using tabs.

To import tabs in the document:

```js
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

To use tabs:

```js
<Tabs groupId="myGroupId">
  <TabItem value="option1" label="Label 1">
  Markdown explaining option 1
  </TabItem>
  <TabItem value="option2" label="Label 2">
  Markdown explaining option 1
  </TabItem>
</Tabs>
```

The `groupID` is optional. Tabs sharing a group id will switch together through the document.

