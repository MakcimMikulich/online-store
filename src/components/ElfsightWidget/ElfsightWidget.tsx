import { useEffect } from "react";
import "./ElfsightWidget.scss";

// Объявляем глобально функцию iFrameResize для TypeScript
declare global {
	interface Window {
		iFrameResize?: (options: object, target: HTMLIFrameElement) => void;
	}
}

export const ElfsightWidget = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js";
		script.defer = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<iframe
			onLoad={(event) => {
				if (window.iFrameResize && event.target instanceof HTMLIFrameElement) {
					window.iFrameResize({}, event.target);
				}
			}}
			src="https://0ad0da4c7c8a4bfe973fb50f7dad826f.elf.site"
			style={{ border: "none", width: "100%" }}
		></iframe>
	);
};
