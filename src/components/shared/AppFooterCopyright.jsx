function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; Usman {new Date().getFullYear()}

				<span className="ml-2">All rights are reserved.</span>

			</div>
		</div>
	);
}

export default AppFooterCopyright;
