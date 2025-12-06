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
        description: '最先端の論文を読み解き、数理モデルを実装する「技術の核」を作ります。',
        role: '技術シーズの提供、R&D',
        skills: ['Machine Learning', 'Deep Learning', 'Paper Reading']
    },
    {
        id: 'dev',
        title: 'Dev Course',
        jpTitle: 'The Body',
        icon: <Globe size={48} />,
        color: '#00f0ff',
        description: 'モダンな技術で、使いやすく堅牢なプロダクトを作り上げる「形」を作ります。',
        role: 'UI/UX実装、システム設計、社会実装',
        skills: ['Web Development', 'System Design', 'UI/UX']
    },
    {
        id: 'biz',
        title: 'Biz Course',
        jpTitle: 'The Direction',
        icon: <Briefcase size={48} />,
        color: '#ffaa00',
        description: '市場の課題を発見し、技術をビジネスモデルへ変換する「道」を作ります。',
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
                    The Trinity Ecosystem
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
                            <p className="course-role"><strong>Role:</strong> {course.role}</p>

                            <div className="course-tags">
                                {course.skills.map((skill, i) => (
                                    <span key={i} className="course-tag">{skill}</span>
                                ))}
                            </div>

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
