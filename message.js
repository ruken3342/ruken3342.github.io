
function message() {

    let a = (Math.floor(Math.random() * 3));   
    console.log(a);
    switch (a) {
        case (1): console.log('Hiedy ho!');
        break;
        case (2): console.log('Howdy stranger!');
        break;
        case (3): console.log('Hit me baby.');
        break;
        default: console.log('Error sir.');
        break;
    }
}

message();
