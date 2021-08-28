const dopromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('ahh shit')
    }, 2000)
})

dopromise.then((result) => {
    console.log('success', result)
}).catch((error) => {
    console.log('error', error)
})