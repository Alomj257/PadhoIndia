import React from 'react'
import "./Vailist.css"



const images = [
    { src: "/Assets/wp16.jpg", alt: "Product 1", desc: "1ST Winner will get Rs. 2000" },
    
    
  ];
  const images1 = [
    { src: "/Assets/wp16.jpg", alt: "Product 1", desc: "Others top ten winners will get Rs.1000" },
    
    
  ];
  
  const Blocklevel = [
    { src: "/Assets/wp4.jpg", alt: "Product 1", desc: "PRIZE : 1st winner Rs. 50,000/- Scholarship " },
    
  ];
  const Blocklevel1 = [
    
    { src: "/Assets/wp21.jpg", alt: "Product 2", desc: "Consolation : 2nd to 11th top winner Rs. 10,000/- Scholarship (Each)" },
    // { src: "/assets/wp4.jpg", alt: "Product 3", desc: "Consolation :12nd to 92nd top wonner Rs.5000/-Scholarship(Each)" },
  
  ];
  const Blocklevel2 = [
    
    { src: "/Assets/wp4.jpg", alt: "Product 3", desc: "Consolation :12nd to 92nd top wonner Rs.5000/-Scholarship(Each)" },
  
  ];
  
  const Districtlevel = [
    { src: "/Assets/wp17.jpg", alt: "Product 1", desc: "1st BMW Bike " },
    { src: "/Assets/wp15.jpg", alt: "Product 2", desc: "2nd KTM Bike" },
    { src: "/Assets/wp14.jpg", alt: "Product 3", desc: "3rd Pulsar Bike" },
    { src: "/Assets/wp3.jpg", alt: "Product 3", desc: "4th Scooty " },
    { src: "/Assets/wp13.jpg", alt: "Product 3", desc: "5th Laptop" },
  
  ];
  
  const Districtlevel2 = [
    { src: "/Assets/ip.jpg", alt: "Product 1", desc: "Addition : 92 pcs I-Pads (Total 92 Pcs) " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "Rs. 1,00,000/- cash for traveling" },
    
  ];
  
  const STATElevel = [
    { src: "/Assets/wp2.jpg", alt: "Product 1", desc: "24 Pcs Hyundai Exter Car " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "Each and Every one Rs. 50 Lakh Cash " },
    { src: "/Assets/wp18.jpg", alt: "Product 3", desc: "50 Gm Pure Gold Medal (22 carat)" },
    { src: "/Assets/wp6.jpg", alt: "Product 3", desc: "2BHK Flat" },
    // { src: "/assets/wp8.jpg", alt: "Product 3", desc: "2nd top 22 candidates will get Hyundai Car" },
    // { src: "/assets/wp4.jpg", alt: "Product 3", desc: "2nd top 22 candidates will get 10 Laks Cash" },
  
  ];
  
  const STATElevel2 = [
    // { src: "/assets/wp2.jpg", alt: "Product 1", desc: "24 Pcs Hyundai Exter Car " },
    // { src: "/assets/wp4.jpg", alt: "Product 2", desc: "Each and Every one Rs. 50 Lakh Cash " },
    // { src: "/assets/wp18.jpg", alt: "Product 3", desc: "50 Gm Pure Gold Medal (22 carat)" },
    // { src: "/assets/wp6.jpg", alt: "Product 3", desc: "2BHK Flat" },
    { src: "/Assets/wp8.jpg", alt: "Product 3", desc: "2nd top 22 candidates will get Hyundai Car" },
    { src: "/Assets/wp4.jpg", alt: "Product 3", desc: "2nd top 22 candidates will get 10 Laks Cash" },
  
  ];
  
  const Allevel = [
    { src: "/Assets/k1.jpg", alt: "Product 1", desc: "1ST ROUND 500 LOSER WILL GET 1 CRORE CASH FOR HIGHER STUDY " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "2nd Round 40 LOSER WILL GET 2 CRORE CASH " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "2nd Round 40 LOSER WILL GET  3BHK FLAT" },
    { src: "/Assets/k2.jpg", alt: "Product 3", desc: "FINAL ROUND 9 LOSER WILL GET 4 CRORE CASH " },
    { src: "/Assets/k3.jpg", alt: "Product 3", desc: "FINAL ROUND 9 LOSER WILL GET 4 BHK FLAT " },
    { src: "/Assets/k5.jpg", alt: "Product 3", desc: "FINAL ROUND 9 LOSER WILL GET  MARCEDEZ BENZ CAR" },
    // { src: "/assets/wp4.jpg", alt: "Product 3", desc: "2nd top 22 candidates will get 10 Laks Cash" },
  
  ];
  
  const SecoAllevel = [
    { src: "/Assets/wp19.jpg", alt: "Product 1", desc: "1 Kg Gold Trophy " },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "10 Crore Cash  " },
    { src: "/Assets/k6.jpg", alt: "Product 2", desc: "Jaguar Car " },
    { src: "/Assets/k7.jpg", alt: "Product 3", desc: "5 BHK Flat  " },
    { src: "/Assets/k8.jpg", alt: "Product 3", desc: "All Expenses for Abroad Study Scholarship  " },
    
  ];
  
  const thdAllevel = [
    { src: "/Assets/wp19.jpg", alt: "Product 1", desc: "500 gm Gold Trophy" },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "8 Crore Cash  " },
    { src: "/Assets/k6.jpg", alt: "Product 2", desc: "Jaguar Car " },
    { src: "/Assets/k7.jpg", alt: "Product 3", desc: "5 BHK Flat  " },
    { src: "/Assets/k8.jpg", alt: "Product 3", desc: "All Expenses for Abroad Study Scholarship  " },
    
  ];
  const FotAllevel = [
    { src: "/Assets/wp19.jpg", alt: "Product 1", desc: "250 gm Gold Trophy" },
    { src: "/Assets/wp4.jpg", alt: "Product 2", desc: "6 Crore Cash  " },
    { src: "/Assets/k6.jpg", alt: "Product 2", desc: "Jaguar Car " },
    { src: "/Assets/k7.jpg", alt: "Product 3", desc: "5 BHK Flat  " },
    { src: "/Assets/k8.jpg", alt: "Product 3", desc: "All Expenses for Abroad Study Scholarship  " },
    
  ];
const Vailist = () => {
  return (
    
        <div className="section-container">
          {/* Heading */}
          <h1 className="section-heading">PADHO INDIA SCHOLARSHIP CUP </h1>
                
          <br />
          <h1 className="section-heading">FINAL LEVEL (NATIONAL LEVEL) (TOTALLY OFFLINE)</h1>
    
          {/* Paragraph */}
          <p className="section-paragraph">
          COMPETITION : IQ AND G.K. BASED
          </p>
          <p className="section-paragraph">
          <b>1st Prize : </b>
          <br />
          {/* Aadarsh top ten winners will get Rs.1000 */}
          </p>
          
          {/* Image Grid */}
          <div className="image-row">
            {SecoAllevel.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
          
          <br />
          <br />
          <h1 className="section-heading">FINAL LEVEL (NATIONAL LEVEL) (TOTALLY OFFLINE)</h1>
    
          {/* Paragraph */}
          <p className="section-paragraph">
          COMPETITION : IQ AND G.K. BASED
          </p>
          <p className="section-paragraph">
          <b>2nd
          Prize : </b>
          <br />
          {/* Aadarsh top ten winners will get Rs.1000 */}
          </p>
          
          {/* Image Grid */}
          <div className="image-row">
            {thdAllevel.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
           
          <br />
          <br />
          <h1 className="section-heading">FINAL LEVEL (NATIONAL LEVEL) (TOTALLY OFFLINE)</h1>
    
          {/* Paragraph */}
          <p className="section-paragraph">
          COMPETITION : IQ AND G.K. BASED
          </p>
          <p className="section-paragraph">
          <b>3rd
          Prize : </b>
          <br />
          {/* Aadarsh top ten winners will get Rs.1000 */}
          </p>
          
          {/* Image Grid */}
          <div className="image-row">
            {FotAllevel.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
  
          <br />
          <h1 className="section-heading">FINAL LEVEL (NATIONAL LEVEL) (TOTALLY OFFLINE)</h1>
    
          {/* Paragraph */}
          <p className="section-paragraph">
          COMPETITION : IQ AND G.K. BASED
          </p>
          
          {/* Image Grid */}
          <div className="image-row">
            {Allevel.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
  
          <br />
          <br />
          <h1 className="section-heading">STATE LEVEL (Offline) </h1>
    
          {/* Paragraph */}
          <p className="section-paragraph">
          COMPETITION : IQ AND G.K. BASED
          </p>
          <p className="section-paragraph">
          <b>PRIZE : Each of the 24 members will go to at the next level (Final Level)  </b>
          <br />
          <br />
               <b>1st Prize:</b>
          </p>
          {/* Image Grid */}
          <div className="image-row">
            {STATElevel.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
          <br />
          <p className="section-paragraph">
          {/* <b>PRIZE : Each of the 24 members will go to at the next level (Final Level)  </b> */}
          <br />
              2nd Prize:
          </p>
          {/* Image Grid */}
          <div className="image-row">
            {STATElevel2.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
  
          <br />
          <br />
          <h1 className="section-heading">DISTRICT LEVEL (Offline)  </h1>
    
          {/* Paragraph */}
          <p className="section-paragraph">
          COMPETITION : IQ AND G.K. BASED
          </p>
          <p className="section-paragraph">
          <b>   1st Prize
   </b>
          <br />
          {/* Aadarsh top ten winners will get Rs.1000 */}
          </p>
          {/* Image Grid */}
          <div className="image-row">
            {Districtlevel.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
          <br />
          <p className="section-paragraph">
          <b>2nd Prize
   </b>
          <br />
          Remaining person will receive a prize.
          </p>
          {/* Image Grid */}
          <div className="image-row">
            {Districtlevel2.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
          
         
          <br />
  
          <h1 className="section-heading">BLOCK LEVEL (Online)  </h1>
    
    {/* Paragraph */}
    <p className="section-paragraph">
    COMPETITION : IQ AND G.K. BASED
    </p>
    <p className="section-paragraph">
    <b>1st Prize </b>
    <br />
    {/* Aadarsh top ten winners will get Rs.1000 */}
    </p>
    {/* Image Grid */}
    <div className="image-row">
      {Blocklevel.map((img, index) => (
        <div className="image-wrapper" key={index}>
          <img src={img.src} alt={img.alt} className="image-card" />
          <p className="image-description">{img.desc}</p>
        </div>
      ))}
    </div>
    <br />
    <br />
  
    <p className="section-paragraph">
    <b>2nd Prize </b>
    <br />
    {/* Aadarsh top ten winners will get Rs.1000 */}
    </p>
    {/* Image Grid */}
    <div className="image-row">
      {Blocklevel1.map((img, index) => (
        <div className="image-wrapper" key={index}>
          <img src={img.src} alt={img.alt} className="image-card" />
          <p className="image-description">{img.desc}</p>
        </div>
      ))}
    </div>
  <br />
  <br />
  <p className="section-paragraph">
    <b>3rd prize</b>
    <br />
    {/* Aadarsh top ten winners will get Rs.1000 */}
    </p>
    {/* Image Grid */}
    <div className="image-row">
      {Blocklevel2.map((img, index) => (
        <div className="image-wrapper" key={index}>
          <img src={img.src} alt={img.alt} className="image-card" />
          <p className="image-description">{img.desc}</p>
        </div>
      ))}
    </div>
  
  
    
    
          
  
  
  
  
          <h1 className="section-heading">SCHOOL AND COLLEGE LEVEL WINNER (Online)  </h1>
    
          {/* Paragraph */}
          <p className="section-paragraph">
          COMPETITION : IQ AND G.K. BASED
          </p>
          <p className="section-paragraph">
          <b>1ST Prize </b>
          <br />
          {/* Others top ten winners will get Rs.1000 */}
          </p>
          {/* Image Grid */}
          <div className="image-row">
            {images.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
          {/* <h1 className="section-heading">PADHO INDIA SCHOLARSHIP CUP </h1> */}
          <br /><br />
          <p className="section-paragraph">
          <b>2nd Prize </b>
          <br />
          {/* Others top ten winners will get Rs.1000 */}
          </p>
          {/* Image Grid */}
          <div className="image-row">
            {images1.map((img, index) => (
              <div className="image-wrapper" key={index}>
                <img src={img.src} alt={img.alt} className="image-card" />
                <p className="image-description">{img.desc}</p>
              </div>
            ))}
          </div>
         
         
          
    <p>If this level Scholarship Exam Competition is done, you will get all these awards or not
    because It's A Total Level Based Competition. You Will Win The Prize only If You Win..</p>
        </div>
    )
  }
  

export default Vailist