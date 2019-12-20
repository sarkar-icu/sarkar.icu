# Contributions Guide

Contributions are welcome.

## Helping with Translations

See [this guide](https://github.com/sarkar-icu/sarkar.icu/wiki/Help-with-Translations) on the wiki

## Website

We use middleman for building the website. Check the list of open issues at <https://github.com/sarkar-icu/sarkar.icu/issues>,
and leave a comment on the issue before working on something.

## Suggestions

If you have other suggestions, please leave a comment [on this issue](#16).

## Design

If you'd like to help with poster design or layout, please [file an issue](https://github.com/sarkar-icu/sarkar.icu/issues/new)

## Awareness

If you'd like to help out by raising awareness, link people to the following addresses:

- <https://sarkar.icu> - Communications Guide for Internet Shutdown
- <https://volunteer.sarkar.icu> - Volunteer

Download the posters from https://github.com/sarkar-icu/sarkar.icu/releases and share them.

## Anything else

Reach out to us via the form at <https://volunteer.sarkar.icu>

## How to add a new language

All the YAML files live in `locales`. New ones can be created by adding a new language in [GitLocalize](https://gitlocalize.com/repo/3672/) or manually as a file in that directory. If you add it manually:

* Copy `en.yml`, rename it to, for example, `nag.yml`.
* Change the second line of the YAML file to reflect the language code
* Update the strings
* Add the language name and code in the array in `source/_languages.erb`
* Add the language in `poster-maker/gimmeposters.js`. Copy an existing language's code and make sure to update the `page.goto` URI and the `code.screenshot` file name to use the correct language code.

## How to generate posters

In the root of the repo:

```
cd poster-maker
npm install
node gimmeposters.js
```

This will generate the posters and save them in the right place.
