import { dataTypes } from "@/types/DataType";

export const data: dataTypes = {
	products: [
		{
      slug: 'myMovie',
			titleShort: "My Movie",
      time: '2024/03', 
			titleLarge: "My Movie (with TMDB Api)",
			publicSite: "https://browse-movies-alpha.vercel.app/",
			github: "https://github.com/namdang0219/browse-movies",
			desc: "Movie Browser は TMDB API を使用して、映画の情報を取得するアプリケーションです。流行っている映画や各時代有名な映画を見れて、ログインしてから気になった映画を保存することもできます。次回のログインで、全部保存した映画が残ります。好きな映画があれば、検索できて、映画の情報を見ることができます。",
			techniques: ["React", "Firebase", "Tailwind"],
			purpose: [
				"Reactについて勉強した技術を練習",
				"APIを使用して、Reactアプリケーションの作成",
				"SWRを使用して、APIを簡単に実装",
				"React Hook Form と Yup を使用して、フォームのチェックと管理",
			],
			overview: [
				"人数: 1人",
				"担当: デザイン & コーディング",
				"開発期間: 3週間",
				"開発ステータス: 完成",
			],
			banner: "/assets/products/my-movie/my-movie-banner.jpg",
			images: [
				"/assets/products/my-movie/my-movie-1.png",
				"/assets/products/my-movie/my-movie-2.png",
				"/assets/products/my-movie/my-movie-3.png",
				"/assets/products/my-movie/my-movie-4.png",
				"/assets/products/my-movie/my-movie-5.png",
				"/assets/products/my-movie/my-movie-6.png",
			],
		},

    {
      slug: 'HiMBTI',
			titleShort: "Hi MBTI",
      time: '2023/12', 
			titleLarge: "Hi MBTI (MBTI Social Network App)",
			publicSite: "",
			github: "https://github.com/namdang0219/hi-mbti",
			desc: "Hi MBTI は MBTIを通じて自分の性格を理解したり、同じタイプを持つ人と交流したり、生活の写真や経験をシェアしたりすることができるアプリです。若者中心で、デザインとレイアウトをシンプルにし、使いやすくて毎日使い繰り返しできるようにしました。",
			techniques: ["React Native", "Firebase"],
			purpose: [
				"React & React Nativeについて勉強した技術を練習",
				"React Native で作ったアプリ内で Firebase を導入してみる",
				"アプリ内のデータ構築を理解する",
			],
			overview: [
				"人数: 1人",
				"担当: デザイン & コーディング",
				"開発期間: 3ヶ月",
				"開発ステータス: UIほぼ完成 / 機能面ログインとプロフィル写真のアップロードまで完成",
			],
			banner: "/assets/products/hi-mbti/hi-mbti-banner.jpg",
			images: [
				"/assets/products/hi-mbti/hi-mbti-1.jpeg",
				"/assets/products/hi-mbti/hi-mbti-2.png",
				"/assets/products/hi-mbti/hi-mbti-3.png",
				"/assets/products/hi-mbti/hi-mbti-4.png",
				"/assets/products/hi-mbti/hi-mbti-5.png",
			]
		},
	]
};
