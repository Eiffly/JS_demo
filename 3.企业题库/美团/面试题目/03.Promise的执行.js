setTimeout(() => console.log('a'));
Promise.resolve().then(
    () => console.log('b')
).then(
    () => Promise.resolve('c').then(
        (data) => {
            setTimeout(() => console.log('d'));
            console.log('f');
            return data;
        }
    )
    // .then(() => console.log('m'))
).then(data => console.log(data));



