const post = require("bent") ("POST", {"Content-Type": "application/soap+xml"})
const template = require("fs").readFileSync(__dirname + "/body.xml", "utf-8")

const URL = process.env.TCKIMLIK_URL || 'https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?WSDL'

const generateBody = (params) =>
  Object.keys(params)
    .reduce((str, param) =>
      str.replace("₺" + param, params[param]), template)

module.exports = (params) =>
  post(URL, generateBody(params))
    .then(e => e.text())
    .then(e => {
      const match = e.match("Result>(true|false)</")
      return match
        ? match[1] === "true"
        : Promise.reject("Invalid response")
    })