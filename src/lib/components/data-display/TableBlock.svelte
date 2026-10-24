<script>
	/** @type {{ block: { headers?: string[]; rows?: (string[] | Record<string, string>)[]; zebra?: boolean; pin_rows?: boolean } }} */
	let { block } = $props();

	const tableOptions = {
		zebra: 'table-zebra',
		pinRows: 'table-pin-rows'
	};

	let tableClasses = $derived(
		['table', block.zebra ? tableOptions.zebra : '', block.pin_rows ? tableOptions.pinRows : '']
			.filter(Boolean)
			.join(' ')
	);
	let rows = $derived(
		(block.rows ?? []).map((row) => (Array.isArray(row) ? row : Object.values(row ?? {})))
	);
</script>

<div class="my-6 overflow-x-auto rounded-box border border-base-300">
	<table class={tableClasses}>
		<thead>
			<tr>
				{#each block.headers ?? [] as header (header)}
					<th>{header}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row, rowIndex (rowIndex)}
				<tr>
					{#each block.headers ?? [] as _header, columnIndex (`${rowIndex}-${columnIndex}`)}
						<td>{row[columnIndex] ?? ''}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
