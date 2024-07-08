import { useEffect } from "react";

export const ElfsightWidget = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://static.elfsight.com/platform/platform.js";
		script.setAttribute("data-use-service-core", "");
		script.defer = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div
			className="elfsight-app-0ad0da4c-7c8a-4bfe-973f-b50f7dad826f"
			data-elfsight-app-lazy
		></div>
	);
};
