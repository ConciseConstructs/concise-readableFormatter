class readableFormatting {

  constructor() {
    this.newLine = '\n'
    this.carriageReturn = '\r'
    this.space = ' '
    this.indentation = '\ \ '
  }



  double(format) {
    return this[format] + this[format]
  }



  triple(format) {
    return this[format] + this[format] + this[format]
  }



  times(number, format) {
    let requestedFormat = ''
    for (let i = 0; i < number; i++) requestedFormat += this[format]
    return requestedFormat
  }

  custom(name, customFormat) {
    this[name] = customFormat
  }

}
module.exports = readableFormatting