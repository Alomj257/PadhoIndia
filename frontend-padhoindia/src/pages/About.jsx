import React from "react";
import { Typography, Avatar, Image, Row, Col, Divider } from "antd";
import { FaLinkedin, FaTwitter, FaEnvelope, FaEye, FaBullseye } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const boardMembers = [
    {
        name: "Rohit Sharma",
        position: "Founder & CEO",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        linkedin: "#",
        twitter: "#",
        email: "rohit@padhoindia.com"
    },
    {
        name: "Priya Verma",
        position: "COO",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        linkedin: "#",
        twitter: "#",
        email: "priya@padhoindia.com"
    },
    {
        name: "Amit Patel",
        position: "CTO",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        linkedin: "#",
        twitter: "#",
        email: "amit@padhoindia.com"
    }
];

const galleryImages = [
    "https://source.unsplash.com/300x200/?education",
    "https://source.unsplash.com/300x200/?students",
    "https://source.unsplash.com/300x200/?learning",
    "https://source.unsplash.com/300x200/?classroom",
    "https://source.unsplash.com/300x200/?books",
    "https://source.unsplash.com/300x200/?university"
];

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen p-8">

            {/* Main Layout */}
            <Row gutter={[24, 24]}>

                {/* Left Section */}
                <Col xs={24} md={12}>
                    <div className="bg-gradient-to-r from-blue-100 to-blue-300 text-center p-10 rounded-lg shadow-lg">
                        <Title level={2} className="text-3xl font-semibold text-blue-700">About Padho India</Title>
                        <Paragraph className="mt-4 text-lg leading-relaxed text-gray-800">
                        Padho India is a revolutionary educational initiative committed to making quality education accessible to every child, regardless of their financial background. Our mission is to empower students with free online tuition, ensuring that financial constraints do not hinder their learning journey.
                        </Paragraph>
                        <Paragraph className="mt-4 text-lg leading-relaxed text-gray-800">
                        We believe that education is the key to unlocking a brighter future. Through Padho India, we offer free online classes covering all subjects for students from Class 5 to 12. Our platform provides comprehensive learning resources, including live interactive sessions, practical classes, and expert guidance to help students excel academically.
                        </Paragraph>
                        <Paragraph className="mt-4 text-lg leading-relaxed text-gray-800">At Padho India, we understand the aspirations of parents who dream of seeing their children become successful professionals in fields like IT, engineering, and medicine. To support these dreams, we provide free training programs in engineering, software development, and other in-demand sectors. Our goal is to bridge the gap between talent and opportunity by offering accessible and high-quality education </Paragraph>
                        <Paragraph className="mt-4 text-lg leading-relaxed text-gray-800">In addition to empowering students, Padho India also supports junior advocates by arranging financial assistance. This helps them remain dedicated to their legal profession without being burdened by financial struggles</Paragraph>
                        <Paragraph className="mt-4 text-lg leading-relaxed text-gray-800">Padho India is not just an educational platform—it is a movement dedicated to building a stronger, smarter, and brighter nation by ensuring that every child has the opportunity to learn, grow, and succeed.</Paragraph>
                        <Paragraph className="text-sm">Thank you </Paragraph>
                    </div>
                </Col>

                {/* Right Section with Vision and Mission */}
                <Col xs={24} md={12}>
                    <div className="space-y-8">

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                            <div className="flex items-center">
                                <FaEye className="text-blue-500 text-5xl mr-4" />
                                <Title level={3} className="text-blue-600 text-2xl">Our Vision</Title>
                            </div>
                            <Divider />
                            <Paragraph className="text-lg text-gray-700 leading-relaxed">
                                Equal education for all: We envision a future where every child, regardless of their
                                socioeconomic background, has access to quality education that empowers them to build a brighter future.
                            </Paragraph>
                            <Paragraph className="text-lg text-gray-700 leading-relaxed">
                                Bridging the digital divide: By integrating technology into learning, we aim to
                                connect students in rural and underserved areas with global educational resources.
                            </Paragraph>
                            <Paragraph className="text-lg text-gray-700 leading-relaxed">
                                Promoting lifelong learning: Our goal is to cultivate a culture of continuous
                                learning, equipping students with the skills needed to thrive in a rapidly evolving world.
                            </Paragraph>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-8 rounded-lg shadow-md transition hover:shadow-lg">
                            <div className="flex items-center">
                                <FaBullseye className="text-green-500 text-5xl mr-4" />
                                <Title level={3} className="text-blue-600 text-2xl">Our Mission</Title>
                            </div>
                            <Divider />
                            <Paragraph className="text-lg text-gray-700 leading-relaxed">
                                Providing scholarships: We offer fully-funded scholarships to students from economically
                                disadvantaged backgrounds, ensuring they have the resources to pursue their education without barriers.
                            </Paragraph>
                            <Paragraph className="text-lg text-gray-700 leading-relaxed">
                                Empowering through mentorship: Our mentorship programs connect students with industry
                                experts, guiding them through career planning and skill development.
                            </Paragraph>
                            <Paragraph className="text-lg text-gray-700 leading-relaxed">
                                Enhancing digital literacy: We equip students with essential digital skills to thrive in
                                the modern workforce, closing the gap between education and employment.
                            </Paragraph>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Board of Members */}
            <div className="bg-white py-12">
                <div className="max-w-5xl mx-auto">
                    <Title level={4} className="text-center text-blue-600 text-xl mb-4">Board of Members</Title>
                    <Row gutter={[24, 24]} justify="center">
                        {boardMembers.map((member, index) => (
                            <Col xs={24} md={8} key={index}>
                                <div className="text-center bg-gray-50 p-6 rounded-lg shadow-md transition hover:shadow-lg">
                                    <Avatar size={80} src={member.image} className="mb-4" />
                                    <Title level={5} className="text-md">{member.name}</Title>
                                    <Paragraph className="text-gray-500 text-sm">{member.position}</Paragraph>
                                    <div className="flex justify-center space-x-4 mt-3">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="text-blue-500 text-xl hover:scale-105 transition" />
                                        </a>
                                        <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                                            <FaTwitter className="text-blue-400 text-xl hover:scale-105 transition" />
                                        </a>
                                        <a href={`mailto:${member.email}`}>
                                            <FaEnvelope className="text-red-500 text-xl hover:scale-105 transition" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

            {/* Gallery */}
            <div className="bg-white py-12 px-6">
                <div className="max-w-5xl mx-auto">
                    <Title level={3} className="text-center text-blue-600 text-2xl mb-8">Gallery</Title>
                    <Row gutter={[16, 16]} justify="center">
                        {galleryImages.map((src, index) => (
                            <Col xs={12} md={8} key={index}>
                                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
                                    <Image src={src} alt={`Gallery ${index + 1}`} className="rounded-lg" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

        </div>
    );
};

export default AboutPage;
