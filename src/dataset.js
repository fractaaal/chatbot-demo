const defaultDataset = {
    "init": {
        answers: [
            {content: "なにをやっている人？", nextId: "profile"},
            {content: "スカウトしたい", nextId: "recruit"},
            {content: "仕事を依頼したい", nextId: "job_offer"},
            {content: "問い合わせる", nextId: "contact"},
        ],
        question: "こんにちは！松井壮太と申します😄\n" + "ご用件はなんでしょうか？",
    },
    "profile": {
        answers: [
            {content: "スキルセットを知りたい", nextId: "skill_set"},
            {content: "ポートフォリオを見たい", nextId: "https://github.com/fractaaal"},
            {content: "さらに詳しく経歴を知りたい", nextId: "https://www.wantedly.com/id/souta_matsui_a"},
            {content: "最初の質問に戻る", nextId: "init"},
        ],
        question: "26才でエンジニアを目指しているものです。元メーカーで働いていましたが、エンジニアを目指すために退職しました。\n" +
                  "自走力や論理的思考力などが強みです。現在は就職活動中です。",
    },
    "skill_set": {
        answers: [
            {content: "ポートフォリオを見たい", nextId: "https://github.com/fractaaal"},
            {content: "Qiitaの投稿を見たい", nextId: "https://qiita.com/Sota_Matsui"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "HTML&CSS、JavaScript、React、Rails、Pythonなどです。\n現在TypeScriptを学習中です。Qiitaなどにも記事を投稿しています",
    },
    "recruit": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "どんな人か知りたい", nextId: "profile"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "現在就職活動中です。ご興味をもって頂きありがとうございます。こちらからお問い合わせください。",
    },
    "job_offer": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "スキルセットを知りたい", nextId: "skill_set"},
            {content: "ポートフォリオを見たい", nextId: "https://github.com/fractaaal"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "業務未経験ですが静的Webサイト制作にチャレンジしたいと考えています。まずはご相談ください。",
    },
}

export default defaultDataset