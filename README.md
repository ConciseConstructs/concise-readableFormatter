# concise-readableFormatter
Format content using self-explanatory keywords instead of escaped characters

## Background
Turn this...
```
function createContent() {

  let content =
    '\t\t\tThis is the title of the content\n'
    + '\n\tGreetings, this is the beginning of the content.'
    + '\n\n\tThis is the second paragraph.'
    + '\n\n'
    + '\tSincerly yours,\n'
    + '\tX.O.'
    + '\n\n\n\n'
    + '~~~~~~~~~~~~~~~~ :-) ~~~~~~~~~~~~~~~~~'

    return content
}

module.exports = createContent()
```

into this...
```
const readableFormatter = require('./ReadableFormatter')
const a = new readableFormatter()

a.custom('paragraphStart', a.newLine + a.indentation)
a.custom('signature', makeSignature())
a.custom('footer', '~~~~~~~~~~~~~~~~ :-) ~~~~~~~~~~~~~~~~~')

function createContent() {

  let content =
    + a.triple('indentation') + `This is the title of the content`
    + a.newLine
    + a.paragraphStart +  `Greetings, this is the beginning of the content. `
    + a.newLine
    + a.paragraphStart + `This is the second paragraph.`
    + a.double('newline')
    + a.signature
    + a.times(4, 'newline')
    + a.footer

    return content
}

function makeSignature() {
  return a.indentation + `Sincerly yours,` + a.newLine
        + a.indentation + `X.O.`
}

module.exports = createContent()
```

### Summary
While writing code that automated the creation of Angular files based on external criteria, I found myself building strings for formatting content within files that was very, very ugly.  I wanted to make the strings and loops that built them read more like natural language.  this readableFormatter achieves this.
