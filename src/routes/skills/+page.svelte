<script lang="ts">
	import Card from '../../lib/components/Card/Card.svelte';
	import CardTitle from '../../lib/components/Card/CardTitle.svelte';
	import { base } from '$app/paths';
	import { SKILLS } from '../../lib/params';
	import SearchPage from '../../lib/components/SearchPage.svelte';
	import type { Skill } from '../../lib/types';
	import { getAssetURL } from '../../lib/data/assets';

	const { items, title } = SKILLS;

	let result: Array<Skill> = items;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (query && query !== '') {
			result = items;
		}

		result = items.filter((it) => it.name.toLowerCase().includes(query));
	};
</script>

<SearchPage {title} on:search={onSearch}>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
		{#each result as skill (skill.slug)}
			<Card
				classes={['cursor-pointer']}
				tiltDegree={1}
				href={`${base}/skills/${skill.slug}`}
				bgImg={getAssetURL(skill.logo)}
			>
				<CardTitle title={skill.name} />
			</Card>
		{/each}
	</div>
</SearchPage>
