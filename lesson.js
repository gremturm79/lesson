let aImg = ['2.jpg', '3.jpg', '4.jpg',];
console.log(aImg);
let picture = document.querySelectorAll('img');
console.log(picture);

let num_1 = document.querySelector('.num_1').value;
console.log(num_1)

let num_2 = document.querySelector('.num_2')
console.log(num_2)

let butt = document.querySelector('.change');
console.log(butt);
butt.addEventListener('click', change_picture);
function change_picture() {
    let num_1 = document.querySelector('.num_1').value;
    let num_2 = document.querySelector('.num_2').value;
    console.log(num_1);
    console.log(num_2);
    if (num_1 <= 3 && num_2 <= 3) {

        /*  picture[num_1 - 1].src = aImg[num_2 - 1].src;
         picture[num_2 - 1].src = aImg[num_1 - 1].src; */
        let num_3 = picture[num_1 - 1].src;
        picture[num_1 - 1].src = picture[num_2 - 1].src
        picture[num_2 - 1].src = num_3;


        /*  picture[[num_1], [num_2]].src = picture[[num_2], [num_1]].src; */
        /*  picture[[num_2], [num_1]].src = picture[[num_1], [num_2]].src; */

        /*  picture[num_1 - 1].src = picture[num_2 - 1].src;
 
         picture[num_2 - 1].src = picture[num_1 - 1].src; */
        console.log(picture[0])
        console.log(picture[1])
        console.log(picture[2])

    }


}


