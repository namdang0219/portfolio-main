import EducationItem from "@/components/EducationItem";
import SubLine from "@/components/subLine/SubLine";
import ChildTitle from "@/components/title/ChildTitle";
import Title from "@/components/title/Title";
import React from "react";

const Education = () => {
	return (
		<div id="education" className="container  scroll-m-10">
			<div className="text-center mb-10">
				<Title className="">Education</Title>
				<SubLine className="mx-auto borderl">
					来日して、もう３年間が経ちました。日本語や知識だけじゃなくて、
					<br />
					他に体験もたくさんできました。
				</SubLine>
			</div>
			<div className="grid grid-cols-2 gap-10 sm:grid-cols-1">
				{educationData.map((item, index) => (
					<EducationItem
						key={item.content}
						data={item}
						index={index}
					></EducationItem>
				))}
			</div>
		</div>
	);
};

const educationData = [
	{
		time: "2022/11",
		content: "日本留学試験（EJU）250点取得",
		desc: "",
	},
	{
		time: "2023/01",
		content: "日本語能力試験（JLPT）N1合格",
		desc: "",
	},
  {
    time: "2023/04 ~ 現在",
    content: "ECCコンピュータ専門学校に通学",
    desc: "",
  },
	{
		time: "2023/09",
		content: "REACTを勉強し始めました",
		desc: "",
	},
];

export default Education;
