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

const curriculums = {
    ai: [
        { period: '4-5月', phase: 'Onboarding', title: 'Python基礎・環境構築', desc: 'Numpy/Pandas, Git, 数学基礎。5月末の試験合格でCursor権限獲得。' },
        { period: '前期', phase: 'Data Science', title: '松尾研 GCI × G検定', desc: '機械学習の基礎、コンペティション。7月にG検定受験。' },
        { period: '夏休み', phase: 'Prototyping', title: 'サークル内ハッカソン', desc: 'GCIの知識×Streamlitで「動くAIアプリ」を開発。他コースと連携。' },
        { period: '後期', phase: 'Deep Learning', title: '松尾研 DL基礎講座', desc: '深層学習の数理モデルとPyTorch実装。最大の山場。' },
        { period: '春休み', phase: 'Certification', title: 'E資格 受験', desc: '1年間の集大成。エンジニアとしての「免許皆伝」。' }
    ],
    dev: [
        { period: '4-5月', phase: 'Training', title: 'Web標準 & AI操縦', desc: 'HTML/CSS/JS, Linux。「コードを読む力」をつけ生成開発へ移行。' },
        { period: '前期', phase: 'Modern Web', title: 'Frontend & Backend', desc: 'React/Next.js, Go/FastAPI。課題解決型学習でUIとAPIを構築。' },
        { period: '夏休み', phase: 'Project', title: 'MVP開発ハッカソン', desc: 'AIコースのモデルを組み込んだWebサービスをプロトタイピング。' },
        { period: '後期', phase: 'Architecture', title: 'Cloud & Infra', desc: 'AWS/Docker/DB設計。堅牢なシステム設計を学ぶ。' },
        { period: '春休み', phase: 'OSS / Portfolio', title: 'ポートフォリオ完成', desc: '自作サービスのリリース、またはOSS活動。' }
    ],
    biz: [
        { period: '前期', phase: 'Literacy', title: 'G検定 & NoCode', desc: 'AIの仕組み理解(G検定)。Bubble/Figmaでプロトタイプ作成能力習得。' },
        { period: '夏休み', phase: 'Ideathon', title: '課題発見・顧客ヒアリング', desc: 'ハッカソンにPMとして参加し、サービスの「売り方」を設計。' },
        { period: '後期', phase: 'Validation', title: 'ビジネスコンテスト挑戦', desc: 'O-BUCS等に参加。リーンスタートアップで事業計画を練り上げる。' },
        { period: '春休み', phase: 'Strategy', title: '起業・事業化準備', desc: '事業プランをブラッシュアップし、2年目のチーム組成へ。' }
    ]
};

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
                    <h2 className="section-title">Activities & Roadmap</h2>
                    <p className="section-desc">
                        「1年目で個の能力を極限まで高め（Axis）、2年目以降はチームで社会実装に挑む（Guilds）」<br />
                        4年間でベンチャー創業や即戦力人材へと成長するためのロードマップです。
                    </p>
                </motion.div>

                {/* Visual Flow Chart Area */}
                <div className="flow-chart-container">
                    <div className="flow-track">
                        <div className="flow-label">Year 1</div>
                        <div className="flow-phase">The AXIS</div>
                        <div className="flow-visual year-1">
                            <div className="flow-line ai">AI Course</div>
                            <div className="flow-line dev">Dev Course</div>
                            <div className="flow-line biz">Biz Course</div>
                        </div>
                        <div className="flow-desc">各コースで圧倒的な基礎体力をつける</div>
                    </div>

                    <div className="flow-arrow">➜</div>

                    <div className="flow-track">
                        <div className="flow-label">Year 2</div>
                        <div className="flow-phase">Intra-Guilds</div>
                        <div className="flow-visual year-2">
                            <div className="flow-line ai-guild">AI Guilds</div>
                            <div className="flow-line dev-guild">Dev Guilds</div>
                            <div className="flow-line biz-guild">Biz Guilds</div>
                        </div>
                        <div className="flow-desc">コース内で専門チームを結成し実践</div>
                    </div>

                    <div className="flow-arrow">➜</div>

                    <div className="flow-track">
                        <div className="flow-label">Year 3-4</div>
                        <div className="flow-phase">Inter-Guilds</div>
                        <div className="flow-visual year-3">
                            <div className="flow-mix">
                                <span>Synergy Projects</span>
                                <small>Cross-Functional Teams</small>
                            </div>
                        </div>
                        <div className="flow-desc">コースを横断して社会実装・起業へ</div>
                    </div>
                </div>



            </div>
        </section>
    );
};

export default Activities;
