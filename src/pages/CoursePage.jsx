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
        roadmap: [
            {
                year: 'Year 1',
                phase: 'The AXIS (基礎構築)',
                type: 'sequential',
                description: '全員共通の必修カリキュラム。順序立てて基礎を習得する。',
                items: [
                    { period: '4-5月', title: '導入: Python & 数学基礎', desc: '環境構築、Numpy/Pandas、線形代数・微積分。読解力を養う。' },
                    { period: '前期', title: '習得: Data Science', desc: '松尾研GCI（データサイエンス基礎）、G検定（任意）。' },
                    { period: '夏休み', title: '実践: Prototyping', desc: 'StreamlitでAIアプリ開発。サークル内ハッカソンで「動くもの」を作る。' },
                    { period: '後期', title: '深化: Deep Learning', desc: '松尾研DL基礎講座。深層学習の数理モデルとPyTorch実装。最大の山場。' },
                    { period: '春休み', title: '完成: E資格', desc: '1年間の集大成としてE資格受験。エンジニアとしての「免許皆伝」。' }
                ]
            },
            {
                year: 'Year 2',
                phase: 'The GUILDS (専門特化)',
                type: 'parallel',
                description: '興味のある専門領域を選び、数人のチーム（Guild）に所属して深める。',
                items: [
                    { period: 'Guild', title: 'LLM Team', desc: '大規模言語モデルの論文読み込み、ファインチューニング、RAGアプリ開発。' },
                    { period: 'Guild', title: 'World Model Team', desc: '世界モデルなどの最先端アーキテクチャの探求と実装。' },
                    { period: 'Guild', title: 'RL / Kaggle Team', desc: '強化学習エージェントの開発や、Kaggleでのメダル獲得を目指す。' }
                ]
            },
            {
                year: 'Year 3-4',
                phase: 'The FUSION (社会実装)',
                type: 'feature',
                description: '「最強のメンバー」を集め、各々のフィールドで飛躍する。具体的な活動は自由。',
                items: [
                    { title: 'Collaboration', desc: 'Dev/Bizコースのメンバーと混成チームを組み、本格的なベンチャー創業へ。' },
                    { title: 'Academy', desc: '研究室での活動をメインにしつつ、最先端の知見をサークルへ還流する。' },
                    { title: 'Career', desc: 'テック企業への就職、起業、海外進学など、多様なキャリアパスへ。' }
                ]
            }
        ],
        schedule: '毎週 火・金 19:00〜 (オンライン/オフライン併用)'
    },
    dev: {
        title: 'Dev Course',
        subtitle: 'The Body: 形を作る',
        color: '#00f0ff',
        description: 'モダンな技術スタックで、ユーザーの心を動かすWebサービスを創り出す。',
        mission: '「動くもの」を作る楽しさを知り、ユーザーファーストな開発者になる。',
        roadmap: [
            {
                year: 'Year 1',
                phase: 'The AXIS (基礎構築)',
                type: 'sequential',
                description: 'Web技術の基礎から応用まで、ステップバイステップで積み上げる。',
                items: [
                    { period: '4-5月', title: '導入: Web標準 & Linux', desc: 'HTML/CSS/JS、Git/GitHub作法。AIを用いたコーディング手法への移行。' },
                    { period: '前期', title: '習得: Modern Web', desc: 'React/Next.jsによるUI構築、Go/FastAPIによるAPI開発。' },
                    { period: '夏休み', title: '実践: MVP Hackathon', desc: '自力でWebサービスをひとつ作り切る体験。AIコースのモデルを組み込む。' },
                    { period: '後期', title: '深化: Architecture', desc: 'AWS/Docker/DB設計。堅牢でスケーラブルなシステム設計を学ぶ。' },
                    { period: '春休み', title: '完成: Portfolio / OSS', desc: '成果物の整理・公開。OSSコミットや自作ライブラリ公開。' }
                ]
            },
            {
                year: 'Year 2',
                phase: 'The GUILDS (専門特化)',
                type: 'parallel',
                description: '技術スタックやプラットフォームごとに分かれ、専門性を尖らせる。',
                items: [
                    { period: 'Guild', title: 'Web App Team', desc: 'Next.js App Routerなどを駆使した、複雑かつ高速なWebアプリ開発。' },
                    { period: 'Guild', title: 'Mobile App Team', desc: 'Flutter/React Nativeを用いたクロスプラットフォーム開発。' },
                    { period: 'Guild', title: 'Infra / SRE Team', desc: 'Kubernetes/Terraformを用いたインフラコード化と運用自動化。' }
                ]
            },
            {
                year: 'Year 3-4',
                phase: 'The FUSION (社会実装)',
                type: 'feature',
                description: '実装力を武器に、他者と協働して価値を生み出す。自由な活動期間。',
                items: [
                    { title: 'CTO Role', desc: 'AI/Bizメンバーのアイデアを形にする技術責任者としてチームを牽引。' },
                    { title: 'Tech Lead', desc: '後輩の技術指導やサークル内システムの保守開発を行い、組織を支える。' },
                    { title: 'Innovation', desc: '自らのプロダクトで起業、またはハッカソン荒らしとして名を馳せる。' }
                ]
            }
        ],
        schedule: '毎週 月・木 19:00〜'
    },
    biz: {
        title: 'Biz Course',
        subtitle: 'The Direction: 道を作る',
        color: '#ffaa00',
        description: 'テクノロジーを社会に届けるための「ビジネスモデル」と「戦略」を描く。',
        mission: '技術を「事業」に変え、持続可能なイノベーションを生み出す。',
        roadmap: [
            {
                year: 'Year 1',
                phase: 'The AXIS (基礎構築)',
                type: 'sequential',
                description: 'ビジネス基礎スキルと、エンジニアと対話するためのリテラシーを養う。',
                items: [
                    { period: '4-5月', title: '導入: AIリテラシー', desc: 'AI概論（仕組み理解）、テック業界トレンド研究。共通言語を持つ。' },
                    { period: '前期', title: '習得: NoCode / Design', desc: 'Bubble等でのプロトタイプ高速作成、Figma基礎。' },
                    { period: '夏休み', title: '実践: 課題発見 & Ideathon', desc: '身の回りの課題を探し、ハッカソンにPMとして参加。「売り方」を設計。' },
                    { period: '後期', title: '深化: Business Contest', desc: '学内外のビジコンへ応募。リーンスタートアップで仮説検証とピボット。' },
                    { period: '春休み', title: '完成: Strategy', desc: '1年間の事業案をブラッシュアップ。2年目のチーム組成に向けた準備。' }
                ]
            },
            {
                year: 'Year 2',
                phase: 'The GUILDS (専門特化)',
                type: 'parallel',
                description: '関心のある社会課題やビジネスモデルごとにチームを組む。',
                items: [
                    { period: 'Guild', title: 'EdTech / Social', desc: '教育や地方創生など、社会課題解決型の事業プラン策定。' },
                    { period: 'Guild', title: 'SaaS Planning', desc: 'BtoB SaaSの企画立案と市場調査、MVP要件定義。' },
                    { period: 'Activity', title: 'Pitch & Intern', desc: '投資家へのピッチ練習や、ベンチャーでの実務経験。' }
                ]
            },
            {
                year: 'Year 3-4',
                phase: 'The FUSION (社会実装)',
                type: 'feature',
                description: '戦略家としてチームを導き、ビジネスを社会に実装するフェーズ。',
                items: [
                    { title: 'CEO / COO', desc: 'AI/Devメンバーを集め、ビジョンを掲げてチームをリードする。' },
                    { title: 'BizDev', desc: 'アライアンス提携、資金調達、マーケティングを統括し事業をグロースさせる。' },
                    { title: 'Impact', desc: '起業、就職、研究。どのような形であれ社会にインパクトを与える。' }
                ]
            }
        ],
        schedule: '毎週 土 10:00〜'
    },
    ds: {
        title: 'Data Science Course',
        subtitle: 'Data Intelligence',
        color: '#00ffaa',
        description: 'データから価値を引き出し、ビジネスの意思決定を加速させる。',
        mission: '「データ」を「武器」に変え、不確実な世界を読み解く力を養う。',
        roadmap: [
            {
                year: 'Year 1',
                phase: 'Foundation',
                type: 'sequential',
                items: [
                    { period: '前期', title: 'SQL & Database', desc: '大規模データの抽出・加工スキル（BigQuery / MySQL）。' },
                    { period: '後期', title: 'Statistics & Viz', desc: '統計的仮説検定とTableauなどを用いた可視化。' }
                ]
            },
            {
                year: 'Year 2+',
                phase: 'Application',
                type: 'parallel',
                items: [{ period: 'Project', title: 'Biz/AI Collaboration', desc: 'ビジネス課題をデータで解決する。' }]
            }
        ],
        schedule: '毎週 水 19:00〜'
    },
    web3: {
        title: 'Web3 Course',
        subtitle: 'Next Gen Internet',
        color: '#aa00ff',
        description: 'ブロックチェーン技術で新しい社会システムを実験する。',
        mission: '次世代のインターネット「Web3」の思想と技術を深く理解し、実装する。',
        roadmap: [
            {
                year: 'Year 1',
                phase: 'Foundation',
                type: 'sequential',
                items: [
                    { period: '前期', title: 'Blockchain & Solidity', desc: '基本概念とスマートコントラクト開発。' },
                    { period: '後期', title: 'DApps & Tokenomics', desc: '分散型アプリ開発とトークンエコノミー設計。' }
                ]
            },
            {
                year: 'Year 2+',
                phase: 'DAO Operation',
                type: 'parallel',
                items: [{ period: 'Project', title: 'OIF DAO', desc: 'サークル運営のDAO化実験。' }]
            }
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

            {/* 4-Year Roadmap Section */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">4-Year Curriculum & Roadmap</h2>
                    <div className="roadmap-wrapper-v2">
                        {course.roadmap.map((phase, index) => (
                            <div key={index} className={`roadmap-phase phase-${phase.type}`}>
                                <motion.div
                                    className="phase-header"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="phase-year" style={{ color: course.color, borderColor: course.color }}>
                                        {phase.year}
                                    </span>
                                    <h3 className="phase-title">{phase.phase}</h3>
                                    {phase.description && <p className="phase-desc">{phase.description}</p>}
                                </motion.div>

                                <div className={`phase-content layout-${phase.type}`}>
                                    {phase.items.map((item, i) => (
                                        <div key={i} className="phase-item-wrapper">
                                            <motion.div
                                                className="term-card"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                style={{ '--accent-color': course.color }}
                                            >
                                                {item.period && <span className="term-period">{item.period}</span>}
                                                <h4 className="term-title">{item.title}</h4>
                                                <p className="term-desc">{item.desc}</p>
                                            </motion.div>
                                            {phase.type === 'sequential' && i < phase.items.length - 1 && (
                                                <div className="seq-arrow">↓</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule & Join */}
            <section className="section bg-darker">
                <div className="container">
                    <div className="info-grid single-column-center" style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}>
                        <h2 className="section-title" style={{ textAlign: 'center' }}>Join the Ecosystem</h2>
                        <div className="schedule-card glass-panel">
                            <Calendar size={24} style={{ color: course.color }} />
                            <div>
                                <h4>Weekly Activity</h4>
                                <p>{course.schedule}</p>
                            </div>
                        </div>
                        <div className="join-card glass-panel" style={{ borderColor: course.color, textAlign: 'center', alignItems: 'center' }}>
                            <User size={32} style={{ color: course.color }} />
                            <h4>Start Your Journey</h4>
                            <p>まずは全体説明会へお越しください。未経験からでも、熱意があれば歓迎します。</p>
                            <HashLink to="/#join" className="btn-course-join" style={{ backgroundColor: course.color, width: '100%', maxWidth: '300px' }}>
                                説明会に申し込む <ExternalLink size={16} />
                            </HashLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursePage;
