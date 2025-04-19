const isHighlighted = ref<boolean>(false);


export function useContacts() {
  const highlightBlock = () => {
    setTimeout(() => {
      isHighlighted.value = true

      setTimeout(() => isHighlighted.value = false, 700)
    }, 700)
  }

  const scrollToBlock = () => {
    const block: HTMLDivElement | null = document.querySelector('#contactsBlock');
    if (!block) return;

    block.scrollIntoView({behavior: 'smooth'});
    highlightBlock()
  }

  return {
    isHighlighted,
    scrollToBlock
  }
}