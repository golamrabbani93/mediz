import leftImg from '../../../assets/box-3.jpg';
import RightImg from '../../../assets/box-4.jpg';

const About = () => {
	const leftStyle = {
		backgroundImage: `url('${leftImg}')`,
		height: '100vh',
	};
	const rightStyle = {
		height: '100vh',
		width: '100vw',
	};
	return (
		<div className="mb-20">
			<h2 className="mt-20 text-6xl text-center text-white mb-8">About</h2>
			<div className="banner-container grid grid-cols-1 xl:grid-cols-2">
				<div
					className="banner-left flex flex-col pl-5 md:pl-16
            justify-center text-white text-start"
					style={leftStyle}
				>
					<h2 className="text-5xl mb-4 md:text-8xl font-bold text-white my-3">
						Professional Chiropractor
					</h2>
					<p className="text-sm md:text-xl md:w-3/4 font-semibold">
						A wonderful serenity has taken possession of my entire soul, like these sweet mornings
						of spring which I enjoy with my life.
					</p>
				</div>
				<div className="banner-Right">
					<img src={RightImg} alt="" style={rightStyle} />
				</div>
			</div>
		</div>
	);
};

export default About;
