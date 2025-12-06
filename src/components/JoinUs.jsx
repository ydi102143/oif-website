import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Twitter, Instagram } from 'lucide-react';
import './JoinUs.css';

const steps = [
    { number: '01', title: '説明会参加', desc: 'まずはOIFの活動内容と熱量を感じてください。オンライン・オフラインで開催中。' },
    { number: '02', title: 'エントリー', desc: '希望コースと志望動機をフォームから送信。あなたの「やりたい」を教えてください。' },
    { number: '03', title: '選考・面談', desc: 'スキルよりも熱意を重視します。既存メンバーとの対話でマッチングを確認。' },
    { number: '04', title: 'コース配属・Kickoff', desc: '晴れてメンバー入り！メンターと共に学習計画を立て、プロジェクトを始動。' },
];

const JoinUs = () => {
    return (
        <section id="join" className="section join-section">
            <div className="container">
                <h2 className="section-title">Join Us</h2>
                <p className="join-intro">
                    OIFは、本気で成長したい学生のためのコミュニティです。<br />
                    あなたの挑戦を待っています。
                </p>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="step-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="join-cta">
                    <a href="#" className="btn btn-primary btn-large">
                        説明会に申し込む <ArrowRight />
                    </a>
                    <p className="cta-note">※次回説明会の日程はSNSで告知します</p>
                    <div className="sns-links">
                        <a href="https://x.com/OIF_OMU" target="_blank" rel="noopener noreferrer" className="sns-btn sns-btn-twitter">
                            <Twitter size={20} /> <span>@OIF_OMU</span>
                        </a>
                        <a href="https://instagram.com/omu.innovation.frontier" target="_blank" rel="noopener noreferrer" className="sns-btn sns-btn-instagram">
                            <Instagram size={20} /> <span>@omu.innovation.frontier</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
