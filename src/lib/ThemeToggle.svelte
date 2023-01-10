<script lang="ts">
    import { browser } from '$app/environment';

    let darkMode = true;

    function handleSwitchDarkMode() {
        darkMode = !darkMode;

        localStorage.setItem('theme', darkMode ? 'dark' : 'light');

        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
</script>

<label class="toggler">
    <input
        class="togglerInput"
        type="checkbox"
        checked='{ darkMode }'
        on:click={handleSwitchDarkMode}
    />{' '}
    <span class="ball"></span>
</label>

<style lang="postcss">
    .toggler {
        position: absolute;
        width: 50px;
        height: 25px;
        border-radius: .75rem;
        @apply top-6 left-8 bg-accent;
    }

    .toggler:hover {
        cursor: pointer;
    }

    .toggler .togglerInput {
        visibility: hidden;
    }

    .toggler .ball {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        display: block;
        background: white;
        position: absolute;
        top: 3px;
        left: 3px;
        transition: .2s;
    }

    .toggler .togglerInput:checked ~ .ball {
        transform: translateX(25px);
    }
</style>