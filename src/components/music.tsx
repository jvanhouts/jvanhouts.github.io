import { useEffect, useState } from 'react';
import { LucideSquareArrowOutUpRight } from 'lucide-react';

type LastFmArtist = {
	name: string;
	playcount: string;
	url: string;
	image: string | null;
};

const username = 'jessiebessiex';
const apiKey = 'cecb8e8aa8671e1ec12ac1c9005928d2';

export function Music() {
	const [artists, setArtists] = useState<LastFmArtist[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;

		const loadArtists = async () => {
			try {
				const res = await fetch(
					`https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&api_key=${apiKey}&format=json&period=6month&limit=10`
				);

				if (!res.ok) {
					throw new Error(`Last.fm request failed: ${res.status}`);
				}

				const data = await res.json();
				const mappedArtists: LastFmArtist[] = (data.topartists?.artist ?? [])
					.map((artist: any) => ({
						name: artist.name,
						playcount: artist.playcount,
						url: artist.url,
						image: artist.image?.at(-1)?.['#text'] || null
					}))
					.slice(0, 6);

				if (isMounted) {
					setArtists(mappedArtists);
					setError(null);
				}
			} catch (err) {
				if (isMounted) {
					setError('Could not load top artists right now.');
				}
			} finally {
				if (isMounted) {
					setLoading(false);
				}
			}
		};

		loadArtists();

		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<section className="mt-8">
			<h2 className="text-lg font-bold">Top Artists (6 months)</h2>
			{loading ? <p className="mt-2 text-sm opacity-70">Loading artists...</p> : null}
			{error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}

			{!loading && !error ? (
				<div className="mt-3 grid grid-cols-2 gap-2">
					{artists.map((artist) => (
						<a
							key={artist.name}
							href={artist.url}
							target="_blank"
							rel="noreferrer"
							className="group rounded-xl border border-accent/10 bg-background p-2 transition-colors hover:bg-accent/5"
						>
							<div className="mb-2 h-20 w-full overflow-hidden rounded-lg bg-accent/5">
								{artist.image ? (
									<img
										src={artist.image}
										alt={`${artist.name} artwork`}
										className="h-full w-full object-cover"
									/>
								) : null}
							</div>
							<div className="flex items-start gap-2">
								<div className="min-w-0 flex-1">
									<p className="truncate text-sm font-semibold">{artist.name}</p>
									<p className="text-xs opacity-70">{artist.playcount} plays</p>
								</div>
								<LucideSquareArrowOutUpRight
									className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70 transition-opacity group-hover:opacity-100"
									aria-hidden="true"
								/>
							</div>
						</a>
					))}
				</div>
			) : null}
		</section>
	);
}
