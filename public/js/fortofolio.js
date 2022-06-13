const cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.link a');
let sosmeds = document.querySelectorAll('.sosmed');
const cursor1 = document.querySelector('.cursor1');
const namaa = document.querySelector('.sections');
const nama1 = document.querySelector('.kesatu');
const nama2 = document.querySelector('.kedua');
const nama3 = document.querySelector('.ketiga');
const nama4 = document.querySelector('.keempat');

        document.addEventListener('mousemove', e => {

            cursor.setAttribute("style", "top: " +(e.pageY)+"px; left: "+(e.pageX)+"px;")
            cursor1.setAttribute("style", "top: " +(e.pageY)+"px; left: "+(e.pageX)+"px;")
        })

        links.forEach(link => {
            link.addEventListener("mouseleave", () => {
                link.classList.remove("hovered-link");
                cursor.classList.remove("link-hover");
            });
            link.addEventListener("mouseover", () => {
                link.classList.add("hovered-link");
                cursor.classList.add("link-hover");
            });
        });

        let cv = document.querySelectorAll('.downloadcv a')
        cv.forEach(cvv => {
            cvv.addEventListener("mouseleave", () => {
                cvv.classList.remove("hovered-link");
                cursor.classList.remove("link-hover");
            });
            cvv.addEventListener("mouseover", () => {
                cvv.classList.add("hovered-link");
                cursor.classList.add("link-hover");
            });
        });

        let logo = document.querySelectorAll('.logo')
        logo.forEach(logoo => {
            logoo.addEventListener("mouseleave", () => {
                cursor.classList.remove("link-hover");
                cursor1.classList.remove("hovered-logo");
            });
            logoo.addEventListener("mouseover", () => {
                cursor.classList.add("link-hover");
                cursor1.classList.add("hovered-logo");
            });
        });

        links.forEach(link => {
            link.addEventListener("click", () => {
                namaa.classList.add("anim");
                setTimeout(() => {
                    namaa.classList.remove("anim");
                }, 1000);

                nama1.classList.add("anim1");
                setTimeout(() => {
                    nama1.classList.remove("anim1");
                }, 1300);

                nama2.classList.add("anim1");
                setTimeout(() => {
                    nama2.classList.remove("anim1");
                }, 1300);

                nama3.classList.add("anim1");
                setTimeout(() => {
                    nama3.classList.remove("anim1");
                }, 1300);

                nama4.classList.add("anim1");
                setTimeout(() => {
                    nama4.classList.remove("anim1");
                }, 1300);

            } );
        });

        

            
          
    
          

        // lings.forEach(ling => {
        //     ling.addEventListener("mouseleave", () => {
        //         ling.classList.remove("hovered-link");
        //         cursor.classList.remove("link-hover");
        //     });
        //     link.addEventListener("mouseover", () => {
        //         link.classList.add("hovered-link");
        //         cursor.classList.add("link-hover");
        //     });
        // });

        sosmeds.forEach(sosmed => {
            sosmed.addEventListener("mouseleave", () => {
                sosmed.classList.remove("hovered-link");
                cursor.classList.remove("link-hover");
            });
            sosmed.addEventListener("mouseover", () => {
                sosmed.classList.add("hovered-link");
                cursor.classList.add("link-hover");
            });
        });

        // let namaa = document.querySelector('.sections')
        // links.forEach(link => {
        //     link.addEventListener("click", () => {
        //         nama.classList.add("link-hover");
                
        //         setTimeout(() => {
        //             namaa.classList.remove("link-hover");
        //         }, 500)
        //     });
        // });

        var loading = document.getElementById("loading");

        window.addEventListener('load', function(){
            loading.style.display = "none";
        });

        function klik() {
            alert('Selamat Datang!');
        }

        // alert("Selama Datang");

        var slideIndex = 1;
        showSlides(slideIndex);
        
        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        // Thumbnail image controls
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("section");
          var dots = document.getElementsByClassName("link");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        }


// if (window.history.replaceState) {
//         window.history.replaceState(null,null, window.location.href);
//     }

    // var info = document.getElementById("p");
    // info.innerHTML = "Message sent! Thank you for contacting us..";
var info = document.getElementById('p');
var alertt = document.getElementById('alert');
function respon() {
    alertt.style.display = 'block';
    // info.innerHTML = 'Message sent! Thank you for contacting us..';
    // document.location.href = 'index.php';

    setTimeout(() => {
        alertt.style.display = 'none';
    }, 3000);
}

function myFunction() {
    var namee,emaill,subjectt,messagee;

    namee = document.getElementById("name").value;
    emaill = document.getElementById("email").value;
    subjectt = document.getElementById("subject").value;
    messagee = document.getElementById("message").value;
  
    // Get the value of the input field with id="numb"
    // x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    //|| emaill === "" || subjectt === "" || messagee === ""
    if (namee === "" || emaill === "" || subjectt === "" || messagee === "") {
        respon();
        alertt.classList.add("danger");
        alertt.classList.remove("success");
        info.innerHTML = 'Columns Cannot be empty.';
    } else {
        respon();
        alertt.classList.remove("danger");
        alertt.classList.add("success");
        info.innerHTML = 'Message sent! Thank you for contacting us..';
    }
  }
