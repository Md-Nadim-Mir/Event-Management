
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const History = () => {

    useEffect(() => {

        AOS.init({ duration: 2500 });

    }, [])

    return (
        <div className='md:px-4'>
            <div className="flex items-center justify-center px-2">

                <img data-aos="zoom-in" className="rounded-xl " src="/public/meetings/m4.jpg" alt="" />

            </div>

            <div className="font-bold lg:px-40 px-4 py-20">

                <h1 data-aos="fade-up" className="text-2xl md:text-5xl font-bold py-5 text-[#36e8f8]">Our Company <span className='text-black'>History</span></h1>

                <h1 data-aos="zoom-in">The firms early years were marked by its focus on accounting and engineering practices. James McKinsey aimed to apply principles of accounting to management and organizational structure, pioneering a systematic approach to solving business problems. However, after McKinseys early death in 1937, the firm shifted its focus to general management consulting under the leadership of Marvin Bower.</h1>


                <h1 data-aos="fade-up" className="py-8">Marvin Bower, who became the firms managing director in 1950, was instrumental in shaping McKinseys principles and methodologies. Bower emphasized professionalism, client focus, and a dedication to providing advice based on rigorous analysis and expertise. During his tenure, McKinsey grew substantially, expanding both its client base and global reach.</h1>


                <h1 data-aos="zoom-in">In the 1970s and 1980s, McKinsey further solidified its reputation as a premier consulting firm, advising Fortune 500 companies on critical strategic and operational issues. The firm pioneered the concept of the up or out policy, encouraging consultants to advance within the organization or pursue opportunities elsewhere.</h1>

                <h1 data-aos="fade-up" className="py-8">
                    Throughout the 20th century, McKinsey contributed significantly to the evolution of management consulting, introducing concepts such as the McKinsey 7S Framework, the Three Horizons of Growth, and the War for Talent. These frameworks helped organizations navigate complex challenges and drive growth.<br />However, McKinsey also faced challenges and controversies. In the early 2000s, the firm faced scrutiny related to its involvement with Enron and other corporate scandals. Additionally, allegations of overbilling and unethical behavior raised concerns about the firms practices and ethical standards.
                </h1>
            </div>


            <div className="font-bold lg:px-40 px-4 py-10">

                <h1 data-aos="fade-up" className="text-2xl md:text-5xl font-bold py-5 text-[#36e8f8]">Our Company <span className='text-black'>Future Mission</span></h1>

                <h1 data-aos="fade-up">In the rapidly evolving landscape of the 21st century, Paradigm Enterprises envisions a future where technological innovation seamlessly integrates with sustainable practices to create a world of enhanced well-being for all. Our mission is to be at the forefront of this transformative journey, propelling progress by pioneering groundbreaking advancements that prioritize sustainability, inclusivity, and societal progress.</h1>


                <h1 data-aos="zoom-in" className="py-8">As we embrace this vision, our first and foremost goal is to lead the charge in sustainable technology. We commit ourselves to developing solutions that minimize our ecological footprint and promote a harmonious coexistence with our planet. Through extensive research and development, we aim to create products that leverage renewable resources, reduce waste, and support a circular economy. Our firm will continuously strive to harness green energy, optimize resource usage, and foster environmentally conscious practices across industries.</h1>


                <h1 data-aos="fade-up">In tandem with sustainability, Paradigm Enterprises is dedicated to promoting inclusivity and equality. We envision a future where technological advancements bridge gaps and provide equal opportunities for all individuals, regardless of their background, abilities, or circumstances. Our mission is to design accessible technologies that empower marginalized communities, ensuring that no one is left behind in the rapidly progressing digital era. We will actively collaborate with organizations, governments, and communities to facilitate digital literacy and inclusion, thereby fostering a more equitable and connected world.</h1>

                <h1 data-aos="zoom-in" className="py-8">
                    In line with our commitment to global well-being, Paradigm Enterprises recognizes the importance of health and wellness in the future landscape. Our objective is to harness the potential of technology to improve healthcare outcomes, enhance mental well-being, and drive preventive care. We will invest in research that advances telemedicine, personalized healthcare solutions, and mental health support systems. By leveraging data analytics and artificial intelligence, we aim to revolutionize patient care, making it more personalized, accessible, and effective.
                </h1>
            </div>
        </div>
    );
};

export default History;