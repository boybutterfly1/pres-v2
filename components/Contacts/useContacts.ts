import { useState } from '#app';

export function useContacts() {
  const isHighlighted = useState<boolean>('contacts-highlighted', () => false);

  const highlightBlock = () => {
    setTimeout(() => {
      isHighlighted.value = true;

      setTimeout(() => {
        isHighlighted.value = false;
      }, 700);
    }, 700);
  };

  const scrollToBlock = () => {
    if (import.meta.client) {
      const block: HTMLElement | null = document.querySelector('#contactsBlock');
      if (!block) return;

      block.scrollIntoView({ behavior: 'smooth' });
      highlightBlock();
    }
  };

  return {
    isHighlighted,
    scrollToBlock,
  };
}
