<script>
	import '@fontsource/quicksand';
	import '@fontsource/quicksand/500.css';

	import '@fontsource/koulen';
	import '@fontsource/koulen/400.css';

	import '@fontsource-variable/figtree';

	import '../app.css';
</script>

<head>
	<title>Jess van Houts</title>
</head>

<main class="wrapper flex items-center flex-col w-full h-fit min-h-screen bg-white">
	<header class="site-header">
		<nav class="site-toggle" aria-label="Primary">
			<a href="/" class="site-toggle__item site-toggle__item--active" aria-current="page">Website</a>
			<a href="http://localhost:5174/" class="site-toggle__item">Blog</a>
		</nav>
	</header>
	<slot />
</main>
