            var fullImgBox= document.getElementById('fullImgBox');
            var fullImg= document.getElementById('fullImg');
            console.log(fullImg)

            function openFullImg(pic){
                fullImgBox.style.transform = 'scale(1)'
                fullImg.src=pic
            }
            function closeFullImg(){
                fullImgBox.style.transform = 'scale(0)'
            }