import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Calendar, User, Target, ExternalLink } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import './CoursePage.css';

const courseData = {
    ai: {
        title: 'AI Course',
        subtitle: 'The Brain: 技術の核',
        color: '#ff0055',
        description: '最先端のAI技術を学び、社会実装を目指すエンジニア・研究者集団。',
        mission: '「理論」と「実装」の両輪で、実社会で通用するAIエンジニアを育成する。',
        curriculum: [
            { title: 'Onboarding (4-5月)', desc: 'Python/Numpy/Pandas基礎。数学（線形代数・微積分）の復習と環境構築。' },
            { title: 'Data Science (前期)', desc: '松尾研GCI（データサイエンス）を履修し、機械学習の基礎とコンペティションを経験。' },
            { title: 'Deep Learning (後期)', desc: '松尾研DL基礎講座を受講。深層学習の数理モデル理解とPyTorchによる実装。' },
            { title: 'Certification (春)', desc: '1年間の集大成として「E資格」受験。エンジニアとしての免許皆伝を目指す。' }
        ],
        projects: [
            { title: '画像生成AIアプリ', desc: 'Stable Diffusionを活用した、特定画風に特化した生成サービス。' },
            { title: '株価予測モデル', desc: '時系列解析とセンチメント分析を組み合わせた高精度予測システム。' }
        ],
        schedule: '毎週 火・金 19:00〜 (オンライン/オフライン併用)'
    },
    ds: { // Keep specific Data Science course if needed, or merge into AI if implied. User mentioned 3 courses (Trinity), but code has 'ds'. I will keep it but maybe minimize if user emphasized 3 arrows. User said "The Trinity Ecosystem (3 arrows)". I'll leave DS accessible but focus on AI/Dev/Biz as main. 
        title: 'Data Science Course',
        subtitle: 'Data Intelligence',
        color: '#00ffaa',
        description: 'データから価値を引き出し、ビジネスの意思決定を加速させる。',
        mission: '「データ」を「武器」に変え、不確実な世界を読み解く力を養う。',
        curriculum: [
            { title: 'SQL & Database', desc: '大規模データの抽出・加工スキル（BigQuery / MySQL）。' },
            { title: 'Statistics', desc: 'データの背後にある真実を見抜くための統計的アプローチと仮説検定。' },
            { title: 'Visualization', desc: 'Tableau/Matplotlibを用いた、意思決定のためのダッシュボード作成。' },
            { title: 'Biz Problem Solving', desc: '実際の企業データを用いた、課題発見から改善提案までのプロセス。' }
        ],
        projects: [
            { title: '学食混雑予測', desc: '過去データと天候・時間割から混雑度を予測・可視化。' },
            { title: 'マーケティング分析', desc: 'SNSデータトレンド分析とターゲット層の特定。' }
        ],
        schedule: '毎週 水 19:00〜'
    },
    dev: { // Renaming key to 'dev' to match 'dev' in Activities if needed, but the link in Courses.jsx uses 'web' id? 
        // In Courses.jsx previously: id: 'dev' was set in my replace step 36. 
        // Wait, I changed ID to 'dev' in courses.jsx.
        // So I must change key here to 'dev'.
        title: 'Dev Course',
        subtitle: 'The Body: 形を作る',
        color: '#00f0ff',
        description: 'モダンな技術スタックで、ユーザーの心を動かすWebサービスを創り出す。',
        mission: '「動くもの」を作る楽しさを知り、ユーザーファーストな開発者になる。',
        curriculum: [
            { title: 'Training (4-5月)', desc: 'Web標準(HTML/CSS/JS)とLinux基礎。AIを用いた「Vibe Coding」への移行。' },
            { title: 'Modern Web (前期)', desc: 'React/Next.jsによるUI構築と、Go/FastAPIによるAPI開発。' },
            { title: 'MVP Hackathon (夏)', desc: 'AIコースのモデルを組み込んだWebサービスのプロトタイピング開発。' },
            { title: 'Architecture (後期)', desc: 'AWS/Docker/DB設計。堅牢でスケーラブルなシステム設計を学ぶ。' }
        ],
        projects: [
            { title: 'OIF公式ポータル', desc: 'サークル内の情報共有・プロジェクト管理を行うWebプラットフォーム。' },
            { title: 'マッチングアプリ', desc: '学生同士のスキルや趣味をマッチングさせるSNSサービス。' }
        ],
        schedule: '毎週 月・木 19:00〜'
    },
    biz: {
        title: 'Biz Course',
        subtitle: 'The Direction: 道を作る',
        color: '#ffaa00',
        description: 'テクノロジーを社会に届けるための「ビジネスモデル」と「戦略」を描く。',
        mission: '技術を「事業」に変え、持続可能なイノベーションを生み出す。',
        curriculum: [
            { title: 'Literacy (前期)', desc: 'NoCodeツール(Bubble/Figma)を用いたプロトタイプ作成能力の習得。' },
            { title: 'Ideathon (夏)', desc: 'ハッカソンにPMとして参加。顧客ヒアリングと「売り方」の設計。' },
            { title: 'Validation (後期)', desc: 'ビジネスコンテストへの挑戦。リーンスタートアップ手法での事業計画検証。' },
            { title: 'Strategy (春)', desc: '1年間のプランをブラッシュアップし、起業または事業化準備へ。' }
        ],
        projects: [
            { title: '学生ベンチャー立ち上げ', desc: '実際に法人化を目指し、シードマネー獲得に挑戦するプロジェクト。' },
            { title: 'ビジコン荒らし', desc: '全国のビジネスコンテストに参加し、賞金獲得と実績作りを目指す。' }
        ],
        schedule: '毎週 土 10:00〜'
    },
    web3: {
        title: 'Web3 Course',
        subtitle: 'Next Gen Internet',
        color: '#aa00ff',
        description: 'ブロックチェーン技術で新しい社会システムを実験する。',
        mission: '次世代のインターネット「Web3」の思想と技術を深く理解し、実装する。',
        curriculum: [
            { title: 'Blockchain概論', desc: '分散型台帳技術の仕組みと、Bitcoin/Ethereumの歴史的背景。' },
            { title: 'Smart Contract', desc: 'Solidityを用いた自動契約実行プログラムの記述とデプロイ。' },
            { title: 'DApps Development', desc: 'ウォレット接続を含む分散型アプリケーションのフロントエンド実装。' },
            { title: 'Tokenomics', desc: '持続可能なトークンエコノミーとDAOのガバナンス設計。' }
        ],
        projects: [
            { title: 'OIF DAO', desc: 'サークルの運営をトークン投票で行うDAOシステムの構築。' },
            { title: 'NFT Certificate', desc: '修了証やイベント参加証をNFTとして発行するプラットフォーム。' }
        ],
        schedule: '毎週 金 20:00〜'
    }
};

const CoursePage = () => {
    const { courseId } = useParams();
    const course = courseData[courseId];

    if (!course) {
        return <div className="container section">Course not found.</div>;
    }

    return (
        <div className="course-page">
            {/* Hero Section */}
            <section className="course-hero" style={{ '--accent-color': course.color }}>
                <div className="course-hero-bg"></div>
                <div className="container">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} /> Back to OIF Top
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="course-badge">{course.title}</span>
                        <h1 className="course-hero-title">{course.subtitle}</h1>
                        <p className="course-hero-desc">{course.description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section course-mission-section">
                <div className="container">
                    <div className="mission-card glass-panel" style={{ borderTop: `4px solid ${course.color}` }}>
                        <div className="mission-icon" style={{ color: course.color }}>
                            <Target size={48} />
                        </div>
                        <h2>Mission</h2>
                        <p>{course.mission}</p>
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Curriculum</h2>
                    <div className="curriculum-grid">
                        {course.curriculum.map((item, index) => (
                            <motion.div
                                key={index}
                                className="curriculum-card glass-panel"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="curriculum-number" style={{ color: course.color }}>0{index + 1}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects & Schedule */}
            <section className="section bg-darker">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-column">
                            <h2 className="section-title">Projects</h2>
                            <div className="course-projects">
                                {course.projects.map((project, index) => (
                                    <div key={index} className="project-item glass-panel">
                                        <CheckCircle size={24} style={{ color: course.color }} />
                                        <div>
                                            <h4>{project.title}</h4>
                                            <p>{project.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="info-column">
                            <h2 className="section-title">Schedule</h2>
                            <div className="schedule-card glass-panel">
                                <Calendar size={24} style={{ color: course.color }} />
                                <div>
                                    <h4>Weekly Activity</h4>
                                    <p>{course.schedule}</p>
                                </div>
                            </div>
                            <div className="join-card glass-panel" style={{ borderColor: course.color }}>
                                <User size={24} style={{ color: course.color }} />
                                <h4>Join {course.title}</h4>
                                <p>まずは全体説明会へお越しください。</p>
                                <HashLink to="/#join" className="btn-course-join" style={{ backgroundColor: course.color }}>
                                    説明会に申し込む <ExternalLink size={16} />
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursePage;
