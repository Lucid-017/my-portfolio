console.log(this)
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
            $(document).ready(function () {
        

                const filterContainer = document.querySelector(".gallery-filter"),
                galleryItems = document.querySelectorAll(".gallery-item");
        
                filterContainer.addEventListener("click", (event) =>{
                  if(event.target.classList.contains("filter-item")){
                    // deactivate existing active 'filter-item'
                    filterContainer.querySelector(".active").classList.remove("active");
                    // activate new 'filter-item'
                    event.target.classList.add("active");
                    const filterValue = event.target.getAttribute("data-filter");
                    galleryItems.forEach((item) =>{
                      if(item.classList.contains(filterValue) || filterValue === 'all'){
                        item.classList.remove("hide");
                        item.classList.add("show");
                      }
                      else{
                        item.classList.remove("show");
                        item.classList.add("hide");
                      }
                    });
                  }
                });
              
                //nav icon animation
                $(".first-button").on("click", function () {
                  $(".animated-icon1").toggleClass("open");
                });
                $(".second-button").on("click", function () {
                  $(".animated-icon2").toggleClass("open");
                });
                $(".third-button").on("click", function () {
                  $(".animated-icon3").toggleClass("open");
                });
              });