import ImageSlider from "./hero2";
const Hero = () => {
  const slides = [
      { url: "http://www.myinceptiontech.com/img/slide/slide-1.jpg", caption: 'first'},
      { url: "http://www.myinceptiontech.com/img/slide/slide-2.jpg",caption : 'second' },
      { url: "http://www.myinceptiontech.com/img/slide/slide-3.jpg", caption : 'third' },
    ];
  const containerStyles = {
    width: "100%",
    height: "800px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Hero;




// import React from 'react'
// import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image'

// const slides = [
//   { url: "http://www.myinceptiontech.com/img/slide/slide-1.jpg", caption : 'first'},
//   { url: "http://www.myinceptiontech.com/img/slide/slide-2.jpg",caption : 'second' },
//   { url: "http://www.myinceptiontech.com/img/slide/slide-3.jpg", caption : 'third' },
// ];

// const divStyle = {
//   display:'flex',
//   alignItems: "center",
//   justifyContent: "center",
//   height: "400px",
//   backgroundSize: 'cover'
// }

// const spanStyle = {
//   fontSize: "20px",
//   background: "efefef",
//   color: "#000000"
// }

// export default function hero() {
//   return (
//     <div>
//         <Slide>
//           {slides.map((image, index) =>(
//             <div key={index}>
//               <div style={{...divStyle,backgroundImage = `url(${image.url})`}}>
//                 <span style={{spanStyle}}>{image.caption}</span>
//               </div>
//             </div>
//           ))}
//         </Slide>
//     </div>
//   )
// }




// import React from 'react'
// export default function Hero() {
//   return (
//     <div>
//         <section id="hero">
//         <div class="hero-container">
//             <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

//                 <ol class="carousel-indicators" id="hero-carousel-indicators">
//                     <li data-target="#heroCarousel" data-slide-to="0" class="active"></li>
//                     <li data-target="#heroCarousel" data-slide-to="1" class=""></li
//                     ><li data-target="#heroCarousel" data-slide-to="2" class=""></li>
//                 </ol>

//                 <div class="carousel-inner" role="listbox">
//                     {/* Slide 1 */}
//                     <div class="carousel-item active" style="background-image: url('http://www.myinceptiontech.com/img/slide/slide-1.jpg');">
//                         <div class="carousel-container">
//                             <div class="carousel-content container">
//                                 <h2 class="animate__animated animate__fadeInDown">Welcome to <span>My Inception</span></h2>
//                                 <p class="animate__animated animate__fadeInUp"></p>
//                                 <a href="http://www.myinceptiontech.com/about_us" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Slide 2 */}
//                     <div class="carousel-item" style="background-image: url('http://www.myinceptiontech.com/img/slide/slide-2.jpg');">
//                         <div class="carousel-container">
//                             <div class="carousel-content container">
//                                 <h2 class="animate__animated animate__fadeInDown">Software Consulting and Development </h2>
                                
//                                 <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Slide 3 */}
//                     <div class="carousel-item" style="background-image: url('http://www.myinceptiontech.com/img/slide/slide-3.jpg');">
//                         <div class="carousel-container">
//                             <div class="carousel-content container">
//                                 <h2 class="animate__animated animate__fadeInDown">Recruitment and Training</h2>

//                                 <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
//                     <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
//                     <span class="sr-only">Previous</span>
//                 </a>
//                 <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
//                     <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
//                     <span class="sr-only">Next</span>
//                 </a>

//             </div>
//         </div>
//     </section>
//     </div>
//   )
// }
