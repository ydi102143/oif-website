import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Map, Target, Users, Zap, Briefcase, Award } from 'lucide-react';
import './Activities.css';

const roadmap = [
    {
        year: '1st Year',
        title: 'Foundation & Axis',
        subtitle: '個の確立 - The AXIS',
        desc: '共通の軸（Axis）となる基礎スキルを徹底的に叩き込み、「圧倒的な基礎体力」と「共通言語」を身につけます。',
        icon: <Zap size={32} />
    },
    {
        year: '2nd Year',
        title: 'Guilds & Teaming',
        subtitle: 'チーム実践 - The GUILDS',
        desc: '「AI×Dev×Biz」の混成チーム（Guild）を結成。インプットからアウトプットへシフトし、社会実装に挑みます。',
        icon: <Users size={32} />
    },
    {
        year: '3rd Year',
        title: 'Deepening & Research',
        subtitle: '専門深化 - Academy',
        desc: '研究室配属で専門性を深め、最先端の知見をサークルに還流。大学院進学も見据えた研究活動を行います。',
        icon: <Award size={32} />
    },
    {
        year: '4th Year+',
        title: 'Launch & Implementation',
        subtitle: '飛躍 - Go to Market',
        desc: '起業、プロフェッショナル、研究者。それぞれの道で社会にインパクトを与え、エコシステムを循環させます。',
        icon: <Briefcase size={32} />
    }
];

const Activities = () => {
    return (
        <section id="activities" className="section activities-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="roadmap-header"
                >
                    <h2 className="section-title">活動ロードマップ</h2>
                    <p className="section-desc">
                        「個の確立」から「チーム実践」、そして「社会実装」へ。<br />
                        OIF独自の成長エコシステムです。
                    </p>
                </motion.div>

                {/* Visual Flow Chart Area */}
                <div className="flow-chart-container">
                    {/* Phase 1: The AXIS */}
                    <div className="flow-track">
                        <div className="flow-phase">基礎構築</div>
                        <div className="flow-visual phase-1">
                            <div className="flow-line ai integrated">
                                <span className="main-text">AIコース</span>
                            </div>
                            <div className="flow-line dev integrated">
                                <span className="main-text">Devコース</span>
                            </div>
                            <div className="flow-line biz integrated">
                                <span className="main-text">Bizコース</span>
                            </div>
                        </div>
                        <div className="flow-desc">圧倒的な基礎体力をつける</div>
                    </div>

                    <div className="flow-arrow">➜</div>

                    {/* Phase 2: The GUILDS */}
                    <div className="flow-track">
                        <div className="flow-phase">専門特化</div>
                        <div className="flow-visual phase-2">
                            <div className="guild-group">
                                <span className="guild-label ai-text">AIチーム（例）</span>
                                <div className="guild-branches">
                                    <div className="guild-node ai">LLM</div>
                                    <div className="guild-node ai">世界モデル</div>
                                    <div className="guild-node ai">データ分析</div>
                                </div>
                            </div>
                            <div className="guild-group">
                                <span className="guild-label dev-text">Devチーム（例）</span>
                                <div className="guild-branches">
                                    <div className="guild-node dev">Webアプリ</div>
                                    <div className="guild-node dev">モバイル</div>
                                    <div className="guild-node dev">インフラ</div>
                                </div>
                            </div>
                            <div className="guild-group">
                                <span className="guild-label biz-text">Bizチーム（例）</span>
                                <div className="guild-branches">
                                    <div className="guild-node biz">EdTech</div>
                                    <div className="guild-node biz">SaaS企画</div>
                                    <div className="guild-node biz">ピッチ</div>
                                </div>
                            </div>
                        </div>
                        <div className="flow-desc">専門領域ごとのチームで深める</div>
                    </div>

                    <div className="flow-arrow">➜</div>

                    {/* Phase 3: The FUSION */}
                    <div className="flow-track">
                        <div className="flow-phase">社会実装</div>
                        <div className="flow-visual phase-3">
                            <div className="flow-mix">
                                <div className="fusion-circle">
                                    <span>Synergy<br />Projects</span>
                                </div>
                            </div>
                        </div>
                        <div className="flow-desc">「最強のメンバー」で社会実装</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
