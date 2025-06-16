export type EventTag = {
  label: string;
  color: "primary" | "emerald" | "purple" | "orange" | "blue" | "cyan" | "pink" | "red";
};

export type EventData = {
  time: string;
  title: string;
  description: string;
  tags: EventTag[];
};

export const EVENT_SCHEDULE: EventData[] = [
    {
        time: "09:00",
        title: "開場・受付開始",
        description: "参加者の受付とウェルカムドリンクの提供を開始します。ネットワーキングタイムもお楽しみください。",
        tags: [
            { label: "受付", color: "primary" },
            { label: "ネットワーキング", color: "emerald" },
        ],
    },
    {
        time: "10:00",
        title: "基調講演：未来のテクノロジー",
        description: "業界のリーダーによる最新技術トレンドと今後の展望についての講演です。AI、Web3、量子コンピューティングなどの話題を予定しています。",
        tags: [
            { label: "基調講演", color: "primary" },
            { label: "メインホール", color: "purple" },
        ],
    },
    {
        time: "11:30",
        title: "パネルディスカッション：スタートアップの挑戦",
        description: "成功したスタートアップの創業者たちが、起業の経験談や困難を乗り越えた方法について語ります。質疑応答の時間も設けています。",
        tags: [
            { label: "パネルディスカッション", color: "primary" },
            { label: "起業・経営", color: "orange" },
        ],
    },
    {
        time: "13:00",
        title: "ランチブレイク＆展示会",
        description: "お食事をお楽しみいただきながら、スポンサー企業の展示ブースをご覧ください。最新のプロダクトやサービスを直接体験できます。",
        tags: [
            { label: "ランチタイム", color: "primary" },
            { label: "展示会", color: "blue" },
        ],
    },
    {
        time: "14:30",
        title: "技術セッション：React 19の新機能",
        description: "最新のReact 19の新機能とベストプラクティスについて、実際のコード例を交えながら詳しく解説します。",
        tags: [
            { label: "技術セッション", color: "primary" },
            { label: "React", color: "cyan" },
        ],
    },
    {
        time: "16:00",
        title: "ワークショップ：AIアプリ開発体験",
        description: "参加者の皆様に実際にAIアプリケーションを開発していただくハンズオン形式のワークショップです。初心者の方も歓迎です。",
        tags: [
            { label: "ワークショップ", color: "primary" },
            { label: "AI・機械学習", color: "pink" },
        ],
    },
    {
        time: "17:30",
        title: "クロージング＆アフターパーティー",
        description: "イベントの締めくくりとして、参加者同士の交流を深めるアフターパーティーを開催します。軽食とドリンクをご用意しています。",
        tags: [
            { label: "クロージング", color: "primary" },
            { label: "アフターパーティー", color: "red" },
        ],
    },
];