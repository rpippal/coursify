"use client"
import { HandFist, Shield, Dumbbell, Leaf, Eye, Mountain, Mic2, Users, Video, Globe, BarChart, Camera, BookOpen, Mic, Heart, Headphones, Footprints, Music, Star, Smile, Code, Smartphone, Zap, Layers, Briefcase, Feather, Repeat, Award } from "lucide-react";

const educators = [
    {
        id: "1",
        name: "Karan Pant",
        email: "testtt@gmail.com",
        role: "Web Developer",
        sub: "FOUNDER OF MORKO TECH | 17+ YRS IN TECH INDUSTRY",
        about: "Expert in coding, software development, and guiding students toward impactful careers.",
        heading: [
            "Master Full Stack Development -",
            "From Start to End in 90 Days"
        ],
        image: "https://images.unsplash.com/photo-1716471081169-cb8528a395d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img: "https://images.unsplash.com/photo-1716471081169-cb8528a395d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        para: "Transform your career with comprehensive full-stack development training. Learn industry-standard tools, build real-world projects, and gain the confidence to tackle any web development challenge from frontend to backend.",
        a: "Ready to become a job-ready full-stack developer? Join thousands of students who have launched successful tech careers through this proven curriculum.",
        whatYouLearn: [
            {
                title: "Frontend Foundations",
                description: "Master HTML, CSS, JavaScript, and modern frameworks like React."
            },
            {
                title: "Backend Development",
                description: "Learn Node.js, Express, databases, and API design."
            },
            {
                title: "Full Stack Projects",
                description: "Build complete applications integrating frontend and backend."
            },
            {
                title: "Industry Best Practices",
                description: "Learn code quality, deployment, and real-world development workflows."
            },
        ],
        checkpoints: [
            { label: "Problem Solving", icon: <Zap size={20} /> },
            { label: "Responsive Design", icon: <Smartphone size={20} /> },
            { label: "Performance Optimization", icon: <Layers size={20} /> },
            { label: "Modern Frameworks (Next.js)", icon: <Code size={20} /> },
            { label: "Real-World Projects", icon: <Briefcase size={20} /> },
        ],
        price: 199,
        students: 15420,
        rating: 4.9,
        courses: 12,
    },
    {
        id: "2",
        name: "Rohan Das",
        email: "rohandas@example.com",
        role: "Indian Flute Expert",
        sub: "CLASSICAL MUSICIAN | 10+ YRS EXPERIENCE",
        about: "Mastering Indian classical flute and helping students develop musical skills from beginner to advanced level.",
        heading: [
            "Learn Indian Classical Flute -",
            "From Beginner to Expert in 90 Days"
        ],
        image: "https://images.unsplash.com/photo-1742483377314-b0faf3d9f86e?q=80&w=687&auto=format&fit=crop",
        img: "https://images.unsplash.com/photo-1742483377314-b0faf3d9f86e?q=80&w=687&auto=format&fit=crop",
        para: "Rohan Das has trained hundreds of students worldwide. His teaching focuses on technique, expression, and musical understanding. Learn to master the bansuri with authentic classical training methods.",
        a: "Through personalized guidance, you'll develop the skills and confidence to perform classical melodies with mastery and emotional depth.",
        whatYouLearn: [
            {
                title: "Finger Foundation & Grip Control",
                description: "Strengthen control and flexibility for effortless flute play."
            },
            {
                title: "Melody Recognition & Ear Training",
                description: "Improve your ability to identify and reproduce melodies accurately."
            },
            {
                title: "Octave Mastery",
                description: "Learn to navigate octaves with confidence and speed."
            },
            {
                title: "Raga Techniques & Emotion",
                description: "Express deep emotions using classical Raga techniques."
            },
        ],
        checkpoints: [
            { label: "Breath Control", icon: <Feather size={20} /> },
            { label: "Melody Precision", icon: <Music size={20} /> },
            { label: "Rhythm & Timing", icon: <Repeat size={20} /> },
            { label: "Stage Performance", icon: <Star size={20} /> },
            { label: "Classical & Contemporary Techniques", icon: <Award size={20} /> },
        ],
        price: 199,
        students: 8760,
        rating: 4.8,
        courses: 6,
    },
    {
        id: "3",
        name: "Micheal Jackson",
        email: "michealjackson@example.com",
        role: "Professional Dancer",
        sub: "KING OF POP | Legendary Performer & Choreographer",
        about: "Micheal Jackson revolutionized dance with his iconic style. Learn techniques, rhythm, and stage performance from the master himself.",
        heading: [
            "Master Dance Moves -",
            "From Basics to Iconic Performance in 90 Days"
        ],
        image: "https://images.unsplash.com/photo-1565784796667-98515d255f7d?q=80&w=707&auto=format&fit=crop",
        img: "https://images.unsplash.com/photo-1565784796667-98515d255f7d?q=80&w=707&auto=format&fit=crop",
        para: "Micheal Jackson has inspired millions through his signature moves and electrifying performances. Learn the fundamentals of dance, body control, and how to captivate audiences with your presence.",
        a: "Get personalized training on footwork, rhythm, and performance style to truly embody the art of dance and develop your unique stage persona.",
        whatYouLearn: [
            {
                title: "Footwork & Coordination",
                description: "Develop precise footwork and body coordination for flawless routines."
            },
            {
                title: "Rhythm & Timing",
                description: "Master rhythm and musicality to synchronize movements with music."
            },
            {
                title: "Signature Moves",
                description: "Learn iconic dance steps and incorporate them into performances."
            },
            {
                title: "Stage Presence & Expression",
                description: "Express emotion and confidence to captivate any audience."
            },
        ],
        checkpoints: [
            { label: "Footwork Precision", icon: <Footprints size={20} /> },
            { label: "Rhythm Control", icon: <Music size={20} /> },
            { label: "Energy & Agility", icon: <Zap size={20} /> },
            { label: "Performance Confidence", icon: <Star size={20} /> },
            { label: "Expression & Style", icon: <Smile size={20} /> },
        ],
        price: 199,
        students: 21340,
        rating: 4.9,
        courses: 10,
    },
    {
        id: "4",
        name: "Arijit Singh",
        email: "arijitsingh@example.com",
        role: "Singer & Music Composer",
        sub: "Melody King | Bollywood Playback Singer & Composer",
        about: "Arijit Singh has captured hearts with soulful melodies. Learn vocal techniques, emotional expression, and song rendition from the maestro himself.",
        heading: [
            "Master Singing Techniques -",
            "From Basics to Bollywood Hits in 90 Days"
        ],
        image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=687&auto=format&fit=crop",
        img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=687&auto=format&fit=crop",
        para: "Arijit Singh's mastery in singing makes him one of the most versatile vocalists. Learn pitch control, breathing, and emotive singing techniques that have made him a household name in Indian music.",
        a: "Gain hands-on experience in vocal modulation, emotional expression, and song performance for any stage or recording studio setting.",
        whatYouLearn: [
            {
                title: "Voice Control & Modulation",
                description: "Strengthen your vocal range and control for versatile singing."
            },
            {
                title: "Breathing Techniques",
                description: "Learn correct breathing methods to sustain notes and improve clarity."
            },
            {
                title: "Emotional Expression",
                description: "Convey emotions effectively through your voice and performance."
            },
            {
                title: "Song Interpretation & Performance",
                description: "Understand song dynamics and perform with confidence on stage."
            },
        ],
        checkpoints: [
            { label: "Vocal Warm-Up", icon: <Mic size={20} /> },
            { label: "Pitch Accuracy", icon: <Music size={20} /> },
            { label: "Expression", icon: <Heart size={20} /> },
            { label: "Listening Skills", icon: <Headphones size={20} /> },
            { label: "Stage Presence", icon: <Star size={20} /> },
        ],
        price: 199,
        students: 32150,
        rating: 4.9,
        courses: 14,
    },
    {
        id: "5",
        name: "Ujjwal Patel",
        email: "ujjwal@example.com",
        role: "YouTuber & Educator",
        sub: "Social Awareness & Informative Content Creator",
        about: "Ujjwal Patel educates millions with informative videos. Learn critical thinking, content creation, and audience engagement strategies directly from him.",
        heading: [
            "Master Content Creation -",
            "From Idea to Viral Video in 90 Days"
        ],
        image: "https://images.unsplash.com/photo-1605089103010-bcba7ca9b10d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img: "https://images.unsplash.com/photo-1605089103010-bcba7ca9b10d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        para: "Learn how to research topics, structure videos, and communicate effectively to create meaningful content that educates and engages millions of viewers worldwide.",
        a: "Hands-on guidance on scripting, shooting, editing, and publishing videos that educate and engage your audience while building a sustainable content career.",
        whatYouLearn: [
            {
                title: "Content Research & Analysis",
                description: "Learn to research topics deeply and present them with clarity."
            },
            {
                title: "Scriptwriting & Storytelling",
                description: "Create engaging scripts that educate and entertain."
            },
            {
                title: "Video Production & Editing",
                description: "Learn shooting techniques, editing, and post-production tips."
            },
            {
                title: "Audience Engagement & Growth",
                description: "Understand your audience and grow your channel effectively."
            },
        ],
        checkpoints: [
            { label: "Video Production", icon: <Video size={20} /> },
            { label: "Global Awareness", icon: <Globe size={20} /> },
            { label: "Data Analysis", icon: <BarChart size={20} /> },
            { label: "Photography & Visuals", icon: <Camera size={20} /> },
            { label: "Knowledge Sharing", icon: <BookOpen size={20} /> },
        ],
        price: 199,
        students: 18920,
        rating: 4.7,
        courses: 9,
    },
    {
        id: "6",
        name: "Rashmika Mandanna",
        email: "rashmika@example.com",
        role: "Communication & Soft Skills Coach",
        sub: "Master Effective Communication & Public Speaking",
        about: "Rashmika Mandanna helps learners enhance their communication, confidence, and interpersonal skills for professional and personal growth.",
        heading: [
            "Master Communication Skills -",
            "From Basics to Confident Speaking in 90 Days"
        ],
        image: "https://images.unsplash.com/photo-1731461298149-5c9c2da04741?q=80&w=687&auto=format&fit=crop",
        img: "https://images.unsplash.com/photo-1731461298149-5c9c2da04741?q=80&w=687&auto=format&fit=crop",
        para: "Learn to speak confidently, communicate effectively, and present yourself professionally in any situation. Build the soft skills that employers value most.",
        a: "Hands-on exercises, real-life scenarios, and mentorship to build powerful communication and soft skills that will transform your career and personal relationships.",
        whatYouLearn: [
            {
                title: "Verbal Communication",
                description: "Develop clear articulation and persuasive speech techniques."
            },
            {
                title: "Non-Verbal Communication",
                description: "Master body language, gestures, and eye contact for impact."
            },
            {
                title: "Confidence & Public Speaking",
                description: "Overcome fear of speaking and deliver presentations with confidence."
            },
            {
                title: "Interpersonal Skills & Networking",
                description: "Build strong relationships and professional connections effectively."
            },
        ],
        checkpoints: [
            { label: "Confidence Building", icon: <Smile size={20} /> },
            { label: "Effective Speaking", icon: <Mic2 size={20} /> },
            { label: "Empathy & EQ", icon: <Heart size={20} /> },
            { label: "Team Collaboration", icon: <Users size={20} /> },
            { label: "Personal Excellence", icon: <Star size={20} /> },
        ],
        price: 199,
        students: 14560,
        rating: 4.8,
        courses: 8,
    },
    {
        id: "7",
        name: "Abhishek Singh",
        email: "abhishek@example.com",
        role: "Nature Photographer & Visual Storyteller",
        sub: "Learn Photography & Storytelling from Nature's Lens",
        about: "Abhishek Singh guides aspiring photographers in capturing stunning visuals and telling compelling stories through photography.",
        heading: [
            "Master Nature Photography -",
            "From Basics to Professional Shots in 90 Days"
        ],
        image: "https://images.unsplash.com/photo-1579504344957-c09070053c7e?q=80&w=1170&auto=format&fit=crop",
        img: "https://images.unsplash.com/photo-1579504344957-c09070053c7e?q=80&w=1170&auto=format&fit=crop",
        para: "Learn the art of framing, lighting, and composition to capture nature's beauty in every shot. From wildlife to landscapes, master the technical and creative aspects of photography.",
        a: "Hands-on guidance on camera techniques, editing, and visual storytelling to create impactful photography that tells powerful stories through images.",
        whatYouLearn: [
            {
                title: "Camera Basics & Techniques",
                description: "Understand camera settings, lenses, and exposure for perfect shots."
            },
            {
                title: "Composition & Framing",
                description: "Learn visual storytelling through composition and perspective."
            },
            {
                title: "Lighting & Editing",
                description: "Master natural lighting and post-processing techniques for stunning results."
            },
            {
                title: "Field Work & Observation",
                description: "Develop patience, observation skills, and creativity in real-world photography."
            },
        ],
        checkpoints: [
            { label: "Camera Mastery", icon: <Camera size={20} /> },
            { label: "Travel Photography", icon: <Globe size={20} /> },
            { label: "Nature Observation", icon: <Leaf size={20} /> },
            { label: "Attention to Detail", icon: <Eye size={20} /> },
            { label: "Landscape Composition", icon: <Mountain size={20} /> },
        ],
        price: 199,
        students: 11230,
        rating: 4.7,
        courses: 7,
    },
    {
        id: "8",
        name: "Mike Tyson",
        email: "miketyson@example.com",
        role: "Professional Boxer & Fitness Coach",
        sub: "Train Like a Champion – Boxing & Fitness Mastery",
        about: "Mike Tyson helps learners build strength, agility, and boxing skills, combining fitness routines with real-world techniques from a world champion.",
        heading: [
            "Master Boxing & Fitness -",
            "From Basics to Pro Level in 90 Days"
        ],
        image: "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop",
        img: "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop",
        para: "Learn boxing fundamentals, advanced techniques, and fitness routines to achieve peak physical performance. Train with the intensity and discipline of a world champion.",
        a: "Hands-on coaching, training schedules, and strategy insights to develop boxing skills and overall athleticism that will transform your body and mind.",
        whatYouLearn: [
            {
                title: "Boxing Fundamentals",
                description: "Learn stance, footwork, punches, and defensive moves."
            },
            {
                title: "Strength & Conditioning",
                description: "Build endurance, agility, and strength for maximum performance."
            },
            {
                title: "Advanced Boxing Techniques",
                description: "Master combos, counter-attacks, sparring strategies, and fight IQ."
            },
            {
                title: "Mental Toughness & Focus",
                description: "Develop discipline, mindset, and concentration like a champion."
            },
        ],
        checkpoints: [
            { label: "Power Punching", icon: <HandFist size={20} /> },
            { label: "Defense Skills", icon: <Shield size={20} /> },
            { label: "Strength Training", icon: <Dumbbell size={20} /> },
            { label: "Agility & Movement", icon: <Zap size={20} /> },
            { label: "Champion Mindset", icon: <Star size={20} /> },
        ],
        price: 199,
        students: 19870,
        rating: 4.9,
        courses: 11,
    },
];

export default educators;

export const getEducatorImages = () => {
    const images = {};
    educators.forEach(educator => {
        images[educator.id] = educator.image;
    });
    return images;
};

export const getEducatorById = (id) => {
    return educators.find(e => e.id === String(id));
};

export const getAllEducatorIds = () => {
    return educators.map(e => e.id);
};