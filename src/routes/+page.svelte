<script lang="ts">
    import { ArrowRight, Globe, ClipboardList } from 'lucide-svelte';
    import SlimeShooterImage from '$lib/assets/slime_shooter.png';
    import LizardLauncherImage from '$lib/assets/lizard_launcher.png';

    const redirect = (url: string) => window.open(url, '_blank');
</script>

<div class="w-full py-8 flex items-center justify-center">
    <div class="w-11/12 md:w-3/4 2xl:w-1/2 max-w-screen-xl">        
        <div class="flex flex-col justify-center items-center mt-16">
            <div class="flex flex-col justify-center items-center">
                <img src="https://avatars.githubusercontent.com/u/34831190?v=3" class="w-1/4 lg:w-3/12 rounded-full" alt="Me" />
                <h4 class="quote mt-4">byte me;</h4>
            </div>
        </div>
    </div>
</div>

<div class="w-full px-0 pt-0 lg:pb-8 pb-8 flex items-center justify-center">
    <div class="w-11/12 xl:w-3/4 3xl:w-1/2 max-w-screen-xl">
        <div class="mt-16 mb-8 pt-4 border-top-solid flex justify-between">
            <h2 class="font-semibold text-3xl">Recent Projects</h2>
            <a class="btn-border git rounded border" href="https://github.com/gunwunbun" target="_blank" rel="noreferrer">View more on GitHub<ArrowRight class="ml-2 mb-1 inline" /></a>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-fit">
            <div class="card" on:click={ x => redirect("https://simmer.io/@gunwunbun/slimeshooter") }>
                <img src={SlimeShooterImage} alt="Slime Shooter cover art" class="lg:h-64 2xl:h-72 3xl:h-80">
                <div class="bg-accent p-8 w-11/12 h-36">
                    <h1 class="title text-white">Slime Shooter<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline lucide-icon lucide lucide-arrow-right arrow ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></h1>
                    <p class="mt-2 mb-4 leading-relaxed text-lg text-gray-100">Top-Down Shooter game made with Unity, built for WebGL.</p>
                </div>
            </div>
            <div class="card" on:click={ x => redirect("https://github.com/hollow-em/lizardLauncher") }>
                <img src={LizardLauncherImage} alt="Lizard Launcher cover art" class="lg:h-64 2xl:h-72 3xl:h-80">
                <div class="bg-accent p-8 w-11/12 h-36">
                    <h1 class="title text-white">Lizard Launcher <span class="text-gray-300 text-sm">(Closed Alpha)</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline lucide-icon lucide lucide-arrow-right arrow ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></h1>
                    <p class="mt-2 mb-4 leading-relaxed text-lg text-gray-100">Cataclysm: Dark Days Ahead launcher app built with Rust and SvelteKit.</p>
                </div>
            </div>
        </div>

        <div class="mt-24 mb-8">
            <h2 class="pt-4 border-top-solid font-semibold text-4xl">Working experience</h2>
        </div>

        <div class="mt-12 pl-8 border-l-4 border-secondary-light w-full lg:w-3/4 relative">
            <span class="work-icon">
                <Globe size="18" />
            </span>
            <h1 class="title">Steel Vintage Bikes GmbH</h1>
            <time class="text-gray-500 text-lg inline-block my-1.5 font-medium">2019 - Current</time>
            <p class="paragraph">Full-stack web development. Building and maintaining Magento 2 e-commerce store.</p>

            <div class="pl-8 mt-8 border-l-4 border-secondary-light">
                <span class="work-icon">
                    <ClipboardList size="18" />
                </span>
                <h3 class="text-xl font-semibold tracking-tight">Remote job</h3>
                <time class="text-gray-500 inline-block my-1.5 font-medium">Feb 2020 - Current</time>
                <p class="paragraph">Front-end redesign and migration, administrative tool development and sysadmin tasks.</p>
            </div>

            <div class="pl-8 pt-8 border-l-4 border-secondary-light">
                <span class="work-icon">
                    <ClipboardList size="18" />
                </span>
                <h3 class="text-xl font-semibold tracking-tight">Internship abroad</h3>
                <time class="text-gray-500 inline-block my-1.5 font-medium">Sep 2019 - Feb 2020</time>
                <p class="paragraph">Magento 1 > 2 migration and development of administrative tool.</p>
            </div>
        </div>

        <div class="pt-12 pl-8 border-l-4 border-secondary-light w-full lg:w-3/4 relative">
            <span class="work-icon">
                <Globe size="18" />
            </span>
            <h1 class="title">React Online</h1>
            <time class="text-gray-500 text-lg inline-block my-1.5 font-medium">2021</time>
            <p class="paragraph">Built the proof of concept of a digital library based on Drupal, applying Optical Character Recognition (OCR) on old newspapers and documents and exploring the Apache Solr search platform.</p>    
        </div>
    </div>
</div>