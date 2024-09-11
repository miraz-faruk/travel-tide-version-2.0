import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
    return (
        <div className="text-center p-5">
            <h1 className="text-4xl font-bold text-center mb-5">
                <Typewriter
                    words={['About Us']}
                    loop={1}
                    cursor
                    cursorStyle=""
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            <Fade>
                <p className="text-lg mb-3">
                    Welcome to Travel Tide! We are dedicated to helping you explore the best destinations in Southeast Asia.
                </p>
            </Fade>
            <Fade>
                <p className="text-lg mb-3">
                    Our mission is to provide detailed and accurate information about tourist spots, ensuring you have an unforgettable travel experience.
                </p>
            </Fade>
            <Fade>
                <p className="text-lg">
                    Whether you are looking for stunning beaches, cultural experiences, or adventurous activities, our team is here to guide you every step of the way.
                </p>
            </Fade>
        </div>
    );
};

export default About;