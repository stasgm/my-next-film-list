import "@tanstack/react-table";

declare module "@tanstack/table-core" {
	// interface ColumnMeta<TData extends RowData, TValue> {
	interface ColumnMeta {
		style: {
			textAlign: "left" | "center" | "right";
		};
	}
}
