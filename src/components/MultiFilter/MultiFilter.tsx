import styles from "./MultiFilter.module.scss";
import { CheckBox, Heading } from "../../ui";
import { filters } from "./MultiFilter.data";
import { useMultiFilterState } from "./useMultiFilterState";
import { useEffect, useRef } from "react";

export const MultiFilter = ({ openFilter, setOpenFilter }) => {
	const { params, handlerCheckBox } = useMultiFilterState();

	// console.log(params);

	const filterRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	const handleClickOutside = (e: MouseEvent) => {
	// 		if (filterRef.current && !e.composedPath().includes(filterRef.current)) {
	// 			setOpenFilter(false);
	// 		}
	// 	};
	// 	document.body.addEventListener("click", handleClickOutside);
	// 	return () => document.body.removeEventListener("click", handleClickOutside);
	// }, []);

	const className =
		styles.multifilter__wrapper + (openFilter ? ` ${styles.active}` : "");

	return (
		<div ref={filterRef} className={className}>
			<div className={styles.multifilter}>
				<div className={styles.heading__wrapper}>
					{openFilter && (
						<span onClick={() => setOpenFilter(false)}>Close</span>
					)}
					<Heading>Filter</Heading>
				</div>
				{filters.map((filter, i) => (
					<div key={i} className={styles.filter}>
						<div className={styles.filter__header}>{filter.header}</div>
						{filter.fields.map((field) => (
							<CheckBox
								key={field.name}
								label={field.name}
								color={field.color}
								handler={handlerCheckBox}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};
