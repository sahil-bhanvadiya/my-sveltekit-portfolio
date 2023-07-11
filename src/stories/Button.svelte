<script lang="ts">
  import "./button.css";

  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor: string | undefined = undefined;
  /**
   * How large should the button be?
   */
  export let size: "small" | "medium" | "large" = "medium";
  /**
   * Button contents
   */
  export let label: string = "";

  // Change the tailwind bg classes to see the button background change on save
  $: mode = primary ? "bg-sky-500" : "bg-fuchsia-600";

  $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

<button
  type="button"
  class={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
  {style}
  on:click
>
  {label}
</button>