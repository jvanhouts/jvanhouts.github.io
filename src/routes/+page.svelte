<script lang="ts">
	import { ArrowRight, Github, Mail } from 'lucide-svelte';
	import SlimeShooterImage from '$lib/assets/slime_shooter.png';
	import LizardLauncherImage from '$lib/assets/lizard_launcher.png';
	import UnotyImage from '$lib/assets/unoty.png';

	const redirect = (url: string) => window.open(url, '_blank');
</script>

<section class="w-full py-8 flex items-center justify-center">
	<div class="w-11/12 md:w-3/4 2xl:w-1/2 max-w-screen-xl">
		<div class="flex flex-col justify-center items-center mt-16">
			<div class="flex flex-col justify-center items-center">
				<img
					src="https://avatars.githubusercontent.com/u/34831190?v=3"
					class="w-1/4 lg:w-1/12 rounded-full"
					alt="Me"
				/>
				<h4 class="quote mt-4">Hi, I'm Jess</h4>
				<div class="w-full md:w-3/4 lg:w-1/2">
					<p class="text-2xl text-center mb-8 leading-12 mt-4">
						Developer with professional experience in full-stack web development and a love for
						.NET, c++ and design.
					</p>
					<div
						class="mt-4 border-t border-t-accent pt-4 flex justify-between w-full md:w-3/4 m-auto"
					>
						<a href="https://github.com/jvanhouts" target="_blank" class="inline underline"
							><Github class="inline mr-1" />jvanhouts</a
						>
						<a href="mailto:hi@jvanhouts.com" target="_blank" class="inline underline"
							><Mail class="inline mr-1" />hi@jvanhouts.com</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="w-full px-0 pt-0 flex flex-col items-center justify-center pb-16">
	<div class="w-11/12 xl:w-3/4 3xl:w-1/2 max-w-screen-xl">
		<div class="mt-16 mb-8 pt-4 border-top-solid border-secondary lg:flex lg:justify-between">
			<h2 class="text-4xl mb-3 lg:mb-0 font-bold text-secondary">Recent Projects</h2>
			<a
				class="btn bg-[#c3b1e1] text-black text-xl block mt-4 md:mt-0"
				href="https://github.com/jvanhouts"
				target="_blank"
				rel="noreferrer"
				>View more on GitHub<ArrowRight class="ml-2 mb-1 inline" />
			</a>
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<section class="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-fit text-secondary">
			<div
				class="card shadow rounded-md"
				on:click={(x) => redirect('https://simmer.io/@gunwunbun/slimeshooter')}
			>
				<div class="relative">
					<div>
						<img
							src={SlimeShooterImage}
							alt="Slime Shooter cover art"
							class="lg:h-64 2xl:h-72 3xl:h-80 opacity-85 w-full rounded-t-md"
						/>
						<div
							class="w-full h-full bg-gray-500 absolute top-0 left-0 opacity-80 hover:opacity-0"
						/>
					</div>
					<div
						class="absolute bottom-0 bg-[#c3b1e1] p-2 px-4 text-center font-bold text-3xl border-2 border-secondary rounded-tr-md"
					>
						Slime Shooter
					</div>
				</div>
				<div class="bg-white p-8 w-full h-full border-2 border-secondary rounded-b-md">
					<p class="mt-2 mb-4 leading-relaxed text-lg">Top-Down Shooter game made with Unity.</p>
					<a class="underline font-bold text-2xl" href="https://simmer.io/@gunwunbun/slimeshooter"
						>Play the Game</a
					>
				</div>
			</div>
			<div
				class="card shadow rounded-md"
				on:click={(x) => redirect('https://github.com/hollow-em/lizardLauncher')}
			>
				<div class="relative">
					<div>
						<img
							src={UnotyImage}
							alt="Lizard Launcher cover art"
							class="lg:h-64 2xl:h-72 3xl:h-80 opacity-85 w-full rounded-t-md"
						/>
						<div
							class="w-full h-full bg-gray-500 absolute top-0 left-0 opacity-80 hover:opacity-0"
						/>
					</div>

					<div
						class="absolute bottom-0 bg-[#c3b1e1] p-2 w-fit text-center font-bold text-3xl border-2 border-secondary rounded-tr-md px-4"
					>
						Unoty
					</div>
				</div>
				<div class="bg-white p-8 w-full h-full border-2 border-secondary rounded-b-md">
					<p class="mt-2 mb-4 leading-relaxed text-lg">
						C++ game engine and game developed during my systems programming minor.
					</p>

					<a
						class="underline font-bold text-2xl"
						href="https://github.com/school-projects-gwb/unoty/">Check out the GitHub</a
					>
				</div>
			</div>
			<div
				class="card shadow rounded-md"
				on:click={(x) => redirect('https://github.com/hollow-em/lizardLauncher')}
			>
				<div class="relative">
					<div>
						<img
							src={LizardLauncherImage}
							alt="Lizard Launcher cover art"
							class="lg:h-64 2xl:h-72 3xl:h-80 opacity-85 w-full rounded-t-md"
						/>
						<div
							class="w-full h-full bg-gray-500 absolute top-0 left-0 opacity-80 hover:opacity-0"
						/>
					</div>

					<div
						class="absolute bottom-0 bg-[#c3b1e1] p-2 w-fit px-4 text-center font-bold text-3xl border-2 border-secondary rounded-tr-md"
					>
						Lizard Launcher
					</div>
				</div>
				<div class="bg-white p-8 w-full h-full border-2 border-secondary rounded-b-md">
					<p class="mt-2 mb-4 leading-relaxed text-lg">
						[CLOSED ALPHA] Cataclysm: Dark Days Ahead launcher desktop app built with Rust and
						Svelte.
					</p>
				</div>
			</div>
		</section>
	</div>
</div>
