export type Locale = 'ja' | 'en' | 'zh';

export const dictionaries = {
    ja: {
        hero: {
            title: 'プロレベルのWeb3リサーチを、\nあなたの手に',
            subtitle: '最新のDeFi、GameFi、レイヤー1/2プロジェクトを網羅。データドリブンな分析と独自の視点で、次世代のイノベーションを発見しよう。',
            searchPlaceholder: 'プロジェクト名、カテゴリ、キーワードで検索...',
            searchButton: '検索'
        },
        nav: {
            projects: 'プロジェクト一覧',
            manual: '初心者マニュアル',
            request: 'リサーチリクエスト',
            pricing: '料金表',
            connect: 'ウォレット接続'
        },
        sections: {
            trending: '24h 検索急上昇 (Trending)',
            trendingProjects: 'トレンドプロジェクト',
            news: '業界ヘッドライン',
            social: 'センチメント (X)'
        },
        common: {
            all: 'すべて',
            currentPrice: '現在価格',
            change24h: '24h変動',
            marketCap: '時価総額',
            rank: 'Rank',
            backToList: '一覧へ戻る',
            footerRights: '無断転載を禁じます。',
            footerData: 'データ提供: CoinGecko API & RSS Feeds',
            descriptionTitle: 'プロジェクト概要',
            marketDataTitle: 'マーケットデータ',
            comingSoon: '鋭意開発中・近日公開予定'
        },
        wallet: {
            title: 'ウォレットを接続',
            subtitle: '対応するウォレットを選択してください',
            metamask: 'MetaMask',
            walletConnect: 'WalletConnect',
            coinbase: 'Coinbase Wallet',
            phantom: 'Phantom',
            connecting: '接続中...',
            cancel: 'キャンセル'
        },
        contact: {
            nameLabel: 'お名前',
            namePlaceholder: '山田 太郎',
            emailLabel: 'メールアドレス',
            emailPlaceholder: 'yamada@example.com',
            projectLabel: '調査希望プロジェクト名（任意）',
            projectPlaceholder: '例: Ethereum, Solana...',
            messageLabel: 'リクエスト内容',
            messagePlaceholder: '「このブロックチェーンの技術的優位性を知りたい」など...',
            submitButton: 'リクエストを送信する',
            submitting: '送信中...',
            successTitle: '送信完了',
            successMessage: 'リクエストを承りました。調査完了までしばらくお待ちください！',
            errorRequired: '必須項目をすべて入力してください。'
        }
    },
    en: {
        hero: {
            title: 'Pro-level Web3 Research\nin Your Hands',
            subtitle: 'Covering the latest DeFi, GameFi, and L1/L2 projects. Discover next-gen innovation with data-driven analysis.',
            searchPlaceholder: 'Search by project, category, keyword...',
            searchButton: 'Search'
        },
        nav: {
            projects: 'Projects',
            manual: 'Beginner Guide',
            request: 'Research Request',
            pricing: 'Pricing',
            connect: 'Connect Wallet'
        },
        sections: {
            trending: '24h Trending Search',
            trendingProjects: 'Trending Projects',
            news: 'Industry Headlines',
            social: 'Sentiment (X)'
        },
        common: {
            all: 'All',
            currentPrice: 'Price',
            change24h: '24h Change',
            marketCap: 'Market Cap',
            rank: 'Rank',
            backToList: 'Back to List',
            footerRights: 'All rights reserved.',
            footerData: 'Data provided by CoinGecko API & RSS Feeds',
            descriptionTitle: 'Project Overview',
            marketDataTitle: 'Market Data',
            comingSoon: 'Under Construction & Coming Soon'
        },
        wallet: {
            title: 'Connect Wallet',
            subtitle: 'Select your preferred wallet',
            metamask: 'MetaMask',
            walletConnect: 'WalletConnect',
            coinbase: 'Coinbase Wallet',
            phantom: 'Phantom',
            connecting: 'Connecting...',
            cancel: 'Cancel'
        },
        contact: {
            nameLabel: 'Your Name',
            namePlaceholder: 'John Doe',
            emailLabel: 'Email Address',
            emailPlaceholder: 'john@example.com',
            projectLabel: 'Target Project (Optional)',
            projectPlaceholder: 'e.g., Ethereum, Solana...',
            messageLabel: 'Request Details',
            messagePlaceholder: 'I want to know the technical advantages of this blockchain...',
            submitButton: 'Send Request',
            submitting: 'Sending...',
            successTitle: 'Request Sent',
            successMessage: 'We have received your research request. Please wait for our analysis!',
            errorRequired: 'Please fill in all required fields.'
        }
    },
    zh: {
        hero: {
            title: '专业级的Web3研究\n触手可及',
            subtitle: '涵盖最新的DeFi、GameFi和L1/L2项目。通过数据驱动的分析，发现下一代创新。',
            searchPlaceholder: '按项目、类别、关键字搜索...',
            searchButton: '搜索'
        },
        nav: {
            projects: '项目列表',
            manual: '新手指南',
            request: '研究请求',
            pricing: '价格',
            connect: '连接钱包'
        },
        sections: {
            trending: '24h 热门搜索 (Trending)',
            trendingProjects: '热门项目',
            news: '行业头条',
            social: '市场情绪 (X)'
        },
        common: {
            all: '全部',
            currentPrice: '当前价格',
            change24h: '24h变化',
            marketCap: '市值',
            rank: '排名',
            backToList: '返回列表',
            footerRights: '版权所有。',
            footerData: '数据提供: CoinGecko API & RSS Feeds',
            descriptionTitle: '项目概述',
            marketDataTitle: '市场数据',
            comingSoon: '正在开发中 · 敬请期待'
        },
        wallet: {
            title: '连接钱包',
            subtitle: '请选择您支持的钱包',
            metamask: 'MetaMask',
            walletConnect: 'WalletConnect',
            coinbase: 'Coinbase Wallet',
            phantom: 'Phantom',
            connecting: '连接中...',
            cancel: '取消'
        },
        contact: {
            nameLabel: '您的姓名',
            namePlaceholder: '张三',
            emailLabel: '电子邮件',
            emailPlaceholder: 'zhangsan@example.com',
            projectLabel: '调研项目名称（选填）',
            projectPlaceholder: '例如：Ethereum, Solana...',
            messageLabel: '请求详细内容',
            messagePlaceholder: '我想了解这个区块链的技术优势...',
            submitButton: '发送请求',
            submitting: '发送中...',
            successTitle: '请求已发送',
            successMessage: '我们已收到您的调研请求，请耐心等待我们的分析报告！',
            errorRequired: '请输入所有必填项。'
        }
    }
};

export const getDictionary = (locale: Locale) => {
    return dictionaries[locale] || dictionaries['ja'];
};
