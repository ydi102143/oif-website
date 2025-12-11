import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Database, Globe, Briefcase, Cpu, ArrowRight } from 'lucide-react';
import './Courses.css';

const courses = [
    {
        id: 'ai',
        title: 'AI Course',
        jpTitle: 'The Brain',
        icon: <Brain size={48} />,
        color: '#ff0055',
        description: '最先端AI技術の探求とモデル構築を専門とするコース。',
        role: '技術シーズの提供、R&D',
        skills: ['Machine Learning', 'Deep Learning', 'Paper Reading']
    },
    {
        id: 'dev',
        title: 'Dev Course',
        jpTitle: 'The Body',
        icon: <Globe size={48} />,
        color: '#00f0ff',
        description: 'Web/アプリ開発による実装とエンジニアリングを専門とするコース。',
        role: 'UI/UX実装、システム設計、社会実装',
        skills: ['Web Development', 'System Design', 'UI/UX']
    },
    {
        id: 'biz',
        title: 'Biz Course',
        jpTitle: 'The Direction',
        icon: <Briefcase size={48} />,
        color: '#ffaa00',
        description: '企画、外部連携、サークル運営、企業経営などのビジネス領域を専門とするコース。',
        role: '事業開発、マネタイズ、PM',
        skills: ['Business Dev', 'Management', 'Marketing']
    }
];

const Courses = () => {
    return (
        <section id="courses" className="section courses-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    3つのコース
                </motion.h2>
                <p className="section-subtitle">
                    互いに相乗効果（Synergy）を生み出す3つのコース
                </p>

                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            className="course-card glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="course-card-header">
                                <div className="course-icon-wrapper" style={{ color: course.color, borderColor: course.color }}>
                                    {course.icon}
                                </div>
                                <div className="course-titles">
                                    <h3 className="course-en-title">{course.title}</h3>
                                    <span className="course-jp-title">{course.jpTitle}</span>
                                </div>
                            </div>

                            <p className="course-desc">{course.description}</p>


                            <Link to={`/course/${course.id}`} className="course-link-btn" style={{ '--hover-color': course.color }}>
                                View Details <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
