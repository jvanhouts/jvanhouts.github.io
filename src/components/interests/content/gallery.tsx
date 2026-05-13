export function InterestContentGallery({ imageFileNames }: { imageFileNames: string[] }) {
	return (
		<div className="grid sm:grid-cols-2 gap-4">
			{imageFileNames.map((fileName) => (
				<img src={`/images/interests/${fileName}`} className="rounded-lg" alt={fileName} />
			))}
			</div>
	);
}