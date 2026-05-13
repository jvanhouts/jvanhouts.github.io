<script lang="ts">
	import { ArrowRight, Github, Mail } from 'lucide-svelte';
	import GameCharacterImage from '$lib/assets/game_character.png';
</script>

<div
	class="h-screen w-full max-w-5xl px-8 lg:px-0 bg-white flex flex-col lg:flex-row pt-10 gap-20"
>
	<section class="w-full lg:w-5/12">
	<img src="https://github.com/jvanhouts.png" alt="Akiba" class="w-32 h-32 rounded-full object-cover" />
		<p class="text-xl mt-8">
			I'm a full-stack developer with a passion for building things!!
		</p>
	</section>
	<section class="w-full lg:w-7/12 pb-8 lg:pb-0">
		<h1>Some stuff I made</h1>
		<div class="flex mt-12 ml-3">
			<div class=" card card-shadow">
				<div class="card-shadow icon font-semibold text-4xl">U</div>
				<div>
					<h2 class="title">Unoty</h2>
					<p>A game engine built with c++ (SDL, Box2D), with an API familiar to Unity developers!</p>
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
					<p>A top-down shooter game built with Unity. Assets are all hand-made!</p>
					<a href="https://simmer.io/@gunwunbun/slimeshooter" target="_blank" class="button"
						>Bekijken <ArrowRight class="ml-2 inline arrow mb-0.5" />
					</a>
				</div>
			</div>
		</div>
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
	</section>
</div>
