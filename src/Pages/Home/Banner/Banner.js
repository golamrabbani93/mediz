import React from 'react';
import leftImg from '../../../assets/box-2.jpg';
import rightImg from '../../../assets/box-1.jpg';
const Banner = () => {
	const leftStyle = {
		backgroundImage: `url('${leftImg}')`,
		height: '100vh',
	};
	const rightStyle = {
		height: '100vh',
		width: '100vw',
	};
	return (
		<div className="banner-container grid grid-cols-1 xl:grid-cols-2">
			<div
				className="banner-left flex flex-col pl-16
            justify-center text-white text-start"
				style={leftStyle}
			>
				<p className="text-3xl font-bold">I am a Chiropractor</p>
				<h2 className="text-8xl font-bold text-white my-3">
					<span>Dr. John</span> <br />
					<span className="mt-2">Newman</span>
				</h2>
				<p className="w-3/4 font-semibold">
					A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
					spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in
					this spot, which
				</p>
			</div>
			<div className="banner-Right">
				<img src={rightImg} alt="" style={rightStyle} />
			</div>
		</div>
	);
};

export default Banner;
