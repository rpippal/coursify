import React from 'react'
import SnakeGame from '@/components/Snakegame';
import FloatingNavButton from '@/components/FloatingNavButton';
import { Target, Users, Award, Zap, Heart, TrendingUp, Sparkles, Rocket } from 'lucide-react';

const About = () => {
    return (
        <>
        <FloatingNavButton/>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 py-16 px-6 lg:px-24">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium">Welcome to the Future of Learning</span>
                    </div>

                    <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        About Coursify
                    </h1>
                    
                    <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Founded by <span className="font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 px-2 py-1 rounded">Rochit Pippal</span>,
                        Coursify is your destination to learn skills that truly change lives.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
                    {[
                        { icon: Users, value: '10,000+', label: 'Active Learners' },
                        { icon: Award, value: '50+', label: 'Expert Educators' },
                        { icon: Rocket, value: '100+', label: 'Courses' },
                        { icon: TrendingUp, value: '95%', label: 'Success Rate' }
                    ].map((stat, idx) => (
                        <div  key={idx} className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                                <stat.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto">
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-4">
                            <Target className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium">Our Mission</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Empowering Through Education
                        </h2>
                        
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            At <span className="text-blue-400 font-semibold">Coursify</span>, our mission is simple:
                            empower learners with knowledge that matters. From coding to music,
                            fitness to communication, we bring together India's most impactful
                            mentors who guide you with practical skills, not just theory.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {['Practical', 'Affordable', 'Accessible', 'Impactful'].map((tag, idx) => (
                                <span  key={idx} className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-all cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop" alt="Learning together"
                            className="relative rounded-3xl shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"/>
                    </div>
                </div>

                <div className="mb-20 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Why Choose Coursify?
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Join thousands of learners transforming their lives
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: 'Expert Mentors',
                                description: 'Learn directly from industry leaders, artists, creators, and professionals handpicked by Rochit Pippal.',
                                gradient: 'from-blue-500 to-cyan-500'
                            },
                            {
                                icon: Zap,
                                title: 'Practical Skills',
                                description: 'Each course is designed to give you hands-on skills you can apply immediately in your career or life.',
                                gradient: 'from-purple-500 to-pink-500'
                            },
                            {
                                icon: Heart,
                                title: 'Community Driven',
                                description: 'Join a thriving community of learners who motivate, collaborate, and grow together.',
                                gradient: 'from-pink-500 to-rose-500'
                            }
                        ].map((feature, idx) => (
                            <div  key={idx} className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                
                                <div className="relative z-10">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-20 max-w-5xl mx-auto">
                    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="relative p-8 lg:p-12">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                                    <img src="https://images.unsplash.com/photo-1525389999255-82bad487f23c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rochit Pippal"
                                        className="relative mx-auto rounded-full w-64 h-64 object-cover shadow-2xl border-4 border-white/10 hover:scale-105 transition-transform duration-500"/>
                                </div>
                            </div>

                            <div className="p-8 lg:p-12 lg:pl-0">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-4">
                                    <Award className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm font-medium">Meet Our Founder</span>
                                </div>

                                <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Rochit Pippal
                                </h2>
                                
                                <p className="text-blue-400 font-semibold mb-6">
                                    Founder & Visionary
                                </p>

                                <p className="text-gray-300 leading-relaxed mb-6">
                                    A visionary entrepreneur and lifelong learner, Rochit founded
                                    <span className="text-blue-400 font-semibold"> Coursify</span> with the belief that
                                    education should be accessible, inspiring, and life-changing.
                                </p>

                                <p className="text-gray-400 leading-relaxed">
                                    His goal is to create a platform where learners connect with
                                    mentors who genuinely transform lives through practical knowledge
                                    and real-world experience.
                                </p>

                                <div className="mt-6 flex items-center gap-2">
                                    <span className="text-2xl">🚀</span>
                                    <span className="text-sm text-gray-400 italic">
                                        "Education is the most powerful weapon to change the world"
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 lg:p-12">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full border border-pink-500/30 mb-4">
                                <Sparkles className="w-4 h-4 text-pink-400" />
                                <span className="text-sm font-medium">Take a Break</span>
                            </div>

                            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                🎉 Fun Zone
                            </h2>
                            
                            <p className="text-gray-400">
                                Challenge yourself with a quick game!
                            </p>
                        </div>

                        <SnakeGame />
                    </div>
                </div>

                <div className="mt-20 text-center max-w-3xl mx-auto">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-lg mb-8 opacity-90">
                            Join thousands of learners and start transforming your life today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            
                            <a href="/courses" className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Browse Courses
                            </a>
                            
                            <a href="/dashboard" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all border border-white/20">
                                Go to Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default About