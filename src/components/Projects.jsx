import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Database, BarChart, Briefcase } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'AIチャットアプリ開発',
        category: 'AI / Web App',
        description: 'LLMを活用した学生向けメンタリングチャットボット。',
        status: 'In Progress',
        icon: 'MessageSquare',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        title: 'Web3 分散アプリ',
        category: 'Web3',
        description: 'DAOによるコミュニティ運営投票システム。',
        status: 'Prototype',
        icon: 'Database',
        gradient: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)'
    },
    {
        title: 'データ可視化ダッシュボード',
        category: 'Data Science',
        description: '学内データの分析と可視化による改善提案。',
        status: 'Completed',
        icon: 'BarChart',
        gradient: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)'
    },
    {
        title: 'ビジネスプラン・大学連携',
        category: 'Business',
        description: '産官学連携による新規事業立案プロジェクト。',
        status: 'Planning',
        icon: 'Briefcase',
        gradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => {
                        const Icon = {
                            MessageSquare,
                            Database,
                            BarChart,
                            Briefcase
                        }[project.icon];

                        return (
                            <motion.div
                                key={index}
                                className="project-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div
                                    className="project-image-placeholder"
                                    style={{ background: project.gradient }}
                                >
                                    <Icon size={48} color="white" strokeWidth={1.5} />
                                    <span className="category-tag">{project.category}</span>
                                </div>
                                <div className="project-info">
                                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                                        {project.status}
                                    </span>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}

                    <motion.div
                        className="project-card coming-soon"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3>Coming Soon!</h3>
                        <p>More projects are on the way.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
