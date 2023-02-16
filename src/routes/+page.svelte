<script lang="ts">
    import ThemeToggle from "$lib/ThemeToggle.svelte";
    import { ArrowRight, Globe, ClipboardList } from 'lucide-svelte';

    const redirect = (url: string) => window.open(url, '_blank');
</script>

<div class="w-full py-8 flex items-center justify-center">
    <div class="w-11/12 md:w-3/4 2xl:w-1/2 max-w-screen-xl">
        <div class="relative w-full flex justify-end bg-secondary-light dark:bg-secondary py-4 rounded-xl">
            <ThemeToggle />
            <a class="btn git rounded border mr-8" href="https://github.com/jvanhouts" target="_blank" rel="noreferrer">GitHub<ArrowRight class="ml-2 mb-1 inline" /></a>
        </div>
        
        <div class="flex flex-col justify-center items-center mt-16">
            <div class="flex flex-col justify-center items-center">
                <img src="https://avatars.githubusercontent.com/u/34831190?v=3" class="w-1/4 lg:w-3/12 rounded-full" alt="Me" />
                <h4 class="quote mt-4">byte me;</h4>
            </div>
        </div>
    </div>
</div>

<div class="w-full px-0 pt-0 lg:pb-8 pb-8 flex items-center justify-center">
    <div class="w-11/12 md:w-3/4 2xl:w-1/2 max-w-screen-xl">
        <div class="mt-16">
            <h2 class="tracking-tight font-semibold text-4xl">Projects</h2>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-fit">
            <div class="bg-accent rounded-xl p-8 mt-8 card flex flex-col justify-between"on:click={ x => redirect("https://github.com/hollow-em/lizardLauncher") }>
                <div>
                    <h1 class="title text-white">Lizard Launcher</h1>
                    <p class="my-6 leading-relaxed text-xl text-white">Cross-platform desktop app built with Rust and SvelteKit. Used to manage and launch the game Cataclysm: Dark Days Ahead.</p>
                </div>
                <span class="btn-inline flex items-center text-white" href="https://github.com/gunwunbun">Take me there <ArrowRight class="arrow ml-1" /></span>
            </div>

            <div class="bg-secondary-light rounded-xl p-8 lg:mt-8 card flex flex-col justify-between" on:click={ x => redirect("https://github.com/gunwunbun") }>
                <div>
                    <h1 class="title">Other</h1>
                    <p class="my-6 leading-relaxed text-xl">Check out my GitHub to see all of my work.</p>
                </div>
                <span class="btn-inline flex items-center">Take me there <ArrowRight class="arrow ml-1"/></span>
            </div>
        </div>

        <div class="mt-16">
            <h2 class="tracking-tight font-semibold text-4xl">Working experience</h2>
        </div>

        <div class="mt-12 pl-8 border-l-4 border-secondary-light w-full lg:w-1/2 relative">
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

        <div class="pt-12 pl-8 border-l-4 border-secondary-light w-full lg:w-1/2 relative">
            <span class="work-icon">
                <Globe size="18" />
            </span>
            <h1 class="title">React Online</h1>
            <time class="text-gray-500 text-lg inline-block my-1.5 font-medium">2021</time>
            <p class="paragraph">Built the proof of concept of a digital library based on Drupal, applying Optical Character Recognition (OCR) on old newspapers and documents and exploring the Apache Solr search platform.</p>    
        </div>
    </div>
</div>