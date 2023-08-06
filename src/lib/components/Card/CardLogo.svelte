<script lang="ts">
	export let src: string;
	export let alt: string = 'alt';
	export let size: number = 50;
	export let radius: string = '15px';
	export let classes: string = '';
</script>

<img
	class={`card-logo ${classes}`}
	{src}
	{alt}
	height={size}
	width={size}
	style={`border-radius:${radius};`}
/>
