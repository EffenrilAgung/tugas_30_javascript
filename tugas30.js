const regex = (value) => {
    var data = value.match(/e/g)
    var data2 = value.match(/s/g)
    var result1 = data.slice(0, 2)
    var result3 = data.slice(2, 4)
    var result2 = result1.concat(data2, result3)
    console.log(result2)

}
regex(
    "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat"
);