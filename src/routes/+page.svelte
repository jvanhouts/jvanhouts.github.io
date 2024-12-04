<script lang="ts">
	import { ArrowRight, Github, Mail } from 'lucide-svelte';
	import GameCharacterImage from '$lib/assets/game_character.png';
</script>

<div
	class="h-screen w-full max-w-5xl px-8 lg:px-0 bg-[#F7FFF5] flex flex-col lg:flex-row pt-16 gap-20"
>
	<section class="w-full lg:w-5/12">
		<h1>Over mij</h1>
		<p class="text-xl mt-8">
			Ik ben een full-stack softwareontwikkelaar en houd van technisch complexe projecten. Ik wil de
			best mogelijke software bouwen en ik ben ontzettend gemotiveerd en leergierig.
		</p>
		<a href="mailto:hi@jvanhouts.com" target="_blank" class="inline-block underline text-lg mt-4"
			><Mail class="inline mr-1" />hi@jvanhouts.com</a
		>
	</section>
	<section class="w-full lg:w-7/12 pb-8 lg:pb-0">
		<h1>Recente projecten</h1>
		<div class="flex mt-12 ml-3">
			<div class=" card card-shadow">
				<div class="card-shadow icon">
					<Github size={40} />
				</div>
				<div>
					<h2 class="title">GitHub</h2>
					<p>Al mijn publiekelijk beschikbare code & projecten</p>
					<a href="https://github.com/jvanhouts" target="_blank" class="button"
						>Bekijken <ArrowRight class="ml-2 inline arrow mb-0.5" />
					</a>
				</div>
			</div>
		</div>
		<div class="flex mt-12 ml-3">
			<div class=" card card-shadow">
				<div class="card-shadow icon font-semibold text-4xl">U</div>
				<div>
					<h2 class="title">Unoty</h2>
					<p>Een c++ game engine gebouwd in c++ met gebruik van SDL en Box2D.</p>
					<a href="https://github.com/school-projects-gwb/unoty/" target="_blank" class="button"
						>Bekijken <ArrowRight class="ml-2 inline arrow mb-0.5" />
					</a>
				</div>
			</div>
		</div>
		<div class="flex mt-12 ml-3">
			<div class=" card card-shadow">
				<div class="card-shadow icon">
					<img
						src={GameCharacterImage}
						alt="Slime Shooter sprite van het hoofdkarakter; een meisje met blauw haar en een paarse outfit"
					/>
				</div>
				<div>
					<h2 class="title">Slime Shooter</h2>
					<p>Een game gemaakt in Unity.</p>
					<a href="https://simmer.io/@gunwunbun/slimeshooter" target="_blank" class="button"
						>Bekijken <ArrowRight class="ml-2 inline arrow mb-0.5" />
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
