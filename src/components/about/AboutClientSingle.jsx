const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				style={{
					objectFit: 'contain',
					width: '100%',
					height: '100%',
				}}
				src={image}
				className="w-64 h-64 object-fit:contain py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
