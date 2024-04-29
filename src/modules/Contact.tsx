import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Title from "@/components/title/Title";
import React from "react";

const Contact = () => {
	return (
		<div className="container flex gap-[100px] sm:gap-10 flex-wrap">
			<div>
				<Title className="mb-[50px] sm:mb-8">Contact Info</Title>
				{contactInfos.map((item) => (
					<div
						key={item.type}
						className="flex items-center gap-2 mb-4 sm:mb-5"
					>
						<span className="sm:scale-75">{item.icon}</span>
						<span className="font-light text-[20px] sm:text-base tracking-widest sm:tracking-normal">{`${item.type}:`} <span className="tracking-wider">{`${item.content}`}</span></span>
					</div>
				))}
			</div>
			<form className="flex-1">
				<div className="mb-10">
					<Title className="mb-[50px] sm:mb-8">Contact Form</Title>
					<Input name="name" placeholder="氏名を入力...">
						氏名
					</Input>
					<Input name="email" placeholder="メールを入力...">
						メール
					</Input>
					<Input name="content" placeholder="内容を入力...">
						内容
					</Input>
				</div>
				<Button>送信</Button>
			</form>
		</div>
	);
};

const contactInfos = [
	{
		type: "住所",
		content: "淀川区、大阪市",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={24}
				height={24}
				viewBox="0 0 48 48"
			>
				<path
					fill="currentColor"
					d="M39.015 28.98A16.9 16.9 0 0 0 41 21c0-9.389-7.611-17-17-17S7 11.611 7 21a16.92 16.92 0 0 0 4 10.955l.02.025l.018.02H11l10.088 10.71a4 4 0 0 0 5.823 0L37 32h-.038l.016-.019l.002-.002q.108-.129.215-.26a17 17 0 0 0 1.82-2.74m-15.01-1.48a6 6 0 1 1 0-12a6 6 0 0 1 0 12"
				></path>
			</svg>
		),
	},
	{
		type: "電話番号",
		content: "050-6859-7025",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={24}
				height={24}
				viewBox="0 0 24 24"
			>
				<g fill="none" fillRule="evenodd">
					<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
					<path
						fill="currentColor"
						d="M16.552 22.133c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.6 1.166 2.704 2.93 3.652 4.317a1.504 1.504 0 0 1-.256 1.986l-1.951 1.449a.48.48 0 0 0-.142.616c.442.803 1.228 1.999 2.128 2.899c.901.9 2.153 1.738 3.012 2.23a.483.483 0 0 0 .644-.162l1.27-1.933a1.503 1.503 0 0 1 2.056-.332c1.407.974 3.049 2.059 4.251 3.598a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
					></path>
				</g>
			</svg>
		),
	},
	{
		type: "メール",
		content: "namdang.contact@gmail.com",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={24}
				height={24}
				viewBox="0 0 36 36"
			>
				<path
					fill="currentColor"
					d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z"
					className="clr-i-solid clr-i-solid-path-1"
				></path>
				<path
					fill="currentColor"
					d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z"
					className="clr-i-solid clr-i-solid-path-2"
				></path>
				<path fill="none" d="M0 0h36v36H0z"></path>
			</svg>
		),
	},
];

export default Contact;
