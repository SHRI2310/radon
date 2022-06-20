let axios = require("axios")
const { isObjectIdOrHexString } = require("mongoose")

let landonWeather = async function (req, res) {
    try {
        let city = req.query.q
        let app = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app}`
        }
        let result = await axios(options);
        console.log(result.data);
        res.status(200).send({  city:city, temp:result.data.main.temp })

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })

    }
}

let citiesAndTemp = async function (req, res) {

    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let objArr = []; //to store objet of city and temp
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=e4d21ee83be84059ec0a437473d57f36`)

            obj.temp = result.data.main.temp

            objArr.push(obj)
        }

        let sortedArray = objArr.sort(function (a, b) { return a.temp - b.temp })

        res.status(200).send({ data: sortedArray })

    } catch (error) {
        console.log(error)
        res.status(500).send({ msg: error.message })
    }


}

module.exports.landonWeather = landonWeather
module.exports.citiesAndTemp = citiesAndTemp