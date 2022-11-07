const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()
const port = 9900

app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// endpoint "/test" dengan method GET
app.get("/test", (req,res) => {
    // req merupakan variabel yang berisi data request
    // res merupakan variabel yang berisi data response dari end-point
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
    message: "Ini end-point pertama ku",method: req.method,
    code: res.statusCode
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)

})


// menjalankan server pada port 8000
app.listen(9900, () => {
    console.log("Server run on port 8000");
   })

   app.get("/profil/:name/:age", (req,res) => {
    
     // :name dan :age → diberikan titik dua didepan menunjukkan "name"dan "age"
     // bersifat dinamis yang dapat diganti nilai nya saat melakukan request
     // menampung data yang dikirimkan

     let name = req.params.name // mengambil nilai pada parameter name
     let age = req.params.age // mengambil nilai pada parameter age
     // membuat objek yang berisi data yang akan dijadikan response
     // response berisi data nama dan umur sesuai dengan nilai parameter

     let response = {
     nama: name,
     umur: age
     }
     // memberikan response dengan format JSON yang berisi objek di atas
     res.json(response)
    })

     //---------------------------------------------------------------------------------------------------------------------------------------------------
     // praktikum 1 node
     // NO. 1
   app.post('/kubus', (req, res) => {
    let sisi = Number(req.body.sisi)
    let volume = sisi * sisi * sisi
    let luasP = sisi * sisi * 6

    let response = {
        panjang_sisi: sisi,
        result: {
            volume: volume,
            Luas_Permukaan: luasP
        }
    }
    res.json(response)
})

app.post('/balok', (req, res) => {
    let p = Number(req.body.panjang)
    let l = Number(req.body.lebar)
    let t = Number(req.body.tinggi)

    let volume = p * l * t
    let luasP = 2 * ((p * l) + (l * t) + (p * t))
    let response = {
        panjang: p,
        lebar: l,
        tinggi: t,
        result: {
            volume: volume,
            Luas_Permukaan: luasP
        }
    }
    res.json(response)
})

app.post('/bola', (req, res) => {
    let diameter = Number(req.body.D)
    let jari = diameter / 2
    let phi = 22 / 7

    let luasP = 4 * phi * jari * jari
    let volume = 4 / 3 * phi * jari * jari * jari
    let response = {
        diameter: diameter,
        jari_jari: jari,
        result: {
            volume: volume,
            Luas_Permukaan: luasP
        }
    }
    res.json(response)
})

app.post('/tabung', (req, res) => {
    let diameter = Number(req.body.D)
    let tinggi = Number(req.body.tinggi)
    let jari = diameter / 2
    let phi = 22 / 7

    let volume = 2 * (phi * jari * jari) * tinggi
    let luasP = 2 * phi * jari * (jari + tinggi)

    let response = {
        diameter: diameter,
        jari_jari: jari,
        result: {
            volume: volume,
            Luas_Permukaan: luasP
        }
    }
    res.json(response)
})

   // NO. 2

   app.get('/convert/celcius/:angka', (req, res) => {

    const celcius = Number(req.params.angka)
    const reamur = 4 / 5 * parseInt(celcius)
    const fahrenheit = (9 / 5 * parseInt(celcius)) + 32
    const kelvin = parseInt(celcius) + 10

    let response={
        Celcius: celcius,
        Reamur : reamur,
        Fahrenheit : fahrenheit,
        Kelvin : kelvin
    }

    res.json(response)
})


app.get('/convert/reamur/:angka', (req, res) => {

    const reamur = req.params.angka
    const celcius = 5 / 4 * parseInt(reamur)
    const fahrenheit = (9 / 4 * parseInt(reamur)) + 32
    const kelvin = (5 / 4 * parseInt(reamur)) + 273

    let response={
        Celcius: celcius,
        Reamur : reamur,
        Fahrenheit : fahrenheit,
        Kelvin : kelvin
    }

    res.json(response)
    })


app.get('/convert/kelvin/:angka', (req, res) => {

    const kelvin = req.params.angka
    const celcius = parseInt(kelvin) - 273
    const fahrenheit = 9 / 5 * (parseInt(kelvin) - 273) + 32
    const reamur = 4 / 5 * (parseInt(kelvin) - 273)

    let response={
        Celcius: celcius,
        Reamur : reamur,
        Fahrenheit : fahrenheit,
        Kelvin : kelvin
    }

    res.json(response)
    })
    app.get('/convert/fahrenheit/:angka', (req, res) => {

        const fahrenheit = req.params.angka
        const reamur = 4 / 9 * (parseInt(fahrenheit) - 32)
        const celcius = 5 / 9 * (parseInt(fahrenheit) - 32)
        const kelvin = 5 / 9 * (parseInt(fahrenheit) - 32) + 273
        let response={
            Celcius: celcius,
            Reamur : reamur,
            Fahrenheit : fahrenheit,
            Kelvin : kelvin
        }
    
        res.json(response)
        })

        // NO. 3

        app.post("/convert/biner/:angka", (req,res) => {
            const angka = Number(req.params.angka)
            const desimal = angka.toString(10)
            const oktal = angka.toString(8)
            const heksadesimal = angka.toString(16)
            let response = {
                angka: angka,
                result:{
                    Desimal: desimal,
                    Oktal: oktal,
                    Heksadesimal: heksadesimal
                }
            }
            res.json(response)
        })
        app.post("/convert/biner", (req,res) => {
            let no = Number(req.body.no)
            let desimal = parseInt(no, 2).toString(10)
            let oktal = parseInt(no, 2).toString(8)
            let heksadesimal = parseInt(no, 2).toString(16)
            let response = {
                angka: no,
                result:{
                    Desimal: desimal,
                    Oktal: oktal,
                    Heksadesimal: heksadesimal
                }
            }
        res.json(response)
        })
        app.post("/convert/desimal/:no", (req,res) => {
            let no = req.body.no
            let biner = parseInt(no, 10).toString(2)
            let oktal = parseInt(no, 10).toString(8)
            let heksadesimal = parseInt(no, 10).toString(16)
            let response = {
                No: no,
                result:{
                    Biner: biner,
                    Oktal: oktal,
                    Heksadesimal: heksadesimal
                }
            }
        res.json(response)
        })
        app.post("/convert/oktal/:no", (req,res) => {
            let no = req.body.no
            let biner = parseInt(no, 8).toString(2)
            let desimal = parseInt(no, 8).toString(10)
            let heksadesimal = parseInt(no, 8).toString(16)
            let response = {
                No: no,
                result:{
                    Biner: biner,
                    Desimal: desimal,
                    Heksadesimal: heksadesimal
                }
            }
        res.json(response)
        })
        app.post("/convert/heksadesimal/:no", (req,res) => {
            let no = req.body.no
            let biner = parseInt(no, 16).toString(2)
            let desimal = parseInt(no, 16).toString(10)
            let oktal = parseInt(no, 16).toString(8)
            let response = {
                No: no,
                result:{
                    Biner: biner,
                    Desimal: desimal,
                    Oktal: oktal
                }
            }
        res.json(response)
        })
        

        // NO. 4

app.post('/bmi', (req, res) => {
    let tb = Number(req.body.tinggi)
    let bb = Number(req.body.berat)

    let bmi = bb / (tb * tb)
    let status;
    if (bmi < 18.5) {
        status = "Kekurangan Berat Badan"
    } else if (bmi < 24.9) {
        status = "Normal (ideal)"
    } else if (bmi < 29.9) {
        status = "Kelebihan Berat Badan"
    } else {
        status = "Kegemukan"
    }

    let response = {
        tinggi: tb,
        berat: bb,
        bmi: bmi,
        status: status
    }
    res.json(response)

})
       
// NO. 5

app.get('/bilangan/:angka', (req, res) => {
    let angka = Number(req.params.angka)

    let bilangan = angka % 2
    let message
    if (bilangan == 0) {
        message = "ini bilangan Genap"
    } else if (bilangan == 1) {
        message = "ini bilangan Ganjil"
    }
    let response = {
        angka: angka,
        bilangan: message

    }
    res.json(response)
})
