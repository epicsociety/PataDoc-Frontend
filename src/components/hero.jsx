import React from "react";
import "../styles/base.css";

const Hero = () => {
  return (
    <>
      {/* <div class="container"> */}
      <div class="hero-section">
        <div class="column">
          <h2>Find your Doctor or Take Appointments</h2>
          <p>Explore our services to find the right practitioner for you.</p>
          <a href="/specialists" class="btn">
            Book Appointment
          </a>
          <a href="#" class="btn">
            Learn More
          </a>
        </div>
        <div class="column">
          <img src="/doctor.jpg" alt="Doctor Image" />
          <a href="#" class="btn">
            Book Appointment
          </a>
        </div>
      </div>
      <div class="what-we-do">
        <h2 class="headers">What We Do</h2>
        <p>
          {" "}
          At PataDoc, we are more than just a digital healthcare platform; we
          are your gateway to a healthier, happier life. Imagine a world where
          finding the right healthcare specialist is as easy as a few clicks.
          PataDoc brings this vision to life, connecting you with a diverse
          array of medical experts all across Kenya. Our revolutionary platform
          is designed to seamlessly bridge the gap between patients and
          healthcare specialists, ensuring that you can easily navigate the vast
          landscape of healthcare services. Gone are the days of endless
          searches and confusing directories. We empower you to effortlessly
          locate and engage with the perfect healthcare specialist, making your
          well-being our top priority. Join us on this transformative healthcare
          experience, where convenience meets expertise, and your journey to
          optimal health begins with a simple click.
        </p>
      </div>
      <section>
        <h2 class="headers">Most Sought Services</h2>
        <div class="services">
          <div class="what-we-do-column">
            <span class="top-icon">👶</span>
            <h2>Paediatrics and Child Health</h2>
            <p>
              Our dedicated paediatricians provide expert care for your little
              ones, ensuring their health and well-being from infancy through
              adolescence. Trust us to nurture the health of your most precious
              treasures.
            </p>
            <span
              // class="bottom-arrow"
              onclick="location.href='#a-to-doctors'"
            >
              ➡️
            </span>
          </div>
          <div class="what-we-do-column">
            <span class="top-icon">⚕️</span>
            <h2>Surgery</h2>
            <p>
              Experience top-notch surgical care with our skilled and
              compassionate surgeons. From routine procedures to complex
              surgeries, we prioritize your safety and recovery at every step of
              the surgical journey.
            </p>
            <span
              // class="bottom-arrow"
              onclick="location.href='#a-to-doctors'"
            >
              ➡️
            </span>
          </div>
          <div class="what-we-do-column">
            <span class="top-icon">🤰</span>
            <h2>Obstetrics and Gynaecology</h2>
            <p>
              Our obstetric and gynaecological experts are committed to
              providing comprehensive care for women's health. Whether you are
              expecting a new addition to your family or seeking routine women's
              healthcare services, we are here for you.
            </p>
            <span
              // class="bottom-arrow"
              onclick="location.href='#a-to-doctors'"
            >
              ➡️
            </span>
          </div>
        </div>
      </section>
      <div class="Why-us">
        <div class="column">
          <img src="/doctor2.jpg" alt="Doctor Image" />
          <a href="#" class="btn">
            Find Your Doctor
          </a>
        </div>
        <div class="why-us-column">
          <h2 class="headers">Why PataDoc</h2>
          <b> 50+ Experienced Practitioners </b>
          <p>
            Embark on your healthcare journey with confidence as PataDoc boasts
            a team of 50+ seasoned practitioners. Our experts bring a wealth of
            experience.
          </p>
          <b>24/7 Instant Support</b>
          <p>
            Need assistance at any hour? PataDoc stands out with 24/7 instant
            support, providing you with peace of mind and timely answers to your
            healthcare queries.
          </p>
          <b>Verified Reviews</b>
          <p>
            PataDoc ensures transparency and credibility with verified reviews.
            Our community shares their experiences, empowering you to make
            informed choices and fostering a trusting relationship with our
            practitioners.
          </p>
          <a href="#" class="btn">
            Book Appointment
          </a>
          <a href="#" class="btn">
            Learn More
          </a>
        </div>
      </div>
      <div class="Why-us">
        <div class="about-us">
          <h2 class="headers">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            rem ullam, officiis, corrupti, dicta esse pariatur cupiditate sequi
            dignissimos natus aliquam quisquam alias non vel provident!
            Doloremque esse magnam blanditiis!
          </p>
          <h2 class="header-about-us">Your Solutions</h2>
          <ul>
            <li>Choose a Specialist</li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              incidunt suscipit soluta quos fugit et autem molestias
            </p>
            <li>Make a Schedule</li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              incidunt suscipit soluta quos fugit et autem molestias
            </p>
            <li>Get your Solutions</li>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              incidunt suscipit soluta quos fugit et autem molestias
            </p>
          </ul>
        </div>
        <div class="column">
          <img src="/doctor3.PNG" alt="Doctor Image" />
        </div>
      </div>

      <div class="what-we-do">
        <h2 class="specialist-header">Meet Our Specialist Doctor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis eos
          velit amet alias iste accusantium sed, natus repellat, hic quae ipsam.
          Ipsam, praesentium adipisci. Minima eveniet omnis culpa distinctio
          quia.
        </p>
        <div class="services">
          <div class="what-we-do-column">
            <img src="/doctor4.PNG" alt="Doctor Image" />
            <h2>Dr. Shojib Ahmed</h2>
            <p>General Surgeon</p>
          </div>
          <div class="what-we-do-column">
            <img src="/doctor5.PNG" alt="Doctor Image" />
            <h2>Dr. Shojib Ahmed</h2>
            <p>General Surgeon</p>
          </div>
          <div class="what-we-do-column">
            <img src="/doctor6.PNG" alt="Doctor Image" />
            <h2>Dr. Shojib Ahmed</h2>
            <p>General Surgeon</p>
          </div>
          <div class="what-we-do-column">
            <img src="/doctor7.PNG" alt="Doctor Image" />
            <h2>Dr. Shojib Ahmed</h2>
            <p>General Surgeon</p>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer">
          <div>
            <img src="/footer-logo.PNG" alt="" />
            <a>NewsLetter</a>
            <a>Heart Disease</a>
            <a>Dental Care</a>
          </div>

          <ul>
            <h2>Services</h2>
            <a href="/specialists" class="footer-links">
              Book Appointment{" "}
            </a>
            <a href="/specialists" class="footer-links">
              Emergencies
            </a>
            <a href="/specialists" class="footer-links">
              Heart Disease
            </a>
          </ul>

          <ul>
            <h2>Links</h2>
            <a href="/home" class="footer-links">
              Home{" "}
            </a>
            <a href="/about" class="footer-links">
              About
            </a>
            <a href="/contact" class="footer-links">
              Contact Us
            </a>
          </ul>
        </div>
        <div class="footer-base">
          <h2>Winfred & Isaac </h2>
          <div class="Divider"></div>
          <p>
            &copy; Copyright Patadoc {new Date().getUTCFullYear()}. All right
            reserved
          </p>
        </div>
      </footer>

      {/* </div> */}
    </>
  );
};

export default Hero;
