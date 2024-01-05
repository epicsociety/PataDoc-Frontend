import React from 'react'

const HeroSection = () => {
  return (
    <>
        <div>
        <div>
            <h2>Find your Doctor or Take Appointments</h2>
            <p>Explore our services to find the right practitioner for you.</p>
            <a href="/specialists">Book Appointment</a>
            <a href="#" >Learn More</a>
        </div>

        <div >
            {/* <img src="{{ url_for('static', filename='images/doctor.jpg') }}"  alt="Doctor Image"> */}
                <img src="/doctor.jpg" alt="Doctor Image" />
            <a href="#" >Book Appointment</a>
        </div>
    </div>

    <div>
        <h2>What We Do</h2>
        <p> At PataDoc, we are more than just a digital healthcare platform; we are your gateway to a healthier, happier life. Imagine a world where finding the right healthcare specialist is as easy as a few clicks. PataDoc brings this vision to life, connecting you with a diverse array of medical experts all across Kenya. Our revolutionary platform is designed to seamlessly bridge the gap between patients and healthcare specialists, ensuring that you can easily navigate the vast landscape of healthcare services. Gone are the days of endless searches and confusing directories. We empower you to effortlessly locate and engage with the perfect healthcare specialist, making your well-being our top priority. Join us on this transformative healthcare experience, where convenience meets expertise, and your journey to optimal health begins with a simple click.
        </p>
    </div>

    <section>
        <h2>Most Sought Services</h2>
        <div>
            <div >
                <span>👶</span>
                <h2>Paediatrics and Child Health</h2>
                <p>Our dedicated paediatricians provide expert care for your little ones, ensuring their health and well-being from infancy through adolescence. Trust us to nurture the health of your most precious treasures.</p>
                <span>➡️</span>
            </div>

            <div>
                <span>⚕️</span>
                <h2>Surgery</h2>
                <p>Experience top-notch surgical care with our skilled and compassionate surgeons. From routine procedures to complex surgeries, we prioritize your safety and recovery at every step of the surgical journey.</p>
                <span>➡️</span>
            </div>

            <div>
                <span>🤰</span>
                <h2>Obstetrics and Gynaecology</h2>
                <p>Our obstetric and gynaecological experts are committed to providing comprehensive care for women's health. Whether you are expecting a new addition to your family or seeking routine women's healthcare services, we are here for you.</p>
                <span>➡️</span>
            </div>
        </div>
    </section>

    <div>
    <div>
        {/* <img src="{{ url_for('static', filename='images/doctor2.jpg') }}"  alt="Doctor Image"> */}
        <img src="/doctor2.jpg" alt="Doctor Image" />
        <a href="#herosection" className='text-black'>Find Your Doctor</a>
    </div>
    <div>
        <h2>Why PataDoc</h2>
        <b> 50+ Experienced Practitioners </b>
        <p>Embark on your healthcare journey with confidence as PataDoc boasts a team of 50+ seasoned practitioners. Our experts bring a wealth of experience.</p>
        <b>24/7 Instant Support</b>
        <p>Need assistance at any hour? PataDoc stands out with 24/7 instant support, providing you with peace of mind and timely answers to your healthcare queries.</p>
        <b>Verified Reviews</b>
        <p>PataDoc ensures transparency and credibility with verified reviews. Our community shares their experiences, empowering you to make informed choices and fostering a trusting relationship with our practitioners.</p>
        <a href="#" >Book Appointment</a>
        <a href="#" >Learn More</a>
    </div>
    </div>
    </>
  )
};

export default HeroSection