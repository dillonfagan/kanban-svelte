<script>
    const defaultClass = "p-2 rounded";
    let customClass = $$props.class;

    const styles = () => customClass ? `${defaultClass} ${customClass}` : defaultClass;
</script>

<button on:click class={styles()}>
    <slot />
</button>